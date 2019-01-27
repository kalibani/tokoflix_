import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const BaseRoute = ({ component: Component, layout: Layout, ...attributes }) => (
  <Route
    {...attributes}
    render={props => (
      <Layout title={attributes.title} backButtonTarget={attributes.backButtonTarget}>
        <Component {...props} />
      </Layout>
    )}
  />
);

BaseRoute.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.func.isRequired
};

export default BaseRoute;
