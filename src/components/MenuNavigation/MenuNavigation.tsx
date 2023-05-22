"use client";

import React, { useState } from "react";
import { signOut } from "next-auth/react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { useRouter } from "next/navigation";

function MenuNavigation() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          onClick={() => router.push("/dashboard")}
          variant="h6"
          sx={{ flexGrow: 1, cursor: "pointer" }}
        >
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
          <MenuItem onClick={() => router.push("/dashboard/user")}>
            Profile
          </MenuItem>
          <MenuItem onClick={() => signOut()}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default MenuNavigation;
