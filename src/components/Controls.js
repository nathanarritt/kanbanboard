import React from 'react';

import { DIRECTION } from '../constants';

const Controls = ({ handleMoveTask, selectedTask }) => (
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
        onClick={() => handleMoveTask(DIRECTION.BACK)}
      >
        Move back
      </button>
      <button
        style={{ marginLeft: '1rem' }}
        disabled={!selectedTask || selectedTask.stage === 3}
        data-testid="move-forward-btn"
        onClick={() => handleMoveTask(DIRECTION.FORWARD)}
      >
        Move forward
      </button>
    </div>
  </div>
);

export default Controls;
