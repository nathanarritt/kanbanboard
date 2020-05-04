import React from 'react';

import { DIRECTION } from '../constants';

const Controls = ({ handleMoveTask, selectedTask }) => {
  const handleBack = () => {
    handleMoveTask(DIRECTION.BACK);
  };

  const handleForward = () => {
    handleMoveTask(DIRECTION.FORWARD);
  };

  return (
    <div style={{ padding: '1rem', background: '#D6F3FF' }}>
      <h1>Controls</h1>
      <div style={{ display: 'flex', marginTop: '1rem' }}>
        <input
          readOnly
          placeholder="Selected task name"
          style={{ fontSize: '1rem' }}
          data-testid="selected-task-field"
          value={selectedTask ? selectedTask.name : ''}
        />
        <button
          style={{ marginLeft: '1rem' }}
          disabled={!selectedTask || selectedTask.stage === 0}
          data-testid="move-back-btn"
          onClick={handleBack}
        >
          Move back
        </button>
        <button
          style={{ marginLeft: '1rem' }}
          disabled={!selectedTask || selectedTask.stage === 3}
          data-testid="move-forward-btn"
          onClick={handleForward}
        >
          Move forward
        </button>
      </div>
    </div>
  );
};

export default Controls;
