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
  getSessionQuestions
} from '../redux/actions/questionActions';
import QuestionContainer from '../components/QuestionContainer';

import "./styles/SessionEditPageStyles.css"

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

  _onImageSelect = (id) => {
    this.setState({
      id
    })
  };

  _renderThumb = ({style, ...props}) => {
    const thumbStyle = {
      backgroundColor: '#3f51b5',
      opacity: 1,
      height: '1rem',
      cursor: 'pointer',
    };

    return (
      <div
        style={{...style, ...thumbStyle}}
        {...props}
      />
    );
  };

  render() {
    const { id } = this.state;
    const { questions, session } = this.props;

    let src;
    if (questions.length && this.state.id > 0) {
      src = questions.filter(q => q.id === id)[0].img;
    }

    return (
      <div className="session-edit-page-wrapper">
        <div className="session-edit-header-wrapper">
          <span className="session-edit-header">{session.className}</span>
        </div>

        <Grid container gutter={0} style={{flex: 1}}>
          <Grid item xs={12} md={6} justify="center" style={{display: 'flex', flexDirection: 'column'}}>
            { questions.length &&
              <img
                src={src}
                alt="Select a slide to edit"
                className="session-edit-selected-image"
              />
            }
            <div className="session-edit-button-container">

            </div>
          </Grid>

          <Grid item xs={12} md={6}>

          </Grid>
        </Grid>

        <Divider style={{margin: '0 .5rem .3rem .5rem'}} />

        <div className="session-edit-image-preview-container">
          {/*TODO - GET THIS TO SCROLL WITHOUT SHIFT KEY*/}
          <Scrollbars
            autoHide={false}
            renderThumbHorizontal={this._renderThumb}
            style={{height: '100%'}}
          >
            <QuestionContainer
              questions={this.props.questions}
              onSelect={this._onImageSelect}
            />
          </Scrollbars>
        </div>

      </div>
    );
  }
}

const mapStateToProps = ({ selectedSession }) => (
  {
    session: selectedSession,
    questions: selectedSession.questions,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getQuestions: (sessionId) => {
      dispatch(getSessionQuestions(sessionId))
    },
    goBack: () => {
      dispatch(goBack())
    }
  }
);

export default connect(
  mapStateToProps, mapDispatchToProps
)(SessionEditPage);
