import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import '../styles/similar_movie.scss';

class SimilarMovie extends Component {
  componentDidMount

  render() {
    const { movies } = this.props;
    return (
      <React.Fragment>
        <div className="container-similar-movies">
          <h1>
            More Like This :
          </h1>
          <Row>
            {
              movies.length > 0 ? movies.map((value, index) => (
                <Col xs="12" sm="6" md="3" lg="3" className="mb-4" key={index}>
                  <a href={value.poster_path && `${process.env.REACT_APP_IMAGE_URL}${value.poster_path}`} target="_blank" rel="noopener noreferrer">
                    <div className="similar-movie-poster">
                      <img
                        height="220"
                        src={value.poster_path && `${process.env.REACT_APP_IMAGE_URL}${value.poster_path}`}
                        alt="Img Tokoflix"
                      />
                    </div>
                  </a>
                </Col>
              )) : (
                <div className="similar-movie-not-available ml-3">
                  <h1>No Movie Available</h1>
                </div>
              )
            }

          </Row>
        </div>
      </React.Fragment>
    );
  }
}

SimilarMovie.propTypes = {
  movies: PropTypes.array.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimilarMovie);
