import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerMiddleware, routerReducer } from 'react-router-redux';

import { Auth } from './Auth'
import { Todo } from './Todo'
export * from './middleware'


const rootReducer = combineReducers({
  auth: Auth,
  todos: Todo,
  form: formReducer,
  router: routerReducer
})

export default rootReducer
