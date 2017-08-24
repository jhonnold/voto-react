import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { goBack } from "react-router-redux";
import { Divider, Button } from "material-ui";
import CenterWrapper from "../components/CenterWrapper";
import CenterImage from "../components/CenterImage";

import "./styles/ActiveSessionStyles.scss";

class ActiveSession extends React.Component {
  constructor(props) {
    super(props);

    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount() {
    this.props.getQuestions(1);
  }

  /* eslint-disable*/
  handleVote(vote) {
    // TODO Handle vote here
    console.log(`Voting: ${vote}`);
  }
  /* eslint-enable */

  render() {
    const { session, containerWidth } = this.props;

    const width =
      containerWidth > 750 ? containerWidth - 264 : containerWidth - 8;
    const height = width * 0.5625; // --> 9/16

    const src = null;

    return (
      <div className="active-session-wrapper">
        <div className="active-session-container">
          <div className="header-wrapper">
            <span>
              {session.className}
            </span>
          </div>
          <CenterWrapper>
            <CenterImage width={width} height={height} src={src} />
            <Divider style={{ margin: "0 .5rem .3rem .5rem" }} />
            <span>
              Subtitle
            </span>
            <div className="button-container">
              <Button raised>A</Button>
              <Button raised>B</Button>
              <Button raised>C</Button>
              <Button raised>D</Button>
              <Button raised>E</Button>
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

const mapDispatchToProps = () => ({
  getQuestions: (sessionId) => {
    console.log(`Getting questions for ${sessionId}`);
  },
  // goBack: () => {
  //   dispatch(goBack());
  // },
});

ActiveSession.propTypes = {
  session: PropTypes.object.isRequired,
  // questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  containerWidth: PropTypes.number.isRequired,
  getQuestions: PropTypes.func.isRequired,
  // goBack: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveSession);
