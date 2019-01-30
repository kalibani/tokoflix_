import React from 'react';
import ContentLoader from 'react-content-loader';

const BaseLoader = props => (
  <ContentLoader
    height={900}
    width={600}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="70" rx="5" ry="5" width="550" height="850" />
  </ContentLoader>
);

export default BaseLoader;
