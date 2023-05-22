"use client";

import { Box } from "@mui/material";
import { useTheme } from "@mui/material";

const PanelControl = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "250px",
        height: "92vh",
        backgroundColor: theme.palette.primary.dark,
      }}
    ></Box>
  );
};

export default PanelControl;
