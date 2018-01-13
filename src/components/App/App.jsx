import React from 'react'
import PropTypes from 'prop-types'
import {Route} from 'react-router'
import {push} from 'connected-react-router'

import Page from '../Page'
import Modal from '../Modal'

const App = ({ redirect, needsConfirmation }) => (
  <div>
    <a href="#" onClick={() => redirect('/page1')}>Page 1</a> - <a href="#" onClick={() => redirect('/page2')}>Page 2</a>
    <Modal isVisible={needsConfirmation}/>
    <Route path='/page1' component={() => <Page name="1" />} />
    <Route path='/page2' component={() => <Page name="2" />} />
  </div>
)

App.propTypes = {}

export default App
