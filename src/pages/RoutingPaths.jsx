import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import CryptoChart from "./CryptoChart/CryptoChart";

function RoutingPaths() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chart/:coin" element={<CryptoChart />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default RoutingPaths;
