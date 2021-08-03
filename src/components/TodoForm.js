import React from "react";

function TodoForm(props) {
    const { onChangeHandler, textInputValue, addTodoTask, clearCompleted } = props;
        return (
            <div>
                <input type='text' placeholder='...todo' onChange={onChangeHandler} value={textInputValue}/>
                <button onClick={addTodoTask}>Add Todo</button>
                <button onClick={clearCompleted}>Clear Completed</button>
            </div>
        )
}

export default TodoForm;