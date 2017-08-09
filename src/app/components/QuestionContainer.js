import React from 'react';
import {
  connect
} from 'react-redux';
import {
  DropTarget,
  DragDropContext,
} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
// import {
//   default as TouchBackend
// } from 'react-dnd-touch-backend';
// import MultiBackend from 'react-dnd-multi-backend';
// import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch';
import {
  CircularProgress
} from 'material-ui/Progress';

import Question from './Question';

import './styles/QuestionContainerStyles.css';

const QUESTION = 'question';

const questionTarget = {
  drop() {
  },
};

class QuestionContainer extends React.Component {
  moveQuestion = (id, atIndex) => {
    const { question, index } = this.findQuestion(id);
    this.props.dispatchMoveQuestion(index, atIndex, question);
    //console.log('MOVED');
  };

  findQuestion = (id) => {
    const { questions } = this.props;
    const question = questions.filter(q => q.id === id)[0];

    return {
      question,
      index: questions.indexOf(question),
    }
  };

  render() {
    const {connectDropTarget, questions, pushingImageCount } = this.props;

    let loaders = [];
    for (let i = 0; i < pushingImageCount; i++) {
      loaders.push(
        <div className="question-image-progress-loader">
          <CircularProgress size={60} />
        </div>
      );
    }

    return connectDropTarget(
      <div className="question-container">
        {
          questions.map((question) => {
            if (question.url) {
              return (
                <Question
                  img={question.url}
                  key={question.id}
                  id={question.id}
                  moveQuestion={this.moveQuestion}
                  findQuestion={this.findQuestion}
                  onClick={this.props.onSelect}
                />
              );
            } else {
              return null;
            }
          })}
        {loaders}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  {
    dispatchMoveQuestion: (index, atIndex, question) => {
      dispatch({
        type: 'QUESTION_CARD_MOVED',
        payload: {
          index,
          atIndex,
          question,
        }
      })
    },
  }
);

QuestionContainer = connect(null, mapDispatchToProps)(QuestionContainer);
QuestionContainer = DropTarget(QUESTION, questionTarget, connect => ({
                      connectDropTarget: connect.dropTarget(),
                    }))(QuestionContainer);

export default DragDropContext(HTML5Backend)(QuestionContainer);

