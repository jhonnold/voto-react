import React from 'react';
import moment from 'moment';
import {
  Card,
  Avatar,
  IconButton,
  Grid,
  Divider,
} from 'material-ui';
import Collapse from 'material-ui/transitions/Collapse';
import {
  ExpandMore,
  Delete,
  Edit,
  Slideshow,
  Favorite
} from 'material-ui-icons';

import slide from '../images/sampleslide.png';

import './styles/SessionCardStyles.css';

const SessionCardSlide = (props) => (
  <Grid item xs={6} sm={4} md={3} lg={4} xl={3}>
    <img src={slide} className="session-card-slide" alt="session-slide" />
  </Grid>
);

export default class SessionCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    }
  }

  _handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  };

  render() {
    const { expanded } = this.state;
    const { title, timeStamp } = this.props.data;

    return (
      <Grid item xs={12} lg={6}>
        <Card className="session-card-container">
          <div className="session-card-top-container">
            <div className="session-card-title-wrapper">
              <Avatar className="session-card-avatar">
                {title.charAt(0).toUpperCase()}
              </Avatar>
              <div className="session-card-header-wrapper">
                <span className="session-card-title">
                  {title}
                </span>
                <span className="session-card-description-text">
                  Agile Development
                </span>
              </div>
            </div>
            <div style={{flex: 1}} />
            <div className="session-card-actions-wrapper">
              <IconButton>
                <Slideshow />
              </IconButton>
            </div>
            <IconButton
              className={expanded ? "rotate180" : ''}
              onClick={this._handleExpandClick}
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
            <Divider style={{margin: '.5rem 0'}} />
            <div className="session-card-image-slider">
              <Grid container gutter={8} wrap="nowrap">
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
            <Divider style={{margin: '.5rem 0'}} />
            <div className="session-card-buttons-wrapper">
              <div className="session-card-buttons-container">
                <IconButton>
                  <Favorite />
                </IconButton>
                <IconButton>
                  <Edit />
                </IconButton>
                <IconButton>
                  <Delete />
                </IconButton>
              </div>
            </div>
          </Collapse>
          <Divider style={{margin: '.5rem 0'}} />
          <div className="session-card-subtitle-caption">
            <div className="session-card-description-wrapper">
              <span className="session-card-description-text">
                {`Created on ${moment(timeStamp * 1000).format('MMM Do')}`}
              </span>
              <span className="session-card-description-text">
                Used 4 times
              </span>
            </div>
          </div>
        </Card>
      </Grid>
    );
  }
}
