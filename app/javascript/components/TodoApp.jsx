import React from 'react'
import PropTypes from 'prop-types'
import update from 'immutability-helper';
import { connect } from 'react-redux'

import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';

import { createTodo, updateTodo, deleteTodo, clearCompletedTodos, toggleStatusTodos } from '../actions'

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {maxId: 3, filter: 'all'}
    this.addTask = this.addTask.bind(this)
    this.setCompleted = this.setCompleted.bind(this)
    this.updateDescription = this.updateDescription.bind(this)
    this.clearCompleted = this.clearCompleted.bind(this)
    this.toggleAll = this.toggleAll.bind(this)
    this.destroyTask = this.destroyTask.bind(this)
    this.filterTasks = this.filterTasks.bind(this)
  }

  setCompleted(id, status) {
    this.props.updateTodo(id, {completed: status})
  }

  updateDescription(id, description) {
    this.props.updateTodo(id, {description: description})
  }

  clearCompleted(e) {
    this.props.clearCompletedTodos()
  }

  toggleAll(status) {
    if (status === undefined) {
      status = false
    }
    this.props.toggleStatusTodos(status)
  }

  addTask(description) {
    this.props.createTodo({description: description, completed: false})
  }

  destroyTask(id) {
    this.props.deleteTodo(id)
  }

  filterTasks(filter) {
    this.setState({filter: filter})
    const html = document.getElementById('todo').innerHTML
    const title = document.title
    const urlFilter = (filter == 'all' ? '/' : '/'+filter)
    window.history.pushState({"html": html, "pageTitle": title},"", urlFilter);
  }

  render() {
    const todos = this.props.todos.results;
    return (
      <div>
        <Header addTask={this.addTask} />
        <TodoList
          tasks={todos}
          setCompleted={this.setCompleted}
          toggleAll={this.toggleAll}
          destroyTask={this.destroyTask}
          updateDescription={this.updateDescription}
          filter={this.state.filter}
        />
        <Footer
          tasks={todos}
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

function mapStateToProps (state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps (dispatch) {
  return {
    clearCompletedTodos: () => {
      dispatch(clearCompletedTodos())
    },
    toggleStatusTodos: (status) => {
      dispatch(toggleStatusTodos(status))
    },
    createTodo: (todo) => {
      dispatch(createTodo(todo))
    },
    updateTodo: (id, todo) => {
      dispatch(updateTodo(id, todo))
    },
    deleteTodo: (id) => {
      dispatch(deleteTodo(id))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
