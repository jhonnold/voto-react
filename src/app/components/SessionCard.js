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
import {
  Collapse
} from 'material-ui/transitions';
import {
  ExpandMore
} from 'material-ui-icons';

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
    return (
      <div>
        <Card className="session-card-wrapper">

        </Card>
      </div>
    );
  }
}