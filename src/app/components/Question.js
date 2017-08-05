import React from 'react';
import {
  DragSource,
  DropTarget,
} from 'react-dnd';

const QUESTION = 'question';

const questionSource = {
  beginDrag(props) {
    return {
      id: props.id,
      originalIndex: props.findQuestion(props.id).index,
    }
  },
  endDrag(props, monitor) {
    const { id: droppedId, originalIndex } = monitor.getItem();
    const didDrop = monitor.didDrop();

    if (!didDrop) {
      props.moveQuestion(droppedId, originalIndex);
    }
  },
};

const questionTarget = {
  canDrop() {
    return false;
  },
  hover(props, monitor) {
    const { id: draggedId } = monitor.getItem();
    const { id: overId } = props;

    if (draggedId !== overId) {
      const { index: overIndex } = props.findQuestion(overId);
      props.moveQuestion(draggedId, overIndex);
    }
  },
};

class Question extends React.Component {

  render() {

    const { img, isDragging, connectDragSource, connectDropTarget } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(connectDropTarget(
      <img src={img} style={{width: '100%', opacity}} alt='test' />
    ));
  }
}

Question = DropTarget(QUESTION, questionTarget, connect => ({
            connectDropTarget: connect.dropTarget(),
          }))(Question);

export default DragSource(QUESTION, questionSource, (connect, monitor) => ({
                  connectDragSource: connect.dragSource(),
                  isDragging: monitor.isDragging(),
                }))(Question);