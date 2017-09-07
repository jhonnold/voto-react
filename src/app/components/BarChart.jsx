import React from "react";
import PropTypes from "prop-types";
import ReactHighcharts from "react-highcharts";

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
      categories: props.categories,
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

BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
  height: PropTypes.number.isRequired,
};
