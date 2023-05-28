import * as React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { sdk } from "@/lib/graphqlRequest";
import { useSession } from "next-auth/react";

export default function AiTranslation() {
  const [originalLanguage, setOriginalLanguage] = React.useState("English");
  const [targetLanguage, setTargetLanguage] = React.useState("Spanish");
  const [markupLanguage, setMarkupLanguage] = React.useState("Latex");
  const [text, setText] = React.useState("");
  const [taskId, setTaskId] = React.useState("");

  const { data: session } = useSession();

  async function handleTranslate() {
    const taskId = (
      await sdk.createTranslationTask(
        {
          original_language: originalLanguage,
          target_language: targetLanguage,
          text_type: markupLanguage,
          text: text,
        },
        {
          // @ts-ignore
          Authorization: `Bearer ${session?.user?.access_token}`,
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
        <TextField
          id="outlined-multiline-static"
          label="Text"
          placeholder="Put the text to translate here"
          multiline
          rows={10}
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{ width: "500px", marginTop: "20px" }}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ width: "150px", marginTop: "20px", alignSelf: "center" }}
          onClick={() => handleTranslate()}
        >
          Translate
        </Button>
      </div>
      {taskId && <TextTranslated taskId={taskId} />}
    </>
  );
}

interface TextTranslatedProps {
  taskId: string;
}

function TextTranslated({ taskId }: TextTranslatedProps) {
  return <>HOla mundo</>;
}
