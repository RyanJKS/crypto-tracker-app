import React from "react";
import "../Charts.css";
import ReactApexChart from "react-apexcharts";
import { CandleChartDataFormat } from "../Formatter";

function CandleChart({ data, time }) {
  const formattedData = CandleChartDataFormat(data, time);

  const series = [
    {
      name: "candle",
      data: formattedData,
    },
  ];

  const options = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    title: {
      text: "CandleStick Chart",
      height: 550,
      align: "center",
    },
    xaxis: {
      type: "datetime",
      labels: {
        datetimeUTC: false,
      },
      title: {
        text: "Time",
        style: {
          fontSize: "14px",
        },
      },
    },
    tooltip: {
      x: {
        format: "dd MMM HH:MM",
      },
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return "£ " + value;
        },
      },
      title: {
        text: "Price",
        style: {
          fontSize: "14px",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <ReactApexChart
        options={options}
        series={series}
        type="candlestick"
        height="100%"
        width="100%"
      />
    </div>
  );
}

export default CandleChart;
