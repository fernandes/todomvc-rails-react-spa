import React from 'react'

const Footer = (props) => {
  const remainingTasks = () => {
    return props.tasks.filter(task => task.completed === false).length
  }

  const completedTasks = () => {
    return props.tasks.filter(task => task.completed === true).length
  }

  const wordItem = () => {
    if (remainingTasks() > 1) {
      return "items"
    } else {
      return "item"
    }
  }

  const linkClassName = (filter) => {
    if (props.filter === filter) {
      return 'selected'
    } else {
      return ''
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    const dataFilter = e.target.getAttribute('data-filter')
    props.filterTasks(dataFilter)
  }

  return (
    <div>
    { remainingTasks() > 0 ?
      <footer className="footer">
        <span className="todo-count">
          <strong>{remainingTasks()}</strong>
          <span> </span>
          <span>{wordItem()}</span><span> left</span>
        </span>
        <ul className="filters">
          <li>
            <a
              href="/"
              data-turbolinks="false"
              data-filter="all"
              className={linkClassName('all')}
              onClick={handleClick}
            >
              All
            </a>
          </li>
          <span></span>
          <li>
            <a href="/active"
              data-turbolinks="false"
              data-filter="active"
              className={linkClassName('active')}
              onClick={handleClick}
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
              className={linkClassName('completed')}
              onClick={handleClick}
            >
              Completed
            </a>
          </li>
        </ul>
        {
          completedTasks() ?
            <button
              className="clear-completed"
              onClick={props.clearCompleted}
            >
              Clear completed
            </button>
          :
            ''
        }
      </footer>
    : '' }
    </div>
  )
}

export default Footer;
