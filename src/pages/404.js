import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Button } from 'reactstrap';
import { bindActionCreators } from 'redux';

import '../styles/404.scss';

class Error404 extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <Container className="error-404">
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <Button>Go Back</Button>
      </Container>
    );
  }
}

Error404.propTypes = {
  // goTo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => bindActionCreators({
  // goTo
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Error404);
