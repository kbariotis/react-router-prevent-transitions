const initialState = {
  isVisible: false
}

function confirmation(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_CONFIRMATION':
      return Object.assign({}, state, {
        isVisible: true,
      })
    default:
      return state
  }
}

export default confirmation
