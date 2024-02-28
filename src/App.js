import React, { useState, useRef } from 'react';
import TaskList from './TaskList';

export const TaskContext = React.createContext();

const App = () => {
  const [tasks, setTasks] = useState([]);
  const newTaskTextRef = useRef('');

  const handleAddTask = () => {
    const newTaskText = newTaskTextRef.current.value;
    if (newTaskText.trim() !== '') {
      setTasks([...tasks, { text: newTaskText, completed: false }]);
      newTaskTextRef.current.value = '';
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      <div>
        <h1>Lista de tareas</h1>
        <div>
          <input
            type="text"
            ref={newTaskTextRef}
            id="taskText"
          />
          <button onClick={handleAddTask}>Agregar tarea</button>
        </div>
        <TaskList />
      </div>
    </TaskContext.Provider>
  );
};

export default App;
