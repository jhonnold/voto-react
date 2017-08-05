import React from 'react';
import {
  connect
} from 'react-redux';
import {
  DropTarget,
  DragDropContext
} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Question from './Question';

const QUESTION = 'question';

const questionTarget = {
  drop() {
  },
};

class QuestionContainer extends React.Component {
  moveQuestion = (id, atIndex) => {
    const { question, index } = this.findQuestion(id);
    // TODO add an action to dispatch to store to move card
    this.props.dispatchMoveQuestion(index, atIndex, question);
    //console.log('MOVED');
  }

  findQuestion = (id) => {
    const { questions } = this.props;
    const question = questions.filter(q => q.id === id)[0];

    return {
      question,
      index: questions.indexOf(question),
    }
  }

  render() {
    const {connectDropTarget, questions} = this.props;

    return connectDropTarget(
      <div style={{display: 'flex', flexDirection: 'column', width: '10rem'}}>
        {questions.map((question, i) => (
          <Question
            key={question.id}
            id={question.id}
            img={question.img}
            moveQuestion={this.moveQuestion}
            findQuestion={this.findQuestion}
          />
        ))}
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

