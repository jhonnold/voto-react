import React from 'react';
import {
  CardContent,
  CardActions,
  CardMedia,
  CardHeader
} from 'material-ui/Card';
import {
  Card,
  Typography,
  Button,
  Avatar,
  IconButton
} from 'material-ui';
import Collapse from 'material-ui/transitions/Collapse';
import {
  ExpandMore,
  Delete,
  Edit,
  Slideshow,
} from 'material-ui-icons';

import './styles/SessionCardStyles.css';

export default class SessionCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      ...props,
    }
  }

  _handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  };

  render() {
    const {
      shouldDisplayDateInfo,
      shouldDisplayEditButtons,
    } = this.state;

    return (
      <div className="session-card-wrapper">
        <Card className="session-card-container">
          <div className="session-card-header-container">
            <div className="session-card-title-wrapper">
              <Avatar className="session-card-avatar">
                C
              </Avatar>
              <span className="session-card-title">
                CS3141-R15
              </span>
            </div>
            { shouldDisplayDateInfo ?
              <div className="session-card-description-wrapper">
                <span className="session-card-description-text">
                  Jan. 15
                </span>
                <span className="session-card-description-text">
                  Used 3 times
                </span>
              </div> : <div style={{flex: 1}} />
            }
            { shouldDisplayEditButtons ?
              <div className="session-card-actions-wrapper">
                <IconButton>
                  <Slideshow />
                </IconButton>
                <IconButton>
                  <Edit />
                </IconButton>
                <IconButton>
                  <Delete />
                </IconButton>
              </div> : <div style={{flex: 1}} />
            }
            <IconButton>
              <ExpandMore />
            </IconButton>
          </div>
        </Card>
      </div>
    );
  }
}