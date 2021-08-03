import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
        tasks: [],
        textInput: ""
    }
  }
  onChangeHandler = (e) => {
    this.setState({textInput: e.target.value})
  }

  addTodoTask = (e) => {
    const newTask = {
      task: this.state.textInput,
      id: Date.now(),
      completed: false
    }

    this.setState({tasks: [...this.state.tasks, newTask]})
    this.setState({textInput: ""})
  }

  clearCompleted = (e) => {
    const unfinishedTasks = this.state.tasks.filter((task) => {
        if(task.completed === true) {
          console.log(task);
        } else {
          return task
        }
    })

    this.setState({tasks: unfinishedTasks});
    console.log(this.state.tasks);
  }

  completeTask = (e) => {
    const { id } = e.target;
    let tasksCopy = [...this.state.tasks];
    
    this.state.tasks.find((task, index) => {
      if(task.id.toString() === id) {
        let item = {...tasksCopy[index], completed: !tasksCopy[index].completed};
        tasksCopy[index] = item;
        this.setState({tasks: tasksCopy})
      } else {
        return
      }
    })
  }
  render() {
    return (
      <div>
        <TodoList tasks={this.state.tasks} completeTask={this.completeTask}/>
        <TodoForm onChangeHandler={this.onChangeHandler} textInputValue={this.state.textInput} addTodoTask={this.addTodoTask} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
