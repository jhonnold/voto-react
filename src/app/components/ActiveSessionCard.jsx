import React from "react";
import { Card, Avatar, IconButton, Grid } from "material-ui";
// import Collapse from "material-ui/transitions/Collapse";
import { ExpandMore, Slideshow } from "material-ui-icons";

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
    const { data } = this.props;
    const { title, className } = data;

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
              <IconButton onClick={() => console.log("TODO JOIN CLICKED")}>
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
        </Card>
      </Grid>
    );
  }
}
