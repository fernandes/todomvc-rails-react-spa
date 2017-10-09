import {
  TODOS_INDEX,
  TODOS_CLEAR_COMPLETED,
  TODOS_TOGGLE_STATUS,
  TODOS_VISIBILITY_FILTER,
  TODO_CREATE,
  TODO_UPDATE,
  TODO_DELETE,
} from './types'

export const loadTodos = () => {
  return ({
    type: TODOS_INDEX
  })
};

export const clearCompletedTodos = () => {
  return ({
    type: TODOS_CLEAR_COMPLETED
  })
};

export const toggleStatusTodos = (status) => {
  return ({
    type: TODOS_TOGGLE_STATUS,
    status: status
  })
}

export const visibilityFilterTodos = (filter) => {
  return ({
    type: TODOS_VISIBILITY_FILTER,
    filter: filter
  })
}

export const createTodo = (todo) => {
  return ({
    type: TODO_CREATE,
    todo: todo
  })
};

export const updateTodo = (id, todo) => {
  return ({
    type: TODO_UPDATE,
    id: id,
    todo: todo
  })
};

export const deleteTodo = (id) => {
  return ({
    type: TODO_DELETE,
    id: id,
  })
};
