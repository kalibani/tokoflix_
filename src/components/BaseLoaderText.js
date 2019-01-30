import React from 'react';
import ContentLoader from 'react-content-loader';

const BaseLoaderText = props => (
  <ContentLoader
    height={160}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="110" height="10" />
    <rect x="130" y="0" rx="3" ry="3" width="100" height="10" />
    <rect x="250" y="0" rx="3" ry="3" width="130" height="10" />
    <rect x="15" y="20" rx="3" ry="3" width="130" height="10" />
    <rect x="155" y="20" rx="3" ry="3" width="130" height="10" />
    <rect x="295" y="20" rx="3" ry="3" width="85" height="10" />
    <rect x="15" y="40" rx="3" ry="3" width="90" height="10" />
    <rect x="115" y="40" rx="3" ry="3" width="60" height="10" />
    <rect x="185" y="40" rx="3" ry="3" width="60" height="10" />
    <rect x="255" y="40" rx="3" ry="3" width="120" height="10" />
    <rect x="0" y="60" rx="3" ry="3" width="50" height="10" />
    <rect x="60" y="60" rx="3" ry="3" width="150" height="10" />
    <rect x="220" y="60" rx="3" ry="3" width="80" height="10" />
    <rect x="310" y="60" rx="3" ry="3" width="70" height="10" />
  </ContentLoader>
);

export default BaseLoaderText;
