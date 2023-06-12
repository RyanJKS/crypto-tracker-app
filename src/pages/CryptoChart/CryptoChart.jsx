import React, { useState, useEffect } from "react";
import "./CryptoChart.css";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { buttonTimeStamps, buttonChartTypes } from "./ButtonTypes";
import LineChart from "../../components/Charts/Line/LineChart";
import CandleChart from "../../components/Charts/Candle/CandleChart";
import CircularProgress from "@mui/material/CircularProgress";
import { Times } from "./ButtonTypes";
import { axiosInstance } from "../../config/config";

function CryptoChart() {
  const navigate = useNavigate();
  const { coin } = useParams();
  const [selectedTimeButton, setSelectedTimeButton] = useState("7");
  const [selectedChartButton, setSelectedChartButton] = useState("Candlestick");
  const [isLoading, setIsLoading] = useState(false);
  const [chartsData, setChartsData] = useState([]);

  const handleClick = (buttonValue) => {
    setSelectedTimeButton(buttonValue);
  };
  const handleChartType = (buttonValue) => {
    setSelectedChartButton(buttonValue);
  };

  /************************************************************ */

  useEffect(() => {
    const makeMultipleApiCalls = async () => {
      const baseUrls = [`/line-chart/${coin}`, `/candlestick-chart/${coin}`];

      const data = [];

      try {
        setIsLoading(true);
        for (const baseUrl of baseUrls) {
          const responses = await Promise.all(
            Times.map(async (time) => {
              const response = await axiosInstance.get(`${baseUrl}/${time}`);
              return { [time]: response.data };
            })
          );

          data.push(responses);
        }

        setChartsData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log("Error fetching multiple data: ", error);
      }
    };

    makeMultipleApiCalls();
  }, [coin]);

  /************************************************************ */

  const DecideChart = () => {
    if (selectedChartButton === "Line") {
      return <LineChart data={chartsData[0]} time={selectedTimeButton} />;
    } else if (selectedChartButton === "Candlestick") {
      return <CandleChart data={chartsData[1]} time={selectedTimeButton} />;
    }
  };

  const OnLoading = () => {
    if (isLoading) {
      return <CircularProgress color="success" />;
    } else if (!isLoading && chartsData.length > 0) {
      return <DecideChart />;
    } else if (!isLoading && chartsData.length === 0) {
      return <h1>There is no data for this coin</h1>;
    } else {
      return null;
    }
  };

  return (
    <div className="chart-page-container">
      <h1>Crypto chart for {coin.toUpperCase()}</h1>
      {/*BACK HOME BUTTON */}
      <Button variant="contained" onClick={() => navigate("/")}>
        Back Home
      </Button>
      {/*CHART TYPE BUTTONS */}
      <div className="chart-types-btn">
        {buttonChartTypes.map((button) => (
          <Button
            key={button.value}
            variant={
              selectedChartButton === button.value ? "contained" : "outlined"
            }
            onClick={() => handleChartType(button.value)}
          >
            {button.label}
          </Button>
        ))}
      </div>
      {/*TIME STAMPS BUTTONS */}
      <div className="timestamps-btn">
        {buttonTimeStamps.map((button) => (
          <Button
            key={button.value}
            variant={
              selectedTimeButton === button.value ? "contained" : "outlined"
            }
            onClick={() => handleClick(button.value)}
          >
            {button.label}D
          </Button>
        ))}
      </div>
      {/*CHART BEING DISPLAYED */}
      <div className="chart-container">
        <OnLoading />
      </div>
    </div>
  );
}

export default CryptoChart;
