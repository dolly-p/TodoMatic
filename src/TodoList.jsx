import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, toggleTaskCompleted, deleteTask, editTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTaskCompleted={toggleTaskCompleted}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
