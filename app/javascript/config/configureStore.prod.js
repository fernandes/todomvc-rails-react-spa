import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import { promiseMiddleware, localStorageMiddleware } from '../reducers';
import mySaga from '../sagas'

// Reducers
import rootReducers from '../reducers'

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

const configureStore = () => {

  // Build the middleware for intercepting and dispatching navigation actions
  const routerMiddlewareReady = routerMiddleware(history)
  const sagaMiddleware = createSagaMiddleware()

  const enhancer = compose(
    applyMiddleware(
      routerMiddlewareReady,
      promiseMiddleware,
      localStorageMiddleware,
      sagaMiddleware
    )
  );

  // Add the reducer to your store on the `router` key
  // Also apply our middleware for navigating
  const store = (module.hot && module.hot.data && module.hot.data.store)
    ? module.hot.data.store :
    createStore(
      rootReducers,
      enhancer
    )

  if (module.hot) {
    module.hot.accept('../reducers/index', () => {
      store.replaceReducer(
        require('../reducers').default
      )
    })
  }

  sagaMiddleware.run(mySaga)

  return store
}

export default configureStore
