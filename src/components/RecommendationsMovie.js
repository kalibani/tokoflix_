import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import '../styles/recommendations.scss';

class RecommendationMovies extends Component {
  componentDidMount

  render() {
    const { movies, title } = this.props;
    return (
      <React.Fragment>
        <div className="container-recommendations-movies">
          <h1>
            Because You Watch :
            <span>{title}</span>
          </h1>
          <Row>
            {
              movies.length > 0 ? movies.map((value, index) => (
                <Col xs="12" sm="6" md="3" lg="3" className="mt-2 mb-4" key={index}>
                  <a href={value.poster_path && `${process.env.REACT_APP_IMAGE_URL}${value.poster_path}`} target="_blank" rel="noopener noreferrer">
                    <div className="recommendations-movie-poster">
                      <img
                        height="220"
                        src={value.poster_path && `${process.env.REACT_APP_IMAGE_URL}${value.poster_path}`}
                        alt="Img Tokoflix"
                      />
                    </div>
                  </a>
                </Col>
              )) : (
                <div className="recommendations-movie-not-available ml-3">
                  <h1>No Recommendations Available</h1>
                </div>
              )
            }
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

RecommendationMovies.defaultProps = {
  title: ''
};

RecommendationMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  title: PropTypes.string
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendationMovies);
