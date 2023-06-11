import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";

function OverviewDialog() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onClick={() => setOpen(!open)} variant="contained">
        Overview
      </Button>
      <div
        style={{
          backgroundColor: "rgba(211,211,211,0.4)",
        }}
      >
        <Collapse in={open} timeout="auto" unmountOnExit>
          <CardContent>
            <Container
              sx={{
                lineHeight: 2,
              }}
            >
              An interview-centric course designed to prepare you for the role
              of SDE for both product and service-based companies. A placement
              preparation pack built with years of expertise. Learn Resume
              Building, C++, Java, DSA, CS Theory concepts, Aptitude, Reasoning,
              LLD, and much more!
            </Container>
          </CardContent>
        </Collapse>
      </div>
    </div>
  );
}

export default OverviewDialog;
