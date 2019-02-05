import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import BaseMeta from '../components/BaseMeta';
import BaseLoader from '../components/BaseLoader';
import BaseLoaderBox from '../components/BaseLoaderBox';
import BaseLoaderText from '../components/BaseLoaderText';
import MovieDetail from '../components/MovieDetail';
import MovieDetailOverview from '../components/MovieDetailOverview';
import SimilarMovie from '../components/SimilarMovie';
import RecommendationsMovie from '../components/RecommendationsMovie';
import { fetchDetailMovie } from '../stores/actions/Movies';
import '../styles/detail.scss';
import 'react-toastify/dist/ReactToastify.css';

class Detail extends Component {
  async componentDidMount() {
    const { fetchDetailMovie, match } = this.props;
    await fetchDetailMovie(match.params.movie_id);
  }

  render() {
    const { movie, isLoadingDetail } = this.props;
    return (
      <div className="tokoflix-container-detail">
        <ToastContainer autoClose={2000} />
        {
        Object.keys(movie).length === 0 && !isLoadingDetail ? (
          <div>
            <h1>No Data Available</h1>
          </div>
        ) : Object.keys(movie).length > 0 && !isLoadingDetail ? (
          <React.Fragment>
            <BaseMeta title={`Tokoflix - ${movie.title}`} />
            <MovieDetail movie={movie} />
            <MovieDetailOverview overview={movie.overview} />
            <SimilarMovie movies={movie.similar ? movie.similar.results : []} />
            <RecommendationsMovie movies={movie.recommendations ? movie.recommendations.results : []} title={movie.title} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Row>
              <Col xs="12" sm="6" md="4" lg="4">
                <BaseLoader />
              </Col>
              <Col xs="12" sm="6" md="8" lg="8">
                <BaseLoaderBox />
              </Col>
            </Row>
            <Row>
              <Col>
                <BaseLoaderText />
              </Col>
            </Row>
          </React.Fragment>
        )
      }

      </div>
    );
  }
}

Detail.propTypes = {
  fetchDetailMovie: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  isLoadingDetail: PropTypes.bool.isRequired
};

const mapStateToProps = ({ movies }) => ({
  movie: movies.movie,
  isLoadingDetail: movies.isLoadingDetail
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchDetailMovie
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
