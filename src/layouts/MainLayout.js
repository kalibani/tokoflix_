import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

import '../styles/layout.scss';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;
    return (
      <div>
        <Navbar light expand="md" className="movie-navbar-container">
          <NavbarBrand href="/" className="movie-navbar-brand">Tokoflix</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">
                  <div className="movie-navbar-saldo">
                    <span className="text">
                    Saldo (Rp)
                    </span>
                    <span className="nominal">100.000</span>
                  </div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/"><FontAwesomeIcon icon={faShoppingCart} /></NavLink>
              </NavItem>
              <div className="separator" />
              <NavItem>
                <NavLink href="/">Watchlist</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Container className="container-main">
          {children}
        </Container>

      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element
  ]).isRequired
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(
  mapStateToProps, mapDispatchToProps
)(MainLayout);
