"use client";

import React, { FormEvent } from "react";
import { Box, TextField, Button } from "@mui/material";

const LoginForm: React.FC = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Logic to handle form submission
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        margin: "0 auto",
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        id="username"
        label="Username"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        type="password"
        margin="normal"
        required
      />
      <Button variant="contained" type="submit" sx={{ marginTop: "16px" }}>
        Sign In
      </Button>
    </Box>
  );
};

export default LoginForm;
