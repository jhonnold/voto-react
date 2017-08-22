import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { Grid, Button } from "material-ui";

import "./styles/SessionEditFormStyles.css";

function SessionEditForm(props) {
  const { handleSubmit, handleCancel } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="session-edit-session-form">
        <Grid container>
          <Grid item xs={12} md={4} className="session-edit-input-wrapper">
            <Field
              type="text"
              name="sessionClassName"
              component="input"
              className="session-edit-input"
            />
            <span className="session-edit-subtitle">Class Name</span>
          </Grid>
          <Grid item xs={12} md={4} className="session-edit-input-wrapper">
            <Field
              type="text"
              name="sessionTitle"
              component="input"
              className="session-edit-input"
            />
            <span className="session-edit-subtitle">Title</span>
          </Grid>
          <Grid item xs={12} md={4} className="session-edit-input-wrapper">
            <Field
              type="text"
              name="sessionDescription"
              component="input"
              className="session-edit-input"
            />
            <span className="session-edit-subtitle" style={{ width: "85%" }}>
              Description
            </span>
          </Grid>
        </Grid>
      </div>

      {props.children}

      <div className="session-edit-finalize-container">
        <Button raised className="session-edit-button" type="submit">
          Save
        </Button>
        <Button raised className="session-edit-button" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

SessionEditForm.defaultProps = {
  children: null,
};

SessionEditForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default reduxForm({
  form: "sessionEdit",
})(SessionEditForm);
