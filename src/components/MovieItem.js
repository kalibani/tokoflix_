import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import { fetchNowPlayingMovies } from '../stores/actions/Movies';

class MovieItem extends Component {
  componentDidMount() {
    const { fetchNowPlayingMovies } = this.props;
    fetchNowPlayingMovies();
  }

  urlConverter = (url) => {
    let urlConverted = '';
    if (url) {
      urlConverted = url.replace(/\s+/g, '-').toLowerCase();
    }
    return urlConverted;
  }

  render() {
    const { movie } = this.props;
    return (
      <React.Fragment>
        <Col xs="12" sm="12" md="3" lg="3" className="mb-3">
          <Link href={`${movie.id}-${this.urlConverter(movie.title)}`} to={`${movie.id}-${this.urlConverter(movie.title)}`}>
            <div className="movie-list-container">
              <h5>{movie.title}</h5>
              <img
                width="200"
                height="200"
                src={movie.poster_path && `https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt="Img Tokoflix"
              />
            </div>
          </Link>

        </Col>
      </React.Fragment>
    );
  }
}

MovieItem.propTypes = {
  fetchNowPlayingMovies: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchNowPlayingMovies
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieItem);
