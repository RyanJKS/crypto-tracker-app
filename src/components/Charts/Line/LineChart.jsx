import React from "react";
import "../Charts.css";
import ReactApexChart from "react-apexcharts";
import { LineChartDataFormat } from "../Formatter";

function LineChart({ data, time }) {
  const formattedData = LineChartDataFormat(data, time);

  const options = {
    chart: {
      id: "line-graph",
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    title: {
      text: "Line Chart",
      height: 550,
      align: "center",
    },
    xaxis: {
      title: {
        text: "Time",
        style: {
          fontSize: "14px",
        },
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
    },
  };

  const series = [
    {
      name: "Series 1",
      data: formattedData,
    },
  ];

  return (
    <div className="chart-container">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height="100%"
        width="100%"
      />
    </div>
  );
}

export default LineChart;
