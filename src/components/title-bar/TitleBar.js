import React from 'react';

import './TitleBar.scss';

const TitleBar = ({ children }) => {
  return (
    <div className="title-container">
      <h1 className="title-text">Friends List</h1>
      {children}
    </div>
  );
};

export default TitleBar;
