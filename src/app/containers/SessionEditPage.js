import React from 'react';
import {
  connect
} from 'react-redux';
import {
  getSessionQuestions
} from '../redux/actions/questionActions';
import QuestionContainer from '../components/QuestionContainer';

class SessionEditPage extends React.Component {

  componentDidMount() {
    this.props.getQuestions(this.props.match.params.sessionId);
  }

  render() {
    return (
      <div>
        <QuestionContainer questions={this.props.questions} />
      </div>
    );
  }
}

const mapStateToProps = ({ questions }) => (
  {
    questions,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getQuestions: (sessionId) => {
      dispatch(getSessionQuestions(sessionId))
    }
  }
);

export default connect(
  mapStateToProps, mapDispatchToProps
)(SessionEditPage);
