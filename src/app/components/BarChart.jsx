import React from "react";
import PropTypes from "prop-types";
import ReactHighcharts from "react-highcharts";
import { Grid } from "material-ui";

export default function BarChart(props) {
  const config = {
    title: {
      text: "Results",
      style: {
        color: "#3d464d",
        fontFamily: "roboto",
        fontWeight: 400,
      },
    },
    xAxis: {
      categories: ["A", "B", "C", "D", "E"],
    },
    yAxis: {
      title: {
        text: null,
      },
    },
    series: [
      {
        data: props.data,
        allowPointSelection: true,
        borderColor: "#3f51b5",
        color: "#3185db",
        name: "Votes",
      },
    ],
    chart: {
      height: props.height,
      type: "bar",
    },
  };

  return <ReactHighcharts config={config} />;
}

BarChart.defaultProps = {
  data: [1, 2, 3, 4, 5],
};
