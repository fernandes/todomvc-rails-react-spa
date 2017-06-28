import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {description: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleChange(e) {
    this.setState({description: e.target.value})
  }

  handleKeyPress(e) {
    if(e.key == 'Enter') {
      this.props.addTask(this.state.description)
      this.setState({description: ''})
    }
  }
  render() {
    return(
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={this.state.description}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </header>
    )
  }
}

export default Header;
