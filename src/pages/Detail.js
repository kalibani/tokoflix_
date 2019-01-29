import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDetailMovie } from '../stores/actions/Movies';

class Detail extends Component {
  async componentDidMount() {
    const { fetchDetailMovie, match } = this.props;
    await fetchDetailMovie(match.params.movie_id);
  }

  render() {
    const { movie } = this.props;
    return (
      <div>
This is Detail
        {movie.title}
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
