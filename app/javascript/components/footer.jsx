import React from 'react'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {filter: 'all'}
    this.remainingTasks = this.remainingTasks.bind(this)
    this.wordItem = this.wordItem.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  remainingTasks() {
    return this.props.tasks.filter(task => task.completed === false).length
  }

  completedTasks() {
    return this.props.tasks.filter(task => task.completed === true).length
  }

  wordItem() {
    if (this.remainingTasks() > 1) {
      return "items"
    } else {
      return "item"
    }
  }

  linkClassName(filter) {
    if (this.props.filter === filter) {
      return 'selected'
    } else {
      return ''
    }
  }
  handleClick(e) {
    e.preventDefault();
    const dataFilter = e.target.getAttribute('data-filter')
    this.props.filterTasks(dataFilter)
  }

  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.remainingTasks()}</strong>
          <span> </span>
          <span>{this.wordItem()}</span><span> left</span>
        </span>
        <ul className="filters">
          <li>
            <a
              href="/"
              data-turbolinks="false"
              data-filter="all"
              className={this.linkClassName('all')}
              onClick={this.handleClick}
            >
              All
            </a>
          </li>
          <span></span>
          <li>
            <a href="/active"
              data-turbolinks="false"
              data-filter="active"
              className={this.linkClassName('active')}
              onClick={this.handleClick}
            >
              Active
            </a>
          </li>
          <span></span>
          <li>
            <a
              href="/completed"
              data-turbolinks="false"
              data-filter="completed"
              className={this.linkClassName('completed')}
              onClick={this.handleClick}
            >
              Completed
            </a>
          </li>
        </ul>
        {
          this.completedTasks() ?
            <button
              className="clear-completed"
              onClick={this.props.clearCompleted}
            >
              Clear completed
            </button>
          :
            ''
        }
      </footer>
    )
  }
}

export default Footer;
