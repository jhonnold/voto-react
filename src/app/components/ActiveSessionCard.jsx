import React from "react";
import PropTypes from "prop-types";
import { Card, Avatar, IconButton, Grid, Divider } from "material-ui";
import Collapse from "material-ui/transitions/Collapse";
import { ExpandMore, Slideshow } from "material-ui-icons";
import moment from "moment";

import "./styles/ActiveSessionCardStyles.scss";

export default class ActiveSessionCard extends React.Component {
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
    const { data, handleJoin } = this.props;
    const { title, className, description, firstName, lastName } = data;

    return (
      <Grid item xs={12} lg={6}>
        <Card className="active-session-card-container">
          <div className="active-session-card-top-container">
            <div className="active-session-card-title-container">
              <Avatar className="active-session-card-avatar">
                {className && className.charAt(0).toUpperCase()}
              </Avatar>
              <div className="active-session-card-header-wrapper">
                <span className="active-session-card-title">
                  {className}
                </span>
                <span className="active-session-card-subtitle">
                  {title}
                </span>
              </div>
            </div>
            <div style={{ flex: 1 }} />
            <div className="active-session-card-button-container">
              <IconButton onClick={handleJoin}>
                <Slideshow />
              </IconButton>
              <IconButton
                className={expanded ? "rotate180" : ""}
                onClick={this.handleExpandClick}
              >
                <ExpandMore />
              </IconButton>
            </div>
          </div>
          <Collapse in={expanded} transitionDuration="auto" unmountOnExit>
            <Divider style={{ margin: ".5rem 0" }} />
            <div className="active-session-card-info-wrapper">
              <span>
                {`${firstName} ${lastName}`}
              </span>
              <span>
                {`Started at ${moment().format("h:mm")}`}
              </span>
            </div>
            <Divider style={{ margin: ".5rem 0" }} />
            <span className="active-session-card-subtitle" style={{ fontStyle: "normal" }}>
              {description}
            </span>
          </Collapse>
        </Card>
      </Grid>
    );
  }
}

ActiveSessionCard.propTypes = {
  data: PropTypes.object.isRequired,
  handleJoin: PropTypes.func.isRequired,
};
