import React from 'react';
import HTML5Backend, {
  NativeTypes
} from 'react-dnd-html5-backend';
import {
  DragDropContext
} from 'react-dnd';

class QuestionImageDrop extends React.Component {

  _handleReaderLoaded = (e) => {
    console.log(e);
  }

  _photoSelected = (e) => {

    const { files } = e.target;

    for (let i = 0; i < files.length; i++) {

      ((file) => {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.props.addQuestion(e.target.result);
        };
        reader.readAsDataURL(file);
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
