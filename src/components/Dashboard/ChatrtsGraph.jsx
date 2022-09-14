import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    [
      "Day",
      "Student Requests",
      "Opportunities",
    ],
    [1, 10, 20],
    [2, 20, 10],
    [3, 30, 35],
    [4, 40, 60],
    [5, 55, 20],
    [6, 90, 50]
];

export const options = {
  chart: {
    title: "Intership Opportunities",
    subtitle: "in month for the past six months",
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
