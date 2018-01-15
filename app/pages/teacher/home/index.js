import React from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';

import { getClasses } from '../../../redux/actions';
import ClassCard from '../../../components/class-card';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadClasses();
  }

  render() {
    return (
      <Grid container justify="center" spacing={16}>
        {this.props.classes.map(c => (
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <ClassCard key={c.classId} {...c} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

const mapStateToProps = ({ user, classes }) => ({
  user,
  classes,
});

const mapDispatchToProps = dispatch => ({
  loadClasses: () => dispatch(getClasses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
