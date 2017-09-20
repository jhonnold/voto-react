import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { goBack } from "react-router-redux";
import { Divider, Button } from "material-ui";
import { socket } from "../shared/socket";
import { postResponse } from "../redux/actions/questionActions";
import CenterWrapper from "../components/CenterWrapper";
import CenterImage from "../components/CenterImage";

import "./styles/ActiveSessionStyles.scss";

class ActiveSession extends React.Component {
  constructor(props) {
    super(props);

    this.handleResponse = this.handleResponse.bind(this);
  }

  componentDidMount() {
    const { session } = this.props;
    if (!session.sessionId) {
      this.props.goBack();
      return;
    }
    // GET ACTIVE QUESTION
  }

  handleResponse(vote) {
    const { session, question } = this.props;
    this.props.postResponse(vote, session.sessionId, 9);
  }

  render() {
    const { session, containerWidth } = this.props;

    const width =
      containerWidth > 750 ? containerWidth - 264 : containerWidth - 8;
    const height = width * 0.5625; // --> 9/16
    const src = null;
    // TODO make these come frmo the backend on active question
    const choices = ["A", "B", "C", "D", "E"];

    return (
      <div className="active-session-wrapper">
        <div className="active-session-container">
          <div className="header-wrapper">
            <span>
              {session.className}
            </span>
            <p>
              {session.title}
            </p>
          </div>
          <CenterWrapper>
            <CenterImage
              width={width}
              height={height}
              src={src}
              message="There is currently no active question for this session!"
            />
            <Divider style={{ margin: "0 .5rem .3rem .5rem" }} />
            <span className="subtitle">
              Click a button to answer the above question!
            </span>
            <Divider style={{ margin: "0.5rem" }} />
            <div className="button-container">
              {choices.map(c => (
                <Button
                  raised
                  className="button"
                  onClick={() => this.handleResponse(c)}
                  key={c}
                >
                  {c}
                </Button>
              ))}
            </div>
          </CenterWrapper>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ selectedSession, container }) => ({
  session: selectedSession,
  // questions: selectedSession.questions,
  containerWidth: container.width,
});

const mapDispatchToProps = dispatch => ({
  getQuestions: (sessionId) => {
    console.log(`Getting questions for ${sessionId}`);
  },
  goBack: () => dispatch(goBack()),
  postResponse: (response, sessionId, questionId) => 
    dispatch(postResponse(response, sessionId, questionId)),
});

ActiveSession.propTypes = {
  session: PropTypes.object.isRequired,
  // questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  containerWidth: PropTypes.number.isRequired,
  getQuestions: PropTypes.func.isRequired,
  // goBack: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveSession);
