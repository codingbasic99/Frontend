import React from 'react';
import"./task.css";
import{FaCheck, FaUndoAlt, FaTrash} from"react-icons/fa";

function Task({id, title, isCompleted, deleteTask, updateTask}) {
  return (
    <div className={`m-task-wrapper ${isCompleted ? "active" :""}`}>
        <h5>{title}</h5>{""}
        <div className="controls">
            <FaCheck onClick={()=> updateTask(id, true)} />
            <FaUndoAlt onClick={()=> updateTask(id, false)} />
            <FaTrash onClick={()=> deleteTask(id)} />
        </div>
        </div>
  );
}

export default Task;