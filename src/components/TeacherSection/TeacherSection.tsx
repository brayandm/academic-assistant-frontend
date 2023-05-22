"use client";

import React from "react";
import { Typography, Container } from "@mui/material";

function TeacherSection() {
  return (
    <div>
      <Container sx={{ paddingTop: "24px" }}>
        <Typography
          variant="h2"
          sx={{ marginTop: "200px", textAlign: "center" }}
        >
          Teacher Section
        </Typography>
      </Container>
    </div>
  );
}

export default TeacherSection;
