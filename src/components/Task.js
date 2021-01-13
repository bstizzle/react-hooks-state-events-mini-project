import React from "react";

function Task({task, onDeleteTask}) {
  function deleteTask(){
    onDeleteTask(task.text)
  }

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={deleteTask}className="delete">X</button>
    </div>
  );
}

export default Task;
