import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import CryptoChart from "./CryptoChart/CryptoChart";

function RoutingPaths() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chart/:ticker" element={<CryptoChart />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default RoutingPaths;
