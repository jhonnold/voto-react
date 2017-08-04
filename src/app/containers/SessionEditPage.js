import React from 'react';
import {
  connect
} from 'react-redux';
import {
  getSessionQuestions
} from '../redux/actions/questionActions';

class SessionEditPage extends React.Component {

  componentDidMount() {
    this.props.getQuestions(this.props.match.params.sessionId);
  }

  render() {
    return (
      <div>
        <span>EditPage</span>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  {
    getQuestions: (sessionId) => {
      dispatch(getSessionQuestions(sessionId))
    }
  }
)

export default connect(null, mapDispatchToProps)(SessionEditPage);
