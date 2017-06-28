import React from 'react'

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {editing: false, editingDescription: this.props.task.description}
    this.handleChange = this.handleChange.bind(this)
    this.destroyTask = this.destroyTask.bind(this)
    this.handleEditDoubleClick = this.handleEditDoubleClick.bind(this)
    this.handleEditChange = this.handleEditChange.bind(this)
    this.handleEditKeyDown = this.handleEditKeyDown.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.editing && this.state.editing) {
      let node = this.refs.editField;
      node.focus();
      node.setSelectionRange(node.value.length, node.value.length);
    }
  }

  handleChange(e) {
    this.props.setCompleted(this.props.task.id, e.target.checked)
  }

  destroyTask(e) {
    this.props.destroyTask(this.props.task.id)
  }

  handleEditDoubleClick(e) {
    this.setState({editing: true})
    const node = this.refs.editField;
    node.focus();
    node.setSelectionRange(node.value.length, node.value.length);
  }

  handleEditChange(e) {
    this.setState({editingDescription: e.target.value})
  }

  handleEditKeyDown(e) {
    if (e.which == 13) {
      this.handleSubmit(e)
    } else if (e.which == 27) {
      this.setState({editing: false, editingDescription: this.props.task.description})
    }
  }

  handleSubmit(e) {
    let val = this.state.editingDescription.trim();
    if (val) {
      this.props.updateDescription(this.props.task.id, this.state.editingDescription)
    } else {
      this.destroyTask()
    }
    this.setState({editing: false})
  }
  classNames() {
    let classes = ""
    if (this.props.task.completed) {
      classes = "completed"
    }
    if (this.state.editing) {
      classes = classes + " editing"
    }
    return classes
  }

  render() {
    return (
      <li className={this.classNames()}>
        <div>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onChange={this.handleChange}
              checked={this.props.task.completed}
            />
            <label onDoubleClick={this.handleEditDoubleClick}>{this.props.task.description}</label>
            <button
              className="destroy"
              onClick={this.destroyTask}
            / >
          </div>
          <input
            className="edit"
            value={this.state.editingDescription}
            onChange={this.handleEditChange}
            onKeyDown={this.handleEditKeyDown}
            onBlur={this.handleSubmit}
            ref="editField"
          />
        </div>
      </li>
    )
  }
}

export default TodoItem;
