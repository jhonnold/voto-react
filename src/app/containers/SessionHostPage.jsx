import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { goBack } from "react-router-redux";
import { Scrollbars } from "react-custom-scrollbars";
import { Grid, Divider, IconButton } from "material-ui";
import { ArrowForward, ArrowBack } from "material-ui-icons";
import { getSessionQuestions } from "../redux/actions/questionActions";
import renderThumb from "../components/Thumb";
import CenterImage from "../components/CenterImage";
import QuestionContainer from "../components/QuestionContainer";
import BarChart from "../components/BarChart";

import "./styles/SessionHostPageStyles.scss";

class SessionHostPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };

    this.onLeftArrow = this.onLeftArrow.bind(this);
    this.onRightArrow = this.onRightArrow.bind(this);
  }

  componentDidMount() {
    if (!this.props.session.sessionId) {
      this.props.goBack();
      return;
    }

    this.props.getQuestions(this.props.session.sessionId);
  }

  onLeftArrow() {
    if (this.state.index > 0) {
      this.setState({
        index: this.state.index - 1,
      });
    }
  }

  onRightArrow() {
    if (this.state.index + 1 < this.props.questions.length) {
      this.setState({
        index: this.state.index + 1,
      });
    }
  }

  render() {
    const { containerWidth, questions, session } = this.props;

    const width =
      containerWidth > 750 ? containerWidth - 264 : containerWidth - 8;
    const height = width * 0.5625; // --> 9/16

    let src;
    if (questions.length) {
      src = questions[this.state.index].url;
    }

    return (
      <div className="session-host-page-wrapper">
        <div className="session-host-page-container">
          <div className="session-host-header-wrapper">
            <span className="session-host-header">
              {session.title}
            </span>
          </div>
          <Grid container>
            <Grid item xs={12} md={6}>
              <CenterImage width={width} height={height} src={src} />
              <Divider style={{ margin: "0 .5rem .3rem .5rem" }} />
              <span className="session-host-subtitle">
                Slide the lever to make the session active
              </span>
              <div className="session-host-button-container">
                <IconButton onClick={this.onLeftArrow}>
                  <ArrowBack />
                </IconButton>
                <IconButton onClick={this.onRightArrow}>
                  <ArrowForward />
                </IconButton>
              </div>
              <Divider style={{ margin: "0 .5rem .3rem .5rem" }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <BarChart
                height={(height > 432 ? 432 : height) + 64}
                data={[
                  Math.random(),
                  Math.random(),
                  Math.random(),
                  Math.random(),
                  Math.random(),
                ]}
              />
            </Grid>
          </Grid>
          <div
            className="session-host-image-preview-container"
            style={{ height: height / 2 }}
          >
            <Scrollbars
              autoHide={false}
              renderThumbHorizontal={renderThumb}
              style={{ height: "100%" }}
            >
              <QuestionContainer
                questions={this.props.questions}
                canDrag={false}
                onSelect={() => {}}
              />
            </Scrollbars>
          </div>
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
