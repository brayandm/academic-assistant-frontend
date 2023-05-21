"use client";

import React, { useState } from "react";
import { signOut } from "next-auth/react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { useGetMeQuery } from "@/graphql/graphql";
import { getOptions } from "@/utils/graphql";
import { useSession } from "next-auth/react";

const Dashboard: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUserPage = () => {
    // Logic to navigate to the user page
  };

  const handleLogout = () => {
    signOut();
  };

  const { data: session } = useSession();
  const { data } = useGetMeQuery(getOptions(session!));

  const username = data?.me?.name;

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit" onClick={handleClick}>
            Menu
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleUserPage}>Go to User Page</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Container sx={{ paddingTop: "24px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Card 1</Typography>
              <Typography variant="body1">Content of Card 1</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Card 2</Typography>
              <Typography variant="body1">Content of Card 2</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Card 3</Typography>
              <Typography variant="body1">Content of Card 3</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Typography
          variant="h1"
          sx={{ marginTop: "200px", textAlign: "center" }}
        >
          Welcome {username}
        </Typography>
      </Container>
    </div>
  );
};

export default Dashboard;
