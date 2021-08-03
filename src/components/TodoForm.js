import React from "react";

class TodoForm extends React.Component {
    render() {
        return (
            <div>
                <input type='text' placeholder='...todo'/>
                <button>Add Todo</button>
                <button>Clear Computed</button>
            </div>
        )
    }
}

export default TodoForm;