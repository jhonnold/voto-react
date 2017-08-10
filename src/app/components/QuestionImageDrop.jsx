import React from 'react';
import PropTypes from 'prop-types';
import DropZone from 'react-dropzone';

import './styles/QuestionImageDropStyles.css';

export default function QuestionImageDrop(props) {
  const onDrop = (files) => {
    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];
      const formData = new FormData();
      formData.append('image', file);
      props.onNewImage(formData);
    }
  };

  return (
    <DropZone className="image-drag-here" onDrop={onDrop}>
      <span className="image-drag-here-text">
        Click Here or Drag Images to Upload!
      </span>
    </DropZone>
  );
}

QuestionImageDrop.propTypes = {
  onNewImage: PropTypes.func.isRequired,
};
