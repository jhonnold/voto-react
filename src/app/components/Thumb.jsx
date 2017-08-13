import React from "react";
import PropTypes from "prop-types";

export default function renderThumb({ style, ...props }) {
  const thumbStyle = {
    backgroundColor: "#3f51b5",
    opacity: 1,
    height: "1rem",
    cursor: "pointer",
    minHeight: "min-content",
  };

  return <div style={{ ...style, ...thumbStyle }} {...props} />;
}

renderThumb.propTypes = {
  style: PropTypes.objectOf(PropTypes.string).isRequired,
};
