import React, { useState } from 'react';

import './App.css';

import Controls from './components/Controls';
import Board from './components/Board';
import Stage from './components/Stage';
import Task from './components/Task';
import { DIRECTION } from './constants';

const NUM_STAGES = 4;

const App = () => {
  const [tasks, setTasks] = useState([
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
  ]);

  const [selectedTaskName, setSelectedTaskName] = useState('');

  const handleMoveTask = direction => {
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
    setTasks(nextTasks);
  };

  const handleSelectTask = nextSelectedTaskName => setSelectedTaskName(nextSelectedTaskName);

  const stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];
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
        handleMoveTask={handleMoveTask}
        selectedTask={selectedTask}
      />
      <Board>
        {stagesTasks.map((tasks, idx) => (
          <Stage
            stageId={idx}
            key={stagesNames[idx]}
            name={stagesNames[idx]}
          >
            {tasks.map(task => (
              <Task
                key={task.name}
                name={task.name}
                handleSelectTask={handleSelectTask}
              />
            ))}
          </Stage>
        ))}
      </Board>
    </div>
  );
}

export default App;
