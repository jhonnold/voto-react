import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { goBack } from "react-router-redux";
import { Divider } from "material-ui";
import CenterWrapper from "../components/CenterWrapper";
import CenterImage from "../components/CenterImage";

export default class ActiveSession extends React.Component {
  constructor(props) {
    super(props);

    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount() {
    this.props.getSession();
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

    let src = null;

    return (
      <div className="TOP-LEVEL-WRAPPER">
        <div className="TOP-LEVEL-CONTAINER">
          <div className="HEADER-WRAPPER">
            <span className="HEADER">
              {session.className}
            </span>
          </div>
          <CenterWrapper>
            <CenterImage width={width} height={height} src={src} />
            <Divider style={{ margin: "0 .5rem .3rem .5rem" }} />
            <span className="SUBTITLE">
              Subtitle
            </span>
            <div className="BUTTON-WRAPPER">
              BUTTONS
            </div>
          </CenterWrapper>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ selectedSession, container }) => ({
  session: selectedSession,
  questions: selectedSession.questions,
  containerWidth: container.width,
});

const mapDispatchToProps = dispatch => ({
  getQuestions: (sessionId) => {
    console.log(`Getting questions for ${sessionId}`);
  },
  goBack: () => {
    dispatch(goBack());
  },
});

ActiveSession.propTypes = {
  session: PropTypes.object.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  containerWidth: PropTypes.number.isRequired,
  getQuestions: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveSession);
