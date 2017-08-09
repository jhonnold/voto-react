import React from 'react';
import HTML5Backend, {
  NativeTypes
} from 'react-dnd-html5-backend';
import {
  DragDropContext
} from 'react-dnd';
import DropZone from 'react-dropzone';
import QuestionImageDropTarget from './QuestionImageDropTarget';
import './styles/QuestionImageDropStyles.css';

class QuestionImageDrop extends React.Component {

  _photoSelected = (files) => {

    for (let i = 0; i < files.length; i++) {

      ((file) => {
        let formData = new FormData();
        formData.append('image', file);
        this.props.onNewImage(formData);
      })(files[i])

    }

  }

  render() {
    return (
      <DropZone
        className="image-drag-here"
        onDrop={this._photoSelected}
        style={{cursor: 'pointer'}}
      >
        {({ isDragActive }) => {
          if (!isDragActive) {
            return (
              <span
                className="image-drag-here-text"
              >
                Click Here or Drag Images to Upload!
              </span>
            );
          } else {
            return (
              <span
                className="image-drag-here-text"
                style={{margin: '5rem 0'}}
                onClick={this.props.onClick}
              >
                Drag Here!
              </span>
            )
          }
        }}
      </DropZone>
    )
  }
}

export default QuestionImageDrop;
