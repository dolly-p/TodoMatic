import React, { useState } from 'react';

function TodoItem({ task, toggleTaskCompleted, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, newName);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="todo-item">
      <div className="task-group">
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => toggleTaskCompleted(task.id)} 
        />
        {isEditing ? (
          <input 
            type="text" 
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        ) : (
          <span className={task.completed ? 'completed' : ''}>{task.name}</span>
        )}
      </div>
      <div className="btn-group">
        <button onClick={handleEdit} className="edit-btn">
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={() => deleteTask(task.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
