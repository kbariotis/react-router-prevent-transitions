import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ isVisible }) => (
  <div>
    {isVisible && <p>Confirmation is visible. Choose an option</p>}
  </div>
)

Modal.propTypes = {
  isVisible: PropTypes.bool,
}

export default Modal
