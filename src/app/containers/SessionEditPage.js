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
      <div style={{display: 'flex', width: '100%', height: '100%', flexDirection: 'row-reverse'}}>
      <Scrollbars style={{height: '100%', width: '30%'  }}>
        <QuestionContainer questions={this.props.questions} />
      </Scrollbars>
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
