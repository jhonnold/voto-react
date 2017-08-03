import React from 'react';
import {
  Button
} from 'material-ui';

import './styles/NewSessionModalStyles.css';

export default class NewSessionModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      className: '',
      title: '',
      description: '',
      fading_in: true,
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({fading_in: false}), 300);
  }

  _handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    })
  }

  render() {
    const {
      fading_in,
      className,
      title,
      description
    } = this.state;

    return (
      <div className={`new-session-modal-wrapper
        ${fading_in ? 'fade-in' : ''}`}>
        <form
          className="new-session-modal-container"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(className, title, description)
          }}
        >
          <span className="new-session-modal-header">
            Create A New Session
          </span>
          <input
            type="text"
            className="new-session-modal-input"
            placeholder="Class"
            onChange={(e) =>
              this._handleInputChange('className', e.target.value)}
          />
          <input
            type="text"
            className="new-session-modal-input"
            placeholder="Title"
            onChange={(e) =>
              this._handleInputChange('title', e.target.value)}
          />
          <textarea
            type="text"
            className="new-session-modal-input-textarea"
            placeholder="Description"
            onChange={(e) =>
              this._handleInputChange('description', e.target.value)}
          />
          <input type="submit" style={{display: 'none'}} />
          <div className="new-session-modal-button-wrapper">
            <Button
              raised
              className="new-session-modal-button"
              onClick={() =>
                this.props.onSubmit(className, title, description)}
            >
              Submit
            </Button>
            <Button
              raised
              className="new-session-modal-button"
              onClick={this.props.onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
