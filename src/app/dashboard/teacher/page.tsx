"use client";

import PanelControl from "@/components/PanelControl";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import CreateIcon from "@mui/icons-material/Create";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { Typography } from "@mui/material";
import Translation from "@/components/Translation";

export default async function Teacher() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <PanelControl
          tabs={[
            {
              icon: <GTranslateIcon />,
              label: "Translation",
              component: <Translation />,
            },
            {
              icon: <CreateIcon />,
              label: "Problem Creation",
              component: (
                <Typography
                  variant="h2"
                  sx={{ marginTop: "200px", textAlign: "center" }}
                >
                  Teacher Section Problem Creation
                </Typography>
              ),
            },
            {
              icon: <InsertDriveFileIcon />,
              label: "Document Creation",
              component: (
                <Typography
                  variant="h2"
                  sx={{ marginTop: "200px", textAlign: "center" }}
                >
                  Teacher Section Document Creation
                </Typography>
              ),
            },
          ]}
        />
      </div>
    </>
  );
}
