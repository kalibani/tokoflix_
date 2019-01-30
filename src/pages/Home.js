import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchNowPlayingMovies, handlePagination } from '../stores/actions/Movies';
import MovieList from '../components/MovieList';
import BasePagination from '../components/BasePagination';
import BaseMeta from '../components/BaseMeta';

import '../styles/index.scss';

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
      moviesPerPage, currentPage, totalPage, handlePagination
    } = this.props;
    return (
      <div className="tokoflix">
        <BaseMeta />
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
      </div>
    );
  }
}

Home.propTypes = {
  fetchNowPlayingMovies: PropTypes.func.isRequired,
  moviesPerPage: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  handlePagination: PropTypes.func.isRequired
};

const mapStateToProps = ({ movies }) => ({
  moviesPerPage: movies.moviesPerPage,
  currentPage: movies.currentPage,
  totalPage: movies.totalPage
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchNowPlayingMovies, handlePagination
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
