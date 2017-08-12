import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { goBack } from "react-router-redux";
import { Grid, Divider } from "material-ui";
// import {
//   ArrowForward,
//   ArrowBack,
//   Delete as DeleteIcon,
// } from "material-ui-icons";
import { getSessionQuestions } from "../redux/actions/questionActions";
import CenterImage from "../components/CenterImage";

class SessionHostPage extends React.Component {
  componentDidMount() {
    if (!this.props.session.sessionId) {
      this.props.goBack();
      return;
    }

    this.props.getQuestions(this.props.session.sessionId);
  }

  render() {
    const { containerWidth } = this.props;

    const width =
      containerWidth > 750 ? containerWidth - 264 : containerWidth - 8;
    const height = width * 0.5625; // --> 9/16

    return (
      <div className="session-host-page-wrapper">
        <div className="session-host-page-container">
          <div className="session-host-header-wrapper">
            <span>HEADER</span>
          </div>
          <Grid container justify="center">
            <Grid item xs={12} md={8}>
              <CenterImage width={width} height={height} src={"google.com"} />
            </Grid>
          </Grid>
          <Divider />
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
    dispatch(getSessionQuestions(sessionId));
  },
  goBack: () => {
    dispatch(goBack());
  },
});

SessionHostPage.propTypes = {
  // questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  // session: PropTypes.shape({
  //   sessionId: PropTypes.number,
  // }),
  containerWidth: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionHostPage);
