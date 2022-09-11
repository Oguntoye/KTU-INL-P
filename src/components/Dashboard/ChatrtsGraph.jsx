import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    [
      "Day",
      "Student Requests",
      "Opportunities",
    ],
    [1, 37.8, 80.8],
    [2, 30.9, 69.5],
    [3, 25.4, 57],
    [4, 11.7, 18.8],
    [5, 11.9, 17.6],
    [6, 8.8, 13.6],
    [7, 7.6, 12.3],
];

export const options = {
  chart: {
    title: "Intership Opportunities",
    subtitle: "in days for the past week",
  },
};

const ChatrtsGraph = () => {
  return (
    <Chart
      chartType="Line"
      width="100%"
      height="200px"
      data={data}
      options={options}
    />
  );
};

export default ChatrtsGraph;
