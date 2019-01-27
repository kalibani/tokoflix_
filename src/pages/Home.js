import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchNowPlayingMovies } from '../stores/actions/Movies';
import MovieList from '../components/MovieList';

import '../styles/Home.scss';

class Home extends Component {
  componentDidMount() {
    const { fetchNowPlayingMovies } = this.props;
    fetchNowPlayingMovies();
  }

  render() {
    const { movies } = this.props;
    return (
      <div className="home">
        <div className="mt-5">This is Home</div>
        <MovieList movies={movies} />
      </div>
    );
  }
}

Home.propTypes = {
  fetchNowPlayingMovies: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired
};

const mapStateToProps = ({ movies }) => ({
  movies: movies.movies
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchNowPlayingMovies
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
