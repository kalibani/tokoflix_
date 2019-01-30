import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>
      {title}
    </title>
    <meta name="description" content={description} />
  </Helmet>
);

Meta.defaultProps = {
  title: 'Tokoflix - Jual Beli Online Aman',
  description: 'Tokoflix situs jual beli film legal dan aman'
};

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Meta;
