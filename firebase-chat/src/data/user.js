const user = (state = {}, action) => {
  switch(action.type) {
    case 'SET_USER_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'SET_USER_AVATAR':
      return {
        ...state,
        avatar: action.avatar
      }
    case 'USER_START_AUTHORIZING':
      return {
        ...state,
        authorizing: true
      }
    case 'USER_AUTHORIZED':
      return {
        ...state,
        authorizing: false,
        authorized: true
      }
    default:
      return state
  }
}

export default user