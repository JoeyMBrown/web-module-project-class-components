import React from 'react';

function Todo(props) {
    const { task, completeTask, taskId, completed } = props;
        return (
            <li 
              style={{
                textDecoration: completed ? 'line-through' : 'none'
              }} 
              onClick={completeTask} 
              id={taskId}
              >
                  {task}
              </li>
        )
}

export default Todo;