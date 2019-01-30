import React from 'react';
import ContentLoader from 'react-content-loader';

const BaseLoaderBox = props => (
  <ContentLoader
    height={500}
    width={600}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="32" rx="5" ry="5" width="550" height="390" />
  </ContentLoader>
);

export default BaseLoaderBox;
