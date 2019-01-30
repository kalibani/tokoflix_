import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

const MovieDetailOverview = ({ overview }) => (
  <Row className="mt-3">
    <Col xs="12" sm="12" md="12" lg="12">
      <div>
        <p className="tokoflix-detail-overview">{overview}</p>
      </div>
    </Col>
  </Row>
);

MovieDetailOverview.defaultProps = {
  overview: ''
};

MovieDetailOverview.propTypes = {
  overview: PropTypes.string
};

export default MovieDetailOverview;
