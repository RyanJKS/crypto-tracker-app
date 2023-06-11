import React from "react";
import "./CryptoChart.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CryptoChart() {
  const navigate = useNavigate();

  return (
    <div className="chart-page-container">
      <h1>Crypto Chart for ETH</h1>
      <Button variant="contained" onClick={() => navigate("/")}>
        Back Home
      </Button>
      <h1>Toggle Chart Button</h1>
      <h2>Time buttons</h2>
      <h3>Decide which chart to go to?</h3>
    </div>
  );
}

export default CryptoChart;
