import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import { routerMiddleware, routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import createHistory from 'history/createBrowserHistory';

import { promiseMiddleware, localStorageMiddleware } from './middleware';
import mySaga from '../sagas'

// Reducers
import Auth from './Auth'
import Todo from './Todo'

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const routerMiddlewareReady = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = (module.hot && module.hot.data && module.hot.data.store)
  ? module.hot.data.store :
  createStore(
    combineReducers({
      auth: Auth,
      todos: Todo,
      form: formReducer,
      router: routerReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
      routerMiddlewareReady,
      promiseMiddleware,
      localStorageMiddleware,
      sagaMiddleware,
      logger
    )
  )

sagaMiddleware.run(mySaga)

export default store;
