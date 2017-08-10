import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'material-ui';

import './styles/NewSessionModalStyles.css';

function NewSessionModal(props) {
  const { handleSubmit, handleCancel } = props;

  return (
    <div className="new-session-modal-wrapper">
      <form className="new-session-modal-container" onSubmit={handleSubmit}>
        <span className="new-session-modal-header">Create A New Session</span>

        <Field
          type="text"
          className="new-session-modal-input"
          placeholder="Class"
          name="className"
          component="input"
        />
        <Field
          type="text"
          className="new-session-modal-input"
          placeholder="Title"
          name="title"
          component="input"
        />
        <Field
          type="text"
          className="new-session-modal-input-textarea"
          placeholder="Description"
          component="textarea"
          name="description"
        />

        <input type="submit" style={{ display: 'none' }} />

        <div className="new-session-modal-button-wrapper">
          <Button raised className="new-session-modal-button" type="submit">
            Submit
          </Button>
          <Button
            raised
            className="new-session-modal-button"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

NewSessionModal.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'createNewSession',
})(NewSessionModal);
