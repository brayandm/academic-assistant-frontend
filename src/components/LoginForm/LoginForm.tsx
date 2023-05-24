"use client";

import { Box, TextField, Button, Alert } from "@mui/material";
import React, { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | undefined>(undefined);
  const searchParams = useSearchParams();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: true,
      callbackUrl: searchParams.get("callbackUrl") || "/dashboard",
    });

    if (res) {
      if (res?.error) {
        clearTimeout(timerId);
        setError(true);
        setTimerId(setTimeout(() => setError(false), 2000));
      }
    }
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
      <Box
        component="div"
        sx={{
          height: "50px",
          margin: "10px 0",
        }}
      >
        {error && <Alert severity="error">Bad credentials</Alert>}
      </Box>
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
