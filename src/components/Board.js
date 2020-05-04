import React from 'react';

const Board = ({ stagesTasks, renderStage }) => (
  <div>
    <h1>Kanban board</h1>
    <div style={{
      display: 'flex',
    }}>
      {stagesTasks.map((tasks, idx) => renderStage(tasks, idx))}
    </div>
  </div>
);

export default Board;
