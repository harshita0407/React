import React, { useState } from 'react';


function CheckList() {
  const hardcodedTasks = [
    { id: 1, text: "Complete project proposal", completed: false },
    { id: 2, text: "Schedule team meeting", completed: false },
    { id: 3, text: "Research market trends", completed: false },
    { id: 4, text: "Review quarterly results", completed: false },
    { id: 5, text: "Update client documentation", completed: false }
  ];

  const [tasks, setTasks] = useState(hardcodedTasks);
  const [allChecked, setAllChecked] = useState(false);

  const toggleAllTasks = () => {
    const newCheckedState = !allChecked;
    setAllChecked(newCheckedState);

    const updatedTasks = tasks.map(task => ({
      ...task,
      completed: newCheckedState
    }));

    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1>Task Checklist</h1>

      <div className="master-checkbox-container">
        <label className="master-checkbox-label">
          <input
            type="checkbox"
            checked={allChecked}
            onChange={toggleAllTasks}
            className="master-checkbox"
          />
          {allChecked ? "Uncheck All Tasks" : "Check All Tasks"}
        </label>
      </div>

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span className="task-text">{task.text}</span>
            <span className="status-indicator">{task.completed ? "✓" : ""}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckList;
