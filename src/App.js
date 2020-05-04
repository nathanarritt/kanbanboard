import React, { Component } from 'react';
import './App.css';

import Controls from './components/Controls';
import Board from './components/Board';
import Stage from './components/Stage';
import Task from './components/Task';
import { DIRECTION } from './constants';

const NUM_STAGES = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
          { name: 'task 0', stage: 0 },
          { name: 'task 1', stage: 0 },
          { name: 'task 2', stage: 0 },
          { name: 'task 3', stage: 0 },
          { name: 'task 4', stage: 1 },
          { name: 'task 5', stage: 1 },
          { name: 'task 6', stage: 1 },
          { name: 'task 7', stage: 2 },
          { name: 'task 8', stage: 2 },
          { name: 'task 9', stage: 3 },
      ],
      selectedTaskName: '',
    };
    this.stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];
  }

  handleMoveTask = (direction) => {
    const { tasks, selectedTaskName } = this.state;
    const nextTasks = [...tasks];
    const selectedTaskIndex = nextTasks.findIndex(task => task.name === selectedTaskName);
    const selectedTask = { ...nextTasks[selectedTaskIndex] };

    if (direction === DIRECTION.BACK && selectedTask.stage > 0) {
      selectedTask.stage -= 1;
    } else if (direction === DIRECTION.FORWARD && selectedTask.stage < 3) {
      selectedTask.stage += 1;
    }

    nextTasks.splice(selectedTaskIndex, 1);
    nextTasks.push(selectedTask);
    this.setState({ tasks: nextTasks });
  };

  handleSelectTask = (selectedTaskName) => {
    this.setState({ selectedTaskName });
  };

  renderTask = (task) => (
    <Task
      key={task.name}
      name={task.name}
      handleSelectTask={this.handleSelectTask}
    />
  );

  renderStage = (tasks, idx) => (
    <Stage
      stageId={idx}
      key={this.stagesNames[idx]}
      name={this.stagesNames[idx]}
      tasks={tasks}
      renderTask={this.renderTask}
    />
  );

  render() {
    const { tasks, selectedTaskName } = this.state;

    let stagesTasks = [];
    let selectedTask;
    for (let i = 0; i < NUM_STAGES; ++i) {
      stagesTasks.push([]);
    }
    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks[stageId].push(task);

      if (task.name === selectedTaskName) {
        selectedTask = task;
      }
    }

    return (
      <div className="App">
        <Controls
          handleMoveTask={this.handleMoveTask}
          selectedTask={selectedTask}
        />
        <Board
          stagesTasks={stagesTasks}
          renderStage={this.renderStage}
        />
      </div>
    );
  }
}

export default App;
