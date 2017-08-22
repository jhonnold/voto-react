import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { hideError } from "../redux/actions/errorActions";
import "./styles/ErrorStyles.scss";

class ErrorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shouldAnimateOut: false };

    this.animateOut = this.animateOut.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error.isShowing) {
      setTimeout(() => this.animateOut(), 3000);
    }
  }

  animateOut() {
    this.setState({ shouldAnimateOut: true });
    setTimeout(() => this.props.hide(), 500);
  }

  render() {
    if (this.props.error.isShowing) {
      return (
        <div
          className={`error-container ${this.state.shouldAnimateOut &&
            "close"}`}
        >
          {this.props.error.errno &&
            <div className="error-title-container">
              <h4 className="title">
                {this.props.error.errno}
              </h4>
            </div>}

          <div className="error-message-container">
            <p className="message">
              {this.props.error.code || this.props.error.error}
            </p>
          </div>
        </div>
      );
    }

    return null;
  }
}

ErrorComponent.propTypes = {
  error: PropTypes.object.isRequired,
  hide: PropTypes.func.isRequired,
};

const mapStateToProps = ({ error }) => ({
  error,
});

const mapDispatchToProps = dispatch => ({
  hide: () => dispatch(hideError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorComponent);
