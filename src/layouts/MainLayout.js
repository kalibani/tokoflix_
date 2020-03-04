import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
import { handleFilterMovies } from '../stores/actions/Movies';

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
    const divStyle = {
      // maxWidth: '00px',
      width: '300px'
    };
    const { isOpen } = this.state;
    const { children, handleFilterMovies } = this.props;
    return (
      <div>
        <Navbar light expand="md" fixed="top" className="bg-white">
          <NavbarBrand href="/" tag={Link} to="/" className="tokoflix-navbar-brand text-success">Tokoflix</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mx-lg-auto" navbar>
              <NavItem>
                <input type="text" className="form-control" placeholder="Search" onChange={e => handleFilterMovies(e)} style={divStyle} />
              </NavItem>

            </Nav>
            <Nav className="tokoflix-navbar-container">
              <NavItem>
                <NavLink href="/" tag={Link} to="/">
                  <div className="tokoflix-navbar-saldo">
                    <span className="text">
                    Balance (Rp)
                    </span>
                    <span className="nominal text-dark">100.000</span>
                  </div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-success" href="/" tag={Link} to="/"><FontAwesomeIcon icon={faShoppingCart} /></NavLink>
              </NavItem>
              <div className="separator" />
              <NavItem>
                <NavLink className="text-success" href="/" tag={Link} to="/">Watchlist</NavLink>
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
  ]).isRequired,
  handleFilterMovies: PropTypes.func.isRequired
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
  handleFilterMovies
}, dispatch);

export default connect(
  mapStateToProps, mapDispatchToProps
)(MainLayout);
