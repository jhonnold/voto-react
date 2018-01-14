import React from 'react';
import { connect } from 'react-redux';

import { getClasses } from '../../../redux/actions';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadClasses();
  }

  render() {
    return (
      <div>Home</div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = dispatch => ({
  loadClasses: () => dispatch(getClasses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
