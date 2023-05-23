"use client";

import PanelControl from "@/components/PanelControl";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { Typography } from "@mui/material";

export default async function Admin() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <PanelControl
          tabs={[
            {
              icon: <PersonIcon />,
              label: "User Management",
              component: (
                <Typography
                  variant="h2"
                  sx={{ marginTop: "200px", textAlign: "center" }}
                >
                  Admin Section User Management
                </Typography>
              ),
            },
            {
              icon: <AccountBalanceWalletIcon />,
              label: "Billing Information",
              component: (
                <Typography
                  variant="h2"
                  sx={{ marginTop: "200px", textAlign: "center" }}
                >
                  Admin Section Billing Information
                </Typography>
              ),
            },
            {
              icon: <SmartToyIcon />,
              label: "AI Management",
              component: (
                <Typography
                  variant="h2"
                  sx={{ marginTop: "200px", textAlign: "center" }}
                >
                  Admin Section AI Management
                </Typography>
              ),
            },
          ]}
        />
      </div>
    </>
  );
}
