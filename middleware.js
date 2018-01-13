import { CALL_HISTORY_METHOD } from 'connected-react-router/lib/actions'

import { showConfirmation } from './actions';

const confirmationMiddleware = store => next => action => {
  if (action.type !== CALL_HISTORY_METHOD) {
    return next(action)
  } else {
    const state = store.getState()
    if (state.router.location.pathname === '/page1' && action.payload.args[0] !== '/page1') {
      store.dispatch(showConfirmation())
    } else {
      next(action)
    }
  }
}


export default confirmationMiddleware
