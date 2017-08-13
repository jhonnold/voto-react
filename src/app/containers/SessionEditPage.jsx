import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { goBack } from "react-router-redux";
import { Scrollbars } from "react-custom-scrollbars";
import { Divider, IconButton } from "material-ui";
import {
  ArrowForward,
  ArrowBack,
  Delete as DeleteIcon,
} from "material-ui-icons";
import {
  getSessionQuestions,
  onNewImage,
  deleteImage,
} from "../redux/actions/questionActions";
import { submitSession } from "../redux/actions/sessionsActions";
import QuestionContainer from "../components/QuestionContainer";
import SessionEditForm from "../components/SessionEditForm";
import QuestionImageDrop from "../components/QuestionImageDrop";
import CenterImage from "../components/CenterImage";
import CenterWrapper from "../components/CenterWrapper";
import renderThumb from "../components/Thumb";

import "./styles/SessionEditPageStyles.css";

class SessionEditPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: -1,
    };

    this.findQuestion = this.findQuestion.bind(this);
    this.onImageSelect = this.onImageSelect.bind(this);
    this.onLeftArrow = this.onLeftArrow.bind(this);
    this.onRightArrow = this.onRightArrow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.moveQuestion = this.moveQuestion.bind(this);
  }

  componentDidMount() {
    if (!this.props.session.sessionId) {
      this.props.goBack();
      return;
    }

    this.props.getQuestions(this.props.session.sessionId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.id < 0 && nextProps.questions.length > 0) {
      this.setState({
        id: nextProps.questions[0].id,
      });
    }
  }

  onImageSelect(id) {
    this.setState({
      id,
    });
  }

  onLeftArrow() {
    const { id } = this.state;
    const { question, index } = this.findQuestion(id);

    if (index > 0) {
      this.props.dispatchMoveQuestion(index, index - 1, question);
    }
  }

  onRightArrow() {
    const { questions } = this.props;
    const { id } = this.state;
    const { question, index } = this.findQuestion(id);

    if (index < questions.length - 1) {
      this.props.dispatchMoveQuestion(index, index + 1, question);
    }
  }

  onDelete() {
    const question = this.props.questions.filter(
      q => q.id === this.state.id,
    )[0];

    this.props.deleteQuestion(question);
  }

  handleSubmit(values) {
    this.props.submitForm(values, this.props.session);
  }

  handleCancel() {
    this.props.goBack();
  }

  findQuestion(id) {
    const { questions } = this.props;
    const question = questions.filter(q => q.id === id)[0];

    return {
      question,
      index: questions.indexOf(question),
    };
  }

  moveQuestion(id, atIndex) {
    const { question, index } = this.findQuestion(id);
    this.props.dispatchMoveQuestion(index, atIndex, question);
  }

  render() {
    const { id } = this.state;
    const {
      questions,
      session,
      containerWidth,
      initialValues,
      handleNewImage,
    } = this.props;

    const width =
      containerWidth > 750 ? containerWidth - 264 : containerWidth - 8;
    const height = width * 0.5625; // --> 9/16

    let src;
    if (questions.length && this.state.id >= 0) {
      const question = questions.filter(q => q.id === id)[0];
      src = question ? question.url : questions[0].url;
    }

    return (
      <div className="session-edit-page-wrapper">
        <div className="session-edit-page-container">
          <div className="session-edit-header-wrapper">
            <span className="session-edit-header">
              {session.className}
            </span>
          </div>

          <SessionEditForm
            onSubmit={this.handleSubmit}
            handleCancel={this.handleCancel}
            initialValues={initialValues}
          >
            <CenterWrapper>
              {questions.length > 0 &&
                <CenterImage width={width} height={height} src={src} />}

              <QuestionImageDrop onNewImage={handleNewImage} />

              <Divider style={{ margin: "0 .5rem .3rem .5rem" }} />
              <span className="session-edit-subtitle">
                Click the arrows to move this question within the Session
              </span>
              <div className="session-edit-button-container">
                <IconButton onClick={this.onLeftArrow}>
                  <ArrowBack />
                </IconButton>
                <IconButton onClick={this.onDelete}>
                  <DeleteIcon />
                </IconButton>
                <IconButton onClick={this.onRightArrow}>
                  <ArrowForward />
                </IconButton>
              </div>
              <Divider style={{ margin: "0 .5rem .3rem .5rem" }} />
            </CenterWrapper>
          </SessionEditForm>
          <Divider style={{ margin: "0 .5rem .3rem .5rem" }} />
        </div>

        <div
          className="session-edit-image-preview-container"
          style={{ height: height / 2 }}
        >
          {/* TODO - GET THIS TO SCROLL WITHOUT SHIFT KEY */}
          <Scrollbars
            autoHide={false}
            renderThumbHorizontal={renderThumb}
            style={{ height: "100%" }}
          >
            <QuestionContainer
              questions={this.props.questions}
              onSelect={this.onImageSelect}
              pushingImageCount={this.props.session.pushingImageCount}
              canDrag
            />
          </Scrollbars>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ selectedSession, container }) => ({
  session: selectedSession,
  questions: selectedSession.questions,
  initialValues: {
    sessionClassName: selectedSession.className,
    sessionTitle: selectedSession.title,
    sessionDescription: selectedSession.description,
  },
  containerWidth: container.width,
});

const mapDispatchToProps = dispatch => ({
  getQuestions: (sessionId) => {
    dispatch(getSessionQuestions(sessionId));
  },
  goBack: () => {
    dispatch(goBack());
  },
  dispatchMoveQuestion: (index, atIndex, question) => {
    dispatch({
      type: "QUESTION_CARD_MOVED",
      payload: {
        index,
        atIndex,
        question,
      },
    });
  },
  submitForm: (values, session) => {
    dispatch(submitSession(values, session));
  },
  handleNewImage: (formData) => {
    dispatch(onNewImage(formData));
  },
  deleteQuestion: (question) => {
    dispatch(deleteImage(question));
  },
});

SessionEditPage.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  session: PropTypes.shape({
    sessionId: PropTypes.number,
    pushingImageCount: PropTypes.number,
  }).isRequired,
  containerWidth: PropTypes.number.isRequired,
  initialValues: PropTypes.shape({
    sessionClassName: PropTypes.string,
    sessionTitle: PropTypes.string,
    SessionDescription: PropTypes.string,
  }).isRequired,
  goBack: PropTypes.func.isRequired,
  getQuestions: PropTypes.func.isRequired,
  dispatchMoveQuestion: PropTypes.func.isRequired,
  deleteQuestion: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  handleNewImage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionEditPage);
