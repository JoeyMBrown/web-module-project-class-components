// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

function TodoList(props) {
    const { tasks, completeTask } = props;
        return (
            <ul>
                {
                    tasks.map((task) => <Todo completed={task.completed} task={task.task} key={task.id} taskId={task.id} completeTask={completeTask}/>)
                }
            </ul>
        )
}

export default TodoList;
