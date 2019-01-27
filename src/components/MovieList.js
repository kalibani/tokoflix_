import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import MovieItem from './MovieItem';

const MovieList = ({ movies }) => (
  <React.Fragment>
    <div className="movies">
      <Container>
        {
          movies.length > 0 ? (
            movies.map((movie, index) => (
              <div key={index}>
                <MovieItem movie={movie} />
              </div>
            ))
          ) : (
            <div>
              No Data Available
            </div>
          )
        }
      </Container>
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
