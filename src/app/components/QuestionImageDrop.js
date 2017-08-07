import React from 'react';
import HTML5Backend, {
  NativeTypes
} from 'react-dnd-html5-backend';
import {
  DragDropContext
} from 'react-dnd';

class QuestionImageDrop extends React.Component {

  _photoSelected = (e) => {

    const { files } = e.target;

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
      <div>
        <input
          type="file"
          ref="imgUploader"
          onChange={this._photoSelected}
          multiple="multiple"
        />
      </div>
    )
  }
}

export default QuestionImageDrop;
