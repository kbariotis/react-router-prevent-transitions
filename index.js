import React from 'react'
import { render } from 'react-dom'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import confirmationReducer from './reducer'
import App from './components/App'
import confirmationMiddleware from './middleware'
import { BrowserRouter } from 'react-router-dom'

import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router'

let history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(combineReducers({ confirmation: confirmationReducer})),
  {},
  composeEnhancers(
    applyMiddleware(
      confirmationMiddleware,
      routerMiddleware(history)
    ),
  ),
)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
