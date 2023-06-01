import React, { useEffect, useContext } from "react";
import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useGetTranslationResultQuery } from "@/graphql/hooks";
import { useSession } from "next-auth/react";
import { GraphqlRequestClientContext } from "@/providers/GraphqlRequestClientProvider";

export default function AiTranslation() {
  const [originalLanguage, setOriginalLanguage] = React.useState("English");
  const [targetLanguage, setTargetLanguage] = React.useState("Spanish");
  const [markupLanguage, setMarkupLanguage] = React.useState("Latex");
  const [text, setText] = React.useState("");
  const [taskId, setTaskId] = React.useState("");
  const graphqlRequestClient = useContext(GraphqlRequestClientContext);

  const { data: session } = useSession();

  const { data, loading, error, refetch } = useGetTranslationResultQuery({
    variables: {
      task_id: taskId,
    },
    context: {
      headers: {
        Authorization: `Bearer ${session?.user.access_token}`,
      },
    },
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      void refetch();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [refetch]);

  async function handleTranslate() {
    const taskId = (
      await graphqlRequestClient.createTranslationTask(
        {
          original_language: originalLanguage,
          target_language: targetLanguage,
          text_type: markupLanguage,
          text: text,
        },
        {
          Authorization: `Bearer ${session?.user.access_token}`,
        }
      )
    ).createTranslationTask?.task_id;

    if (taskId) {
      setTaskId(taskId);
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "500px",
          justifyContent: "space-between",
        }}
      >
        <FormControl>
          <InputLabel>From</InputLabel>
          <Select
            value={originalLanguage}
            label="From"
            onChange={(e) => setOriginalLanguage(e.target.value)}
            sx={{ width: "150px" }}
          >
            <MenuItem value={"English"}>English</MenuItem>
            <MenuItem value={"Spanish"}>Spanish</MenuItem>
            <MenuItem value={"Russian"}>Russian</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>To</InputLabel>
          <Select
            value={targetLanguage}
            label="From"
            onChange={(e) => setTargetLanguage(e.target.value)}
            sx={{ width: "150px" }}
          >
            <MenuItem value={"English"}>English</MenuItem>
            <MenuItem value={"Spanish"}>Spanish</MenuItem>
            <MenuItem value={"Russian"}>Russian</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Markup Language</InputLabel>
          <Select
            value={markupLanguage}
            label="Markup Language"
            onChange={(e) => setMarkupLanguage(e.target.value)}
            sx={{ width: "150px" }}
          >
            <MenuItem value={"Latex"}>Latex</MenuItem>
            <MenuItem value={"Html"}>Html</MenuItem>
            <MenuItem value={"Markdown"}>Markdown</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "1100px",
            justifyContent: "space-between",
          }}
        >
          <TextField
            label="Input"
            placeholder="Put the text to translate here"
            multiline
            rows={10}
            value={text}
            onChange={(e) => setText(e.target.value)}
            sx={{ width: "500px", marginTop: "20px" }}
          />

          <TextField
            label="Output"
            multiline
            rows={10}
            value={
              data?.getTranslationResult?.status === "SUCCESS"
                ? data?.getTranslationResult?.text
                : ""
            }
            sx={{ width: "500px", marginTop: "20px" }}
          />
        </div>

        {!taskId || data?.getTranslationResult?.status == "SUCCESS" ? (
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            sx={{ width: "150px", marginTop: "20px", alignSelf: "center" }}
            onClick={() => handleTranslate()}
          >
            Translate
          </Button>
        ) : (
          <CircularProgress sx={{ marginTop: "20px", alignSelf: "center" }} />
        )}
      </div>
    </>
  );
}
