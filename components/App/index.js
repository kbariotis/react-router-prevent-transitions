import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { push } from 'connected-react-router'

import App from './App';

export default withRouter(connect(state => ({
  needsConfirmation: state.confirmation.isVisible
}), dispatch => ({
  redirect: path => dispatch(push(path))
}))(App))
