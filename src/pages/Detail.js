import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck, faTimes, faPlus, faStar
} from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import {
  priceConverter, IDRFormatter, durationConverter, standardDate
} from '../helpers/Method';

import { fetchDetailMovie, handleActionBuy } from '../stores/actions/Movies';

import '../styles/detail.scss';

class Detail extends Component {
  async componentDidMount() {
    const { fetchDetailMovie, match } = this.props;
    await fetchDetailMovie(match.params.movie_id);
  }

  render() {
    const { movie, handleActionBuy } = this.props;
    return (
      <div className="tokoflix-container-detail">
        <Row>
          <Col xs="12" sm="6" md="4" lg="4">
            <div className="tokoflix-wrapper-image-detail">
              <img
                className="img-thumbnail"
                src={movie.poster_path && `${process.env.REACT_APP_IMAGE_DETAIL}${movie.poster_path}`}
                alt="Img Tokoflix"
              />
            </div>
          </Col>
          <Col xs="12" sm="6" md="8" lg="8">
            <div className="tokoflix-detail-content">
              <h1 className="tokoflix-detail-title">
                {movie.title}
                {
                movie.is_belong_to && (
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                )
              }
              </h1>
              <div className="tokoflix-detail-rating">
                <Rating
                  readonly
                  emptySymbol={<FontAwesomeIcon icon={faStar} className="empty" />}
                  fullSymbol={<FontAwesomeIcon icon={faStar} className="full" />}
                  initialRating={movie.vote_average / 2}
                  fractions={2}
                />
                <div className="tokoflix-detail-rate">
                  {movie.vote_average}
                  &nbsp;
                  <span>/10</span>
                  <h5 className="vote-count">
                    (
                    {movie.vote_count}
                    &nbsp;voter)
                  </h5>
                </div>
              </div>
              <div className="tokoflix-detail-description">
                <span>{movie.adult ? 'NC-17' : 'R'}</span>
                <span>|</span>
                <span>{durationConverter(movie.runtime)}</span>
                <span>|</span>
                {
                  movie.genres && movie.genres.length > 0 && movie.genres.map((value, index) => (
                    <div className="tokoflix-detail-genre" key={index}>
                      {index ? ', ' : ''}
                      {value.name}
                    </div>
                  ))
                }
                <span className="separated">|</span>
                <span>{standardDate(movie.release_date)}</span>
                <span>
                (
                  {movie.production_countries && movie.production_countries[0].iso_3166_1}
                )
                </span>
              </div>
              <div className="tokoflix-detail-Price">
                Rp&nbsp;
                {IDRFormatter(priceConverter(movie.vote_average))}
              </div>
              <div className="tokoflix-detail-cast">
                <Row>
                  <Col xs="12" sm="2" md="2" lg="2">
                    <div className="tokoflix-detail-label">Director</div>
                  </Col>
                  <Col xs="12" sm="10" md="10" lg="10">
                    <span>:</span>
                    &nbsp;
                    {movie.credits && movie.credits.crew[0].name}
                  </Col>
                </Row>
                <Row>
                  <Col xs="12" sm="2" md="2" lg="2">
                    <div className="tokoflix-detail-label">Cast</div>
                  </Col>
                  <Col xs="12" sm="10" md="10" lg="10">
                    <span>:</span>
                    &nbsp;
                    {
                      movie.credits && movie.credits.cast.map((value, index) => (
                        <span key={index}>
                          {index ? ', ' : ''}
                          {value.name}
                        </span>
                      ))
                    }
                  </Col>
                </Row>
                <div className="tokoflix-detail-action">
                  {
                    !movie.is_belong_to ? (
                      <Button
                        outline
                        color="success"
                        block
                        onClick={() => handleActionBuy('buy')}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                        &nbsp;
                        Buy Now
                      </Button>
                    ) : (
                      <Button
                        outline
                        color="danger"
                        block
                        onClick={() => handleActionBuy('cancel')}
                      >
                        <FontAwesomeIcon icon={faTimes} />
                        &nbsp;
                        Cancel Purchase
                      </Button>
                    )
                  }

                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs="12" sm="12" md="12" lg="12">
            <div>
              <p className="tokoflix-detail-overview">{movie.overview}</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

Detail.propTypes = {
  fetchDetailMovie: PropTypes.func.isRequired,
  handleActionBuy: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = ({ movies }) => ({
  movie: movies.movie
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchDetailMovie,
  handleActionBuy
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
