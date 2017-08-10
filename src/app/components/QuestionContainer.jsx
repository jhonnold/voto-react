import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { CircularProgress } from 'material-ui/Progress';
import Question from './Question';

import './styles/QuestionContainerStyles.css';

const QUESTION = 'question';

const questionTarget = {
  drop() {},
};

function QuestionContainer(props) {
  const { connectDropTarget, questions, pushingImageCount, onSelect } = props;
  let loaders;

  const findQuestion = (id) => {
    const question = questions.filter(q => q.id === id)[0];
    const index = questions.indexOf(question);

    return {
      question,
      index,
    };
  };

  const moveQuestion = (id, atIndex) => {
    const { question, index } = findQuestion(id);
    props.dispatchMoveQuestion(index, atIndex, question);
  };

  if (pushingImageCount > 0) {
    loaders = new Array(pushingImageCount);
    loaders.fill(
      <div className="question-image-progress-loader">
        <CircularProgress size={60} />
      </div>,
    );
  }

  return connectDropTarget(
    <div className="question-container">
      {questions.map((question) => {
        if (question.url) {
          return (
            <Question
              img={question.url}
              key={question.id}
              id={question.id}
              moveQuestion={moveQuestion}
              findQuestion={findQuestion}
              onClick={onSelect}
            />
          );
        }
        return null;
      })}
      {loaders}
    </div>,
  );
}

const mapDispatchToProps = dispatch => ({
  dispatchMoveQuestion: (index, atIndex, question) => {
    dispatch({
      type: 'QUESTION_CARD_MOVED',
      payload: {
        index,
        atIndex,
        question,
      },
    });
  },
});

QuestionContainer.propTypes = {
  connectDropTarget: PropTypes.func,
  questions: PropTypes.arrayOf(PropTypes.object),
  pushingImageCount: PropTypes.number,
  onSelect: PropTypes.func,
};

export default DragDropContext(HTML5Backend)(
  DropTarget(QUESTION, questionTarget, connecter => ({
    connectDropTarget: connecter.dropTarget(),
  }))(connect(null, mapDispatchToProps)(QuestionContainer)),
);
