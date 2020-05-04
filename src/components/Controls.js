import React, { Component } from 'react';

class Controls extends Component {
  handleBack = () => {
    const { handleMoveTask } = this.props;
    handleMoveTask('back');
  };

  handleForward = () => {
    const { handleMoveTask } = this.props;
    handleMoveTask('forward');
  };

  render() {
    const { handleMoveBack, handleMoveForward, selectedTask } = this.props;

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
            onClick={this.handleBack}
          >
            Move back
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            disabled={!selectedTask || selectedTask.stage === 3}
            data-testid="move-forward-btn"
            onClick={this.handleForward}
          >
            Move forward
          </button>
        </div>
      </div>
    )
  }
}

export default Controls;
