import React from 'react';

const Stage = ({ name, stageId, children }) => (
  <div
    data-testid={`stage-${stageId}`}
    style={{
      flexGrow: 1,
      margin: '1rem',
      paddingBottom: '1rem',
      background: '#fafafa',
    }}>
    <h2>{name}</h2>
    <div>
      {children}
    </div>
  </div>
);

export default Stage;
