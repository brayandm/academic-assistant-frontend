"use client";

import React from "react";
import { Container } from "@mui/material";
import AiTalker from "@/components/AiTalker";
import { useSession } from "next-auth/react";

function AiAssistant() {
  const { data: session } = useSession();

  return (
    <div>
      <Container
        sx={{
          marginTop: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AiTalker
          userToken={session?.user.access_token || ""}
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
