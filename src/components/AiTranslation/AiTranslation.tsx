import React, { useEffect, useContext } from "react";
import {
  Alert,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useGetTranslationResultQuery } from "@/graphql/hooks";
import { useSession } from "next-auth/react";
import { GraphqlRequestClientContext } from "@/providers/GraphqlRequestClientProvider";
import { getGraphqlError } from "@/utils/graphql";

export default function AiTranslation() {
  const [originalLanguage, setOriginalLanguage] = React.useState("English");
  const [targetLanguage, setTargetLanguage] = React.useState("Spanish");
  const [markupLanguage, setMarkupLanguage] = React.useState("Latex");
  const [text, setText] = React.useState("");
  const [taskId, setTaskId] = React.useState("");
  const graphqlRequestClient = useContext(GraphqlRequestClientContext);
  const [showError, setShowError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [newRequest, setNewRequest] = React.useState(false);

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
      if (taskId && newRequest) {
        void refetch();
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [refetch, taskId, newRequest]);

  function handleTranslate() {
    graphqlRequestClient
      .createTranslationTask(
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
      .then((res) => {
        const taskId = res.createTranslationTask?.task_id;

        if (taskId) {
          setTaskId(taskId);
          setNewRequest(true);
        }
      })
      .catch((err) => {
        setShowError(true);

        const error = getGraphqlError(err);

        setErrorMessage(
          error ? error : "There was an error translating the text"
        );
      });
  }

  if (newRequest && data && data?.getTranslationResult?.status != "PENDING") {
    if (data?.getTranslationResult?.status == "FAILED") {
      setShowError(true);
      setErrorMessage("There was an error translating the text");
    }
    setNewRequest(false);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "35vw",
          justifyContent: "space-between",
        }}
      >
        <FormControl>
          <InputLabel>From</InputLabel>
          <Select
            value={originalLanguage}
            label="From"
            onChange={(e) => setOriginalLanguage(e.target.value)}
            sx={{ width: "10vw" }}
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
            sx={{ width: "10vw" }}
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
            sx={{ width: "10vw" }}
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
          width: "35vw",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "75vw",
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
            sx={{ width: "35vw", marginTop: "20px" }}
          />

          <TextField
            label="Output"
            multiline
            rows={10}
            value={
              data && data?.getTranslationResult?.status != "PENDING"
                ? data?.getTranslationResult?.text
                : ""
            }
            sx={{ width: "35vw", marginTop: "20px" }}
          />
        </div>

        {!taskId ||
        (data && data?.getTranslationResult?.status != "PENDING") ? (
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
      <Snackbar
        open={showError}
        autoHideDuration={3000}
        onClose={() => setShowError(false)}
      >
        <Alert
          onClose={() => setShowError(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
