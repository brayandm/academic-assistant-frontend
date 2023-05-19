"use client";

import React, { FormEvent, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });
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
        id="email"
        label="Email"
        variant="outlined"
        margin="normal"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        type="password"
        margin="normal"
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button variant="contained" type="submit" sx={{ marginTop: "16px" }}>
        Sign In
      </Button>
    </Box>
  );
};

export default LoginForm;
