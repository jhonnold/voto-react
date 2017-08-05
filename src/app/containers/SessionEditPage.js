import React from 'react';
import {
  connect
} from 'react-redux';
import {
  Scrollbars
} from 'react-custom-scrollbars';
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
      <Scrollbars style={{height: '100%', width: '20rem'}}>
        <QuestionContainer questions={this.props.questions} />
      </Scrollbars>
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
