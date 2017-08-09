import React from 'react';
import {
  DropTarget
} from 'react-dnd';
import './styles/QuestionImageDropStyles.css';

class QuestionImageDropTarget extends React.Component {

  render() {
    const {canDrop, connectDropTarget, isDragging} = this.props;

    return (
      <div className="image-drag-here">
        <span
          className="image-drag-here-text"
          style={{cursor: 'pointer'}}
          onClick={this.props.onClick}
        >
          Click Here or Drag Images to Upload!
        </span>
      </div>
    );
  }
};

const boxTarget = {
  drop(props, monitor, component) {
    component.props.onDrop(monitor.getItem().files[0]);
    return monitor.getItem();
  }
};

export default QuestionImageDropTarget;