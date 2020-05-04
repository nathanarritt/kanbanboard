import React, { Component } from 'react';
import './App.css';

import Controls from './components/Controls';
import Board from './components/Board';

const NUM_STAGES = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
          { name: 'task 0', stage: 0, selected: false },
          { name: 'task 1', stage: 0, selected: false },
          { name: 'task 2', stage: 0, selected: false },
          { name: 'task 3', stage: 0, selected: false },
          { name: 'task 4', stage: 1, selected: false },
          { name: 'task 5', stage: 1, selected: false },
          { name: 'task 6', stage: 1, selected: false },
          { name: 'task 7', stage: 2, selected: false },
          { name: 'task 8', stage: 2, selected: false },
          { name: 'task 9', stage: 3, selected: false },
      ],
    };
    this.stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];
  }

  handleMoveTask = (direction) => {
    const { tasks } = this.state;
    const nextTasks = [...tasks];
    const selectedTaskIndex = tasks.findIndex(task => task.selected);
    const selectedTask = { ...nextTasks[selectedTaskIndex] };
    if (direction === 'back' && selectedTask.stage > 0) {
      selectedTask.stage -= 1;
    } else if (direction === 'forward' && selectedTask.stage < 3) {
      selectedTask.stage += 1;
    }
    nextTasks.splice(selectedTaskIndex, 1);
    nextTasks.push(selectedTask);
    this.setState({ tasks: nextTasks });
  };

  handleSelectTask = (selectedTaskName) => {
    const { tasks } = this.state;
    const nextTasks = tasks.map(task => {
      if (task.name === selectedTaskName) {
        task.selected = true;
      } else {
        task.selected = false;
      }
      return task;
    });
    this.setState({ tasks: nextTasks });
  };

  render() {
    const { tasks } = this.state;

    let stagesTasks = [];
    let selectedTask;
    for (let i = 0; i < NUM_STAGES; ++i) {
      stagesTasks.push([]);
    }
    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks[stageId].push(task);

      if (task.selected) {
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
          stagesNames={this.stagesNames}
          handleSelectTask={this.handleSelectTask}
        />
      </div>
    );
  }
}

export default App;
