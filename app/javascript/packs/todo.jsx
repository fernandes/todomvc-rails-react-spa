import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from '../components/TodoApp';

// Our requestFilter to check if we have
// any filter set
function requestFilter() {
  const urlPath = window.location.pathname;
  if (urlPath === "/") {
    return "all"
  } else {
    const filter = urlPath.substring(1)
    return filter
  }
}

// set here as JS scope, to set value when mouting app
// so we can set it's state `onpopstate` callback
var todo_app = '';

// when page is loaded, mount TodoApp
document.addEventListener('turbolinks:load', () => {
  todo_app = ReactDOM.render(
    <TodoApp requestFilter={requestFilter()} />,
    document.getElementById('todo'),
  )
})

// when user hit browser back button..
window.onpopstate = function(e){
  if(e.state){
    // ..just ignore if it's a turbolinks restore
    if (e.state.turbolinks) {
      return true;
    } else {
      // ..or set the request filter on our app
      todo_app.setState({filter: requestFilter()});
    }
  }
};
