import React from "react";
import PropTypes from "prop-types";

import "./styles/CenterImageStyles.css";

export default function CenterImage(props) {
  const { width, height, src } = props;

  if (src !== null) {
    return (
      <div
        style={{
          backgroundImage: `url(${src})`,
          width: width || 0,
          height: height || 0,
          maxHeight: "27rem",
          maxWidth: "calc(100% - 1rem)",
        }}
        alt="Center Image"
        className="center-image"
      />
    );
  }
  
  return (
    <div className="center-image-text">{props.message}</div>
  );
}

CenterImage.defaultProps = {
  src: "",
};

CenterImage.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  src: PropTypes.string,
};
