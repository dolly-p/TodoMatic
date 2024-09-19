import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Eat', completed: true },
    { id: 2, name: 'Sleep', completed: false },
    { id: 3, name: 'Repeat', completed: false }
  ]);

  const [filter, setFilter] = useState('All');

  const addTask = (name) => {
    const newTask = { id: Date.now(), name, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter(task => task.id !== id);
    setTasks(remainingTasks);
  };

  const editTask = (id, newName) => {
    const editedTaskList = tasks.map(task =>
      task.id === id ? { ...task, name: newName } : task
    );
    setTasks(editedTaskList);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  return (
    <div className="todoapp">
      <h1>TodoMatic</h1>
      <TodoForm addTask={addTask} />
      <div className="filters btn-group">
        <button className={filter === 'All' ? 'active' : ''} onClick={() => setFilter('All')}>
          All
        </button>
        <button className={filter === 'Active' ? 'active' : ''} onClick={() => setFilter('Active')}>
          Active
        </button>
        <button className={filter === 'Completed' ? 'active' : ''} onClick={() => setFilter('Completed')}>
          Completed
        </button>
      </div>
      <h2>{filteredTasks.length} tasks remaining</h2>
      <TodoList 
        tasks={filteredTasks} 
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
