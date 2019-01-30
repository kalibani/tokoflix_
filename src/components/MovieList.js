import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import MovieItem from './MovieItem';

const MovieList = ({ movies }) => (
  <React.Fragment>
    <div className="movies">
      <Row className="d-flex justify-content-center align-items-center">
        {
          movies.length > 0 ? (
            movies.map((movie, index) => (
              <MovieItem movie={movie} key={index} />
            ))
          ) : (
            <div>
              No Data Available
            </div>
          )
        }
      </Row>
    </div>

  </React.Fragment>
);

MovieList.defaultProps = {
  movies: []
};

MovieList.propTypes = {
  movies: PropTypes.array
};

export default MovieList;
