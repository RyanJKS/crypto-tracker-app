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
              Welcome to Crypto Tracker!
              <br />
              Start with searching for a cryptocurrency by putting their name in
              the search field. Then wait for the API to get a response back to
              view the market sentiment. You can also headover to the news
              section in order to make your own jusdgement about the analysis
              given. To learn more about the API, click{" "}
              <a
                href="https://www.coingecko.com/en/api/documentation"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
              <br />
              To view more of my projects, click{" "}
              <a href="https://jhelan.dev/" target="_blank" rel="noreferrer">
                here
              </a>
            </Container>
          </CardContent>
        </Collapse>
      </div>
    </div>
  );
}

export default OverviewDialog;
