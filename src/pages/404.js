import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <Button tag={Link} href="/" to="/">Go Back</Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Error404);
