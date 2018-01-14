import React from 'react';
import { connect } from 'react-redux';

import { getClasses } from '../../../redux/actions';
import ClassCard from '../../../components/class-card';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadClasses();
  }

  render() {
    return (
      <div>
        {this.props.classes.map(c => <ClassCard {...c} />)}
      </div>
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
