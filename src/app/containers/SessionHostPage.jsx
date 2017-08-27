import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { goBack } from "react-router-redux";
import { Scrollbars } from "react-custom-scrollbars";
import { Grid, Divider, IconButton, Switch } from "material-ui";
import { ArrowForward, ArrowBack } from "material-ui-icons";
import { getSessionQuestions } from "../redux/actions/questionActions";
import { activateSession } from "../redux/actions/sessionsActions";
import { resetActive } from "../redux/actions/activeActions";
import renderThumb from "../components/Thumb";
import CenterImage from "../components/CenterImage";
import QuestionContainer from "../components/QuestionContainer";
import BarChart from "../components/BarChart";
import { socket } from "../shared/socket";
import "./styles/SessionHostPageStyles.scss";

class SessionHostPage extends React.Component {
  constructor(props) {
    super(props);

    this.onLeftArrow = this.onLeftArrow.bind(this);
    this.onRightArrow = this.onRightArrow.bind(this);
    this.onSwitch = this.onSwitch.bind(this);
  }

  componentDidMount() {
    const { session } = this.props;
    if (!session.sessionId) {
      this.props.goBack();
      return;
    }
    
    this.props.resetActive();
    this.props.getQuestions(session.sessionId);
    this.props.activateSession(session.sessionId, false);
    //socket.connect();
  }

  componentWillUnmount() {
    const { session } = this.props;
    this.props.activateSession(session.sessionId, true);
    //socket.disconnect();
  }

  onLeftArrow() {
    //TODO POST THE NEW QUESTION ID TO ACTIVE AND LISTEN ON SOCKET
    if (this.state.index > 0) {
      this.setState({
        index: this.state.index - 1,
      });
    }
  }

  onRightArrow() {
    //TODO SEE ABOVE
    if (this.state.index + 1 < this.props.questions.length) {
      this.setState({
        index: this.state.index + 1,
      });
    }
  }

  onSwitch() {
    const { questions, active } = this.props;
    if (active.isShowing) {
      //this.props.activateQuestion(questions[active.index]);
    }
  }

  render() {
    const { active, containerWidth, questions, session } = this.props;
    const question = questions[active.index];

    const width =
      containerWidth > 750 ? containerWidth - 264 : containerWidth - 8;
    const height = width * 0.5625; // --> 9/16

    const subtitle = active.isActive
      ? "The above picture is currently visible to connected students"
      : "Slide the lever to make the questions visible to students";

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
              <CenterImage width={width} height={height} src={question && question.src} />
              <Divider style={{ margin: "0 .5rem .3rem .5rem" }} />
              <span className="session-host-subtitle">
                {subtitle}
              </span>
              <div className="session-host-button-container">
                <IconButton onClick={this.onLeftArrow}>
                  <ArrowBack />
                </IconButton>
                <Switch
                  checked={question && question.isActive}
                  onChange={this.onSwitch}
                  aria-label="Active Session"
                  checkedClassName="session-host-switch"
                />
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

const mapStateToProps = ({ selectedSession, container, active }) => ({
  session: selectedSession,
  questions: selectedSession.questions,
  containerWidth: container.width,
  active,
});

const mapDispatchToProps = dispatch => ({
  getQuestions: (sessionId) => {
    dispatch(getSessionQuestions(sessionId));
  },
  goBack: () => {
    dispatch(goBack());
  },
  activateSession: (id, isActive) => {
    dispatch(activateSession(id, isActive));
  },
  resetActive: () => dispatch(resetActive()),
});

SessionHostPage.defaultProps = {
  containerWidth: 0,
};

SessionHostPage.propTypes = {
  containerWidth: PropTypes.number,
  session: PropTypes.object.isRequired,
  goBack: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  getQuestions: PropTypes.func.isRequired,
  activateSession: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionHostPage);
