import React from 'react'

import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.toggleAll = this.toggleAll.bind(this)
    this.isToggleAllChecked = this.isToggleAllChecked.bind(this)
    this.filteredTasks = this.filteredTasks.bind(this)
  }

  toggleAll(e) {
    this.props.toggleAll(e.target.checked)
  }

  remainingTasks() {
    return this.props.tasks.filter(task => task.completed === false).length
  }

  isToggleAllChecked() {
    if (remainingTasks() === 0) {
      return true
    } else {
      return false
    }
  }

  filteredTasks() {
    if (this.props.filter === 'all') {
      return this.props.tasks
    }
    const filterUsing = (this.props.filter === 'completed' ? true : false)
    return this.props.tasks.filter(task => {
      return task.completed === filterUsing;
    })
  }

  render() {
    return (
      <section className="main">
        <input
          className="toggle-all"
          type="checkbox"
          onChange={this.toggleAll}
          value={this.isToggleAllChecked}
        />
        <ul className="todo-list">
          {this.filteredTasks().map((task) =>
            <TodoItem
              task={task}
              setCompleted={this.props.setCompleted}
              destroyTask={this.props.destroyTask}
              key={task.id}
              updateDescription={this.props.updateDescription}
            />
          )}
        </ul>
      </section>
    );
  }
}

export default TodoList;
