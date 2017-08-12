import React from "react";
import PropTypes from "prop-types";

import "./styles/CenterImageStyles.css";

export default function CenterImage(props) {
  const { width, height, src } = props;

  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
        width,
        height,
        maxHeight: "27rem",
        maxWidth: "calc(100% - 1rem)",
      }}
      alt="Center Image"
      className="center-image"
    />
  );
}

CenterImage.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
};
