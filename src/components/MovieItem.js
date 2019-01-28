import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faUser, faStar } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import {
  urlConverter, priceConverter, IDRFormatter, truncateString
} from '../helpers/Method';

import '../styles/components/movie_list.scss';

class MovieItem extends Component {
  componentDidMount

  render() {
    const { movie } = this.props;
    return (
      <React.Fragment>
        <Col xs="12" sm="6" md="4" lg="4" className="mb-4">
          <Link href={`${movie.id}-${urlConverter(movie.title)}`} to={`${movie.id}-${urlConverter(movie.title)}`} className="movie-item-link">
            <div className="movie-item-container">
              <div className="movie-item-poster">
                <img
                  height="280"
                  src={movie.poster_path && `${process.env.REACT_APP_IMAGE_URL}${movie.poster_path}`}
                  alt="Img Tokoflix"
                />
              </div>
              <div className="movie-item-content">
                <h5 className="movie-item-title">{movie.title}</h5>
                <div className="movie-item-indicator">
                  {
                    !movie.isBelong ? (
                      <span><FontAwesomeIcon icon={faUser} className="off" /></span>
                    ) : (
                      <span><FontAwesomeIcon icon={faUserCheck} className="on" /></span>
                    )
                  }
                </div>
                {
                  movie.overview && (
                    <p>
                      {movie.overview.length > 100 ? truncateString(movie.overview) : movie.overview}
                    </p>
                  )
                }

                <div className="wrapper-movie-item-price">
                  <h5 className="movie-item-price">
                    <span>Rp</span>
                    {IDRFormatter(priceConverter(movie.vote_average))}
                  </h5>
                  <div className="movie-item-rating">
                    <Rating
                      readonly
                      emptySymbol={<FontAwesomeIcon icon={faStar} className="empty" />}
                      fullSymbol={<FontAwesomeIcon icon={faStar} className="full" />}
                      initialRating={movie.vote_average / 2}
                      fractions={2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>

        </Col>
      </React.Fragment>
    );
  }
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieItem);
