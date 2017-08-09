import React from 'react';
import {
  connect
} from 'react-redux';
import {
  goBack,
} from 'react-router-redux';
import {
  Grid,
  Divider,
} from 'material-ui';
import {
  Scrollbars
} from 'react-custom-scrollbars';
import {
  getSessionQuestions,
  onNewImage,
  deleteImage,
} from '../redux/actions/questionActions';
import {
  submitSession
} from '../redux/actions/sessionsActions';
import {
  IconButton,
} from 'material-ui';
import {
  ArrowForward,
  ArrowBack,
  Delete as DeleteIcon,
} from 'material-ui-icons'
import QuestionContainer from '../components/QuestionContainer';
import SessionEditForm from '../components/SessionEditForm';

import './styles/SessionEditPageStyles.css'

import QuestionImageDrop from '../components/QuestionImageDrop';

class SessionEditPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: -1,
    }
  }

  componentWillMount() {
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
      })
    }
  }

  moveQuestion = (id, atIndex) => {
    const { question, index } = this.findQuestion(id);
    this.props.dispatchMoveQuestion(index, atIndex, question);
  };

  findQuestion = (id) => {
    const { questions } = this.props;
    const question = questions.filter(q => q.id === id)[0];

    return {
      question,
      index: questions.indexOf(question),
    }
  };

  _onImageSelect = (id) => {
    this.setState({
      id
    })
  };

  _onLeftArrow = () => {
    const { id } = this.state;
    const { question, index } = this.findQuestion(id);

    if (index > 0) {
      this.props.dispatchMoveQuestion(index, index - 1, question);
    }
  };

  _onRightArrow = () => {
    const { questions } = this.props;
    const { id } = this.state;
    const { question, index } = this.findQuestion(id);

    if (index < questions.length - 1) {
      this.props.dispatchMoveQuestion(index, index + 1, question);
    }
  };

  _renderThumb = ({style, ...props}) => {
    const thumbStyle = {
      backgroundColor: '#3f51b5',
      opacity: 1,
      height: '1rem',
      cursor: 'pointer',
      minHeight: 'min-content',
    };

    return (
      <div
        style={{...style, ...thumbStyle}}
        {...props}
      />
    );
  };

  _handleSubmit = (values) => {
    this.props.submitForm(values, this.props.session);
  };

  _handleCancel = () => {
    this.props.goBack();
  };

  _onDelete = () => {
    const question = this.props.questions.filter(q => q.id === this.state.id)[0];

    this.props.deleteQuestion(question);
  };

  render() {
    const { id } = this.state;
    const { questions, session, containerWidth } = this.props;

    const width = (containerWidth > 750 ? containerWidth - 264 : containerWidth - 8);
    const height = width * 9 / 16;

    let src;
    if (questions.length && this.state.id >= 0) {
      const question = questions.filter(q => q.id === id)[0];
      src = (question.url ? question.url : question.uri);
    }

    return (
      <div className="session-edit-page-wrapper">
        <div className="session-edit-page-container">
          <div className="session-edit-header-wrapper">
            <span className="session-edit-header">{session.className}</span>
          </div>

          <SessionEditForm
            onSubmit={ this._handleSubmit }
            handleCancel={this._handleCancel}
            initialValues={this.props.initialValues}
          >

            <Grid container gutter={0} className="session-edit-center-container" justify="center">
              <Grid item xs={12} md={8} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                { questions.length > 0 &&
                  <div
                    //src={src}
                    style={{
                      backgroundImage: `url(${src})`,
                      width,
                      height,
                      maxHeight: '27rem',
                      maxWidth: 'calc(100% - 1rem)',
                    }}
                    alt="Select a slide to edit"
                    className="session-edit-selected-image"
                  />
                }

                <QuestionImageDrop
                  onNewImage={this.props.onNewImage}
                />

                <Divider style={{margin: '0 .5rem .3rem .5rem'}} />
                <span className="session-edit-subtitle">
                  Click the arrows to move this question within the Session
                </span>
                <div className="session-edit-button-container">
                  <IconButton onClick={this._onLeftArrow}>
                    <ArrowBack />
                  </IconButton>
                  <IconButton onClick={this._onDelete}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={this._onRightArrow}>
                    <ArrowForward />
                  </IconButton>
                </div>
                <Divider style={{margin: '0 .5rem .3rem .5rem'}} />
              </Grid>

            </Grid>
          </SessionEditForm>
          <Divider style={{margin: '0 .5rem .3rem .5rem'}} />
        </div>

        <div className="session-edit-image-preview-container" style={{ height: height / 2 }}>
          {/*TODO - GET THIS TO SCROLL WITHOUT SHIFT KEY*/}
          <Scrollbars
            autoHide={false}
            renderThumbHorizontal={this._renderThumb}
            style={{height: '100%'}}
          >
            <QuestionContainer
              questions={this.props.questions}
              onSelect={this._onImageSelect}
              pushingImageCount={this.props.session.pushingImageCount}
            />
          </Scrollbars>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ selectedSession, container }) => (
  {
    session: selectedSession,
    questions: selectedSession.questions,
    initialValues: {
      sessionClassName: selectedSession.className,
      sessionTitle: selectedSession.title,
      sessionDescription: selectedSession.description,
    },
    containerWidth: container.width,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getQuestions: (sessionId) => {
      dispatch(getSessionQuestions(sessionId))
    },
    goBack: () => {
      dispatch(goBack())
    },
    dispatchMoveQuestion: (index, atIndex, question) => {
      dispatch({
        type: 'QUESTION_CARD_MOVED',
        payload: {
          index,
          atIndex,
          question,
        }
      })
    },
    submitForm: (values, session) => {
      dispatch(submitSession(values, session))
    },
    onNewImage: (formData) => {
      dispatch(onNewImage(formData));
    },
    deleteQuestion: (question) => {
      dispatch(deleteImage(question));
    }
  }
);

export default connect(
  mapStateToProps, mapDispatchToProps
)(SessionEditPage);
