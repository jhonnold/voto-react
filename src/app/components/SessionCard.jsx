import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Card, Avatar, IconButton, Grid, Divider } from "material-ui";
import Collapse from "material-ui/transitions/Collapse";
import {
  ExpandMore,
  Delete,
  Edit,
  Slideshow,
  Favorite,
} from "material-ui-icons";

import "./styles/SessionCardStyles.css";

function SessionCardSlide() {
  return (
    <Grid item xs={6} sm={4} md={3} lg={4} xl={3}>
      <img
        src="public/images/sampleslide.png"
        className="session-card-slide"
        alt="session-slide"
      />
    </Grid>
  );
}

export default class SessionCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };

    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    const { expanded } = this.state;
    const { onEditClick, onHostClick, data } = this.props;
    const { title, timeStamp, useCount, className } = data;

    return (
      <Grid item xs={12} lg={6}>
        <Card className="session-card-container">
          <div className="session-card-top-container">
            <div className="session-card-title-wrapper">
              <Avatar className="session-card-avatar">
                {className && className.charAt(0).toUpperCase()}
              </Avatar>
              <div className="session-card-header-wrapper">
                <span className="session-card-title">
                  {className}
                </span>
                <span className="session-card-description-text">
                  {title}
                </span>
              </div>
            </div>
            <div style={{ flex: 1 }} />
            <div className="session-card-actions-wrapper">
              <IconButton onClick={() => onHostClick(data)}>
                <Slideshow />
              </IconButton>
            </div>
            <IconButton
              className={expanded ? "rotate180" : ""}
              onClick={this.handleExpandClick}
            >
              <ExpandMore />
            </IconButton>
          </div>
          <Collapse
            in={expanded}
            transitionDuration="auto"
            unmountOnExit
            className="test"
          >
            <Divider style={{ margin: ".5rem 0" }} />
            <div className="session-card-image-slider">
              <Grid container wrap="nowrap">
                <SessionCardSlide />
                <SessionCardSlide />
                <SessionCardSlide />
                <SessionCardSlide />
                <SessionCardSlide />
                <SessionCardSlide />
                <SessionCardSlide />
                <SessionCardSlide />
              </Grid>
            </div>
            <Divider style={{ margin: ".5rem 0" }} />
            <div className="session-card-buttons-wrapper">
              <div className="session-card-buttons-container">
                <IconButton>
                  <Favorite />
                </IconButton>
                <IconButton onClick={() => onEditClick(data)}>
                  <Edit />
                </IconButton>
                <IconButton>
                  <Delete />
                </IconButton>
              </div>
            </div>
          </Collapse>
          <Divider style={{ margin: ".5rem 0" }} />
          <div className="session-card-subtitle-caption">
            <div className="session-card-description-wrapper">
              <span className="session-card-description-text">
                {`Created on ${moment(timeStamp * 1000).format("MMM Do")}`}
              </span>
              <span className="session-card-description-text">
                {`Used ${useCount} time${useCount !== 1 ? "s" : ""}`}
              </span>
            </div>
          </div>
        </Card>
      </Grid>
    );
  }
}

SessionCard.propTypes = {
  onEditClick: PropTypes.func,
  data: PropTypes.shape({
    title: PropTypes.string,
    timeStamp: PropTypes.number,
    className: PropTypes.string,
  }),
  onHostClick: PropTypes.func,
};
