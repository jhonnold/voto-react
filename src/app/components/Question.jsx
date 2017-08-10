import React from "react";
import PropTypes from "prop-types";
import { DragSource, DropTarget } from "react-dnd";

import "./styles/QuestionStyles.css";

const QUESTION = "question";

const questionSource = {
  beginDrag(props) {
    return {
      id: props.id,
      originalIndex: props.findQuestion(props.id).index
    };
  },
  endDrag(props, monitor) {
    const { id: droppedId, originalIndex } = monitor.getItem();
    const didDrop = monitor.didDrop();

    if (!didDrop) {
      props.moveQuestion(droppedId, originalIndex);
    }
  }
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
  }
};

function Question(props) {
  const { img, isDragging, connectDragSource, connectDropTarget, id } = props;
  const opacity = isDragging ? 0 : 1;

  return connectDragSource(
    connectDropTarget(
      <div
        className="question-slide-preview-wrapper"
        onClick={() => props.onClick(id)}
        role="presentation"
      >
        <img
          className="question-slide-preview"
          src={img}
          alt="Slide Preview"
          style={{ opacity }}
        />
      </div>
    )
  );
}

Question.propTypes = {
  img: PropTypes.string,
  isDragging: PropTypes.bool,
  connectDragSource: PropTypes.func,
  connectDropTarget: PropTypes.func,
  id: PropTypes.number,
  onClick: PropTypes.func
};

export default DragSource(QUESTION, questionSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(
  DropTarget(QUESTION, questionTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  }))(Question)
);
