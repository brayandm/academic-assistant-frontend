"use client";

import React from "react";
import { Typography, Container } from "@mui/material";
import AiTalker from "@/components/AiTalker";

function AiAssistant() {
  return (
    <div>
      <Container sx={{ paddingTop: "24px" }}>
        <Typography
          variant="h2"
          sx={{ marginTop: "100px", textAlign: "center" }}
        >
          AI Assistant
        </Typography>
      </Container>
      <Container
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <AiTalker
          openAiGptStreamerUrl={
            process.env.NEXT_PUBLIC_OPENAI_GPT_STREAMER_URL || ""
          }
          awsPollyStreamerUrl={
            process.env.NEXT_PUBLIC_AWS_POLLY_STREAMER_URL || ""
          }
          awsTranscribeStreamerUrl={
            process.env.NEXT_PUBLIC_AWS_TRANSCRIBE_STREAMER_URL || ""
          }
        />
      </Container>
    </div>
  );
}

export default AiAssistant;
