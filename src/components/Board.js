import React from 'react';

const Board = ({ children }) => (
  <div>
    <h1>Kanban board</h1>
    <div style={{
      display: 'flex',
    }}>
      {children}
    </div>
  </div>
);

export default Board;
