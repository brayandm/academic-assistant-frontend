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
  Box,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

function MenuNavigation() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { data: session } = useSession();

  const permissions = session?.user.permissions;

  return (
    <AppBar
      position="static"
      sx={{
        height: "8vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Box
            onClick={() => router.push("/dashboard")}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            Dashboard
          </Box>
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
          <MenuItem onClick={() => router.push("/dashboard")}>
            Dashboard
          </MenuItem>
          {permissions && permissions.includes("ADMIN") && (
            <MenuItem onClick={() => router.push("/dashboard/admin")}>
              Admin
            </MenuItem>
          )}
          {permissions && permissions.includes("TEACHER") && (
            <MenuItem onClick={() => router.push("/dashboard/teacher")}>
              Teacher
            </MenuItem>
          )}
          <MenuItem onClick={() => router.push("/dashboard/profile")}>
            Profile
          </MenuItem>
          <MenuItem onClick={() => signOut()}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default MenuNavigation;
