import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import BaseMeta from '../components/BaseMeta';
import MovieDetail from '../components/MovieDetail';
import SimilarMovie from '../components/SimilarMovie';
import RecommendationsMovie from '../components/RecommendationsMovie';
import { fetchDetailMovie } from '../stores/actions/Movies';
import '../styles/detail.scss';

class Detail extends Component {
  async componentDidMount() {
    const { fetchDetailMovie, match } = this.props;
    await fetchDetailMovie(match.params.movie_id);
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="tokoflix-container-detail">
        <BaseMeta title={`Tokoflix - ${movie.title}`} />
        <MovieDetail movie={movie} />
        <Row className="mt-3">
          <Col xs="12" sm="12" md="12" lg="12">
            <div>
              <p className="tokoflix-detail-overview">{movie.overview}</p>
            </div>
          </Col>
        </Row>
        <SimilarMovie movies={movie.similar ? movie.similar.results : []} />
        <RecommendationsMovie movies={movie.recommendations ? movie.recommendations.results : []} title={movie.title} />
      </div>
    );
  }
}

Detail.propTypes = {
  fetchDetailMovie: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = ({ movies }) => ({
  movie: movies.movie
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchDetailMovie
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
