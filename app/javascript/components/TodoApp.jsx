import React from 'react'
import PropTypes from 'prop-types'
import update from 'immutability-helper';

import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';

const TASKS = [
  {id: 1, description: 'Learn React', completed: true},
  {id: 2, description: 'Learn Redux', completed: false},
  {id: 3, description: 'Implement', completed: false},
];

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {tasks: TASKS, maxId: 3, filter: this.props.requestFilter}
    this.addTask = this.addTask.bind(this)
    this.setCompleted = this.setCompleted.bind(this)
    this.updateDescription = this.updateDescription.bind(this)
    this.clearCompleted = this.clearCompleted.bind(this)
    this.toggleAll = this.toggleAll.bind(this)
    this.destroyTask = this.destroyTask.bind(this)
    this.filterTasks = this.filterTasks.bind(this)
  }

  setCompleted(id, status) {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.completed = status;
      }
      return task
    })
    this.setState({tasks: newTasks})
  }

  updateDescription(id, description) {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.description = description;
      }
      return task
    })
    this.setState({tasks: newTasks})
  }

  clearCompleted(e) {
    const newTasks = this.state.tasks.filter(task => {
      return task.completed === false;
    })
    this.setState({tasks: newTasks})
  }

  toggleAll(status) {
    const toggledTasks = this.state.tasks.map(task => {
      task.completed = status;
      return task
    })
    this.setState({tasks: toggledTasks})
  }

  addTask(description) {
    const nextId = this.state.maxId + 1;

    const newEntry = {
      id: nextId,
      description: description,
      completed: false,
    }
    const newTasksArray = [].concat(this.state.tasks, newEntry)
    this.setState({tasks: newTasksArray, maxId: nextId})
  }

  destroyTask(id) {
    const newTasks = this.state.tasks.filter(task => {
      return task.id !== id;
    })
    this.setState({tasks: newTasks})
  }

  filterTasks(filter) {
    this.setState({filter: filter})
    const html = document.getElementById('todo').innerHTML
    const title = document.title
    const urlFilter = (filter == 'all' ? '/' : '/'+filter)
    window.history.pushState({"html": html, "pageTitle": title},"", urlFilter);
  }

  render() {
    return (
      <div>
        <Header addTask={this.addTask} />
        <TodoList
          tasks={this.state.tasks}
          setCompleted={this.setCompleted}
          toggleAll={this.toggleAll}
          destroyTask={this.destroyTask}
          updateDescription={this.updateDescription}
          filter={this.state.filter}
        />
        <Footer
          tasks={this.state.tasks}
          clearCompleted={this.clearCompleted}
          filterTasks={this.filterTasks}
          filter={this.state.filter}
        />
      </div>
    );
  }
}

TodoApp.defaultProps = {
  // firstName: 'David',
}

TodoApp.propTypes = {
  // firstName: PropTypes.string,
  // lastName: PropTypes.string
}

export default TodoApp;
