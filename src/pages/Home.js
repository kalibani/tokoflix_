import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { fetchNowPlayingMovies, handlePagination } from '../stores/actions/Movies';
import MovieList from '../components/MovieList';
import BasePagination from '../components/BasePagination';
import BaseMeta from '../components/BaseMeta';
import BaseLoader from '../components/BaseLoader';

import '../styles/index.scss';
import 'react-toastify/dist/ReactToastify.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth < 768
    };
  }

  componentDidMount() {
    const { fetchNowPlayingMovies } = this.props;
    fetchNowPlayingMovies();
  }

  render() {
    const { isMobile } = this.state;
    const {
      moviesPerPage, currentPage, totalPage, handlePagination, isLoading
    } = this.props;
    return (
      <div className="tokoflix">
        <BaseMeta />
        <ToastContainer autoClose={3000} />
        {
          moviesPerPage.length === 0 && isLoading ? (
            <Row>
              <Col xs="12" sm="6" md="4" lg="4">
                <BaseLoader />
              </Col>
              <Col xs="12" sm="6" md="4" lg="4">
                <BaseLoader />
              </Col>
              <Col xs="12" sm="6" md="4" lg="4">
                <BaseLoader />
              </Col>
              <Col xs="12" sm="6" md="4" lg="4">
                <BaseLoader />
              </Col>
              <Col xs="12" sm="6" md="4" lg="4">
                <BaseLoader />
              </Col>
              <Col xs="12" sm="6" md="4" lg="4">
                <BaseLoader />
              </Col>
            </Row>
          ) : moviesPerPage.length === 0 && !isLoading ? (
            <h1>No Data Available</h1>
          ) : (
            <React.Fragment>
              <MovieList movies={moviesPerPage} />
              <div className="d-flex justify-content-center align-items-center">
                <BasePagination
                  mobile={isMobile}
                  totalPage={totalPage}
                  currentPage={currentPage}
                  maxPageSize={totalPage}
                  onPageChange={handlePagination}
                />
              </div>
            </React.Fragment>
          )
        }

      </div>
    );
  }
}

Home.propTypes = {
  fetchNowPlayingMovies: PropTypes.func.isRequired,
  moviesPerPage: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handlePagination: PropTypes.func.isRequired
};

const mapStateToProps = ({ movies }) => ({
  moviesPerPage: movies.moviesPerPage,
  currentPage: movies.currentPage,
  totalPage: movies.totalPage,
  isLoading: movies.isLoading
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchNowPlayingMovies, handlePagination
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
