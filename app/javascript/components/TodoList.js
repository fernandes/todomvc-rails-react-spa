import React from 'react'
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const toggleAll = (e) => {
    props.toggleAll(e.target.checked)
  }

  const remainingTasks = () => {
    return props.tasks.filter(task => task.completed === false).length
  }

  const isToggleAllChecked = () => {
    if (remainingTasks() === 0) {
      return true
    } else {
      return false
    }
  }

  const filteredTasks = () => {
    if (props.filter === 'all') {
      return props.tasks
    }
    const filterUsing = (props.filter === 'completed' ? true : false)
    return props.tasks.filter(task => {
      return task.completed === filterUsing;
    })
  }

  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
        onChange={toggleAll}
        checked={isToggleAllChecked()}
      />
      <ul className="todo-list">
        {filteredTasks().map((task) =>
          <TodoItem
            task={task}
            setCompleted={props.setCompleted}
            destroyTask={props.destroyTask}
            key={task.id}
            updateDescription={props.updateDescription}
          />
        )}
      </ul>
    </section>
  )
}

export default TodoList
