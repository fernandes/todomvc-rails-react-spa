import {
  TODOS_INDEX_SUCCEEDED,
  TODOS_CLEAR_COMPLETED_SUCCEEDED,
  TODOS_TOGGLE_STATUS_SUCCEEDED,
  TODOS_VISIBILITY_FILTER,
  TODO_CREATE_SUCCEEDED,
  TODO_UPDATE_SUCCEEDED,
  TODO_DELETE_SUCCEEDED,
} from '../actions/types'

const todoInitialState = {
  filter: 'all',
  results: [],
}

export const Todo = (state = todoInitialState, action) => {
  switch (action.type) {
    case TODOS_INDEX_SUCCEEDED:
      return { ...state, results: action.todos }
    case TODOS_CLEAR_COMPLETED_SUCCEEDED:
      // return { ...state, results: action.todos }
      return { ...state, results: state.results.filter((todo) =>
        todo.completed === false) }
    case TODOS_TOGGLE_STATUS_SUCCEEDED:
      // return { ...state, results: action.todos }
      return { ...state, results: state.results.map((todo, i) =>
        Object.assign(todo, {completed: action.status})
      )}
    case TODOS_VISIBILITY_FILTER:
      // return { ...state, results: action.todos }
      return { ...state, filter: action.filter }
    case TODO_CREATE_SUCCEEDED:
      return { ...state, results: [...state.results, action.todo] }
    case TODO_UPDATE_SUCCEEDED:
      return { ...state, results: state.results.map((todo, i) =>
        todo.id === action.todo.id ? (Object.assign(todo, action.todo)) : todo
      ) }
    case TODO_DELETE_SUCCEEDED:
      return { ...state, results: state.results.filter((todo) =>
        todo.id !== action.id) }
    default:
      return state
  }
}
