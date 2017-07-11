import firebase from '../firebase'

export const message = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_MESSAGE':
      const { id, text, time, author } = action
      return {
        id,
        text,
        time,
        author
      }
    case 'SEND_MESSAGE':
      const { user: { name, avatar } } = action
      let msg = {
        text: action.text,
        time: Date.now(),
        author: {
          name,
          avatar
        }
      }

      const newMsgRef = firebase().database().ref('messages').push()
      msg.id = newMsgRef.key
      newMsgRef.set(msg)

      return msg
    default:
      return state
  }
}

export const messages = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_MESSAGE':
      if (state.map(m => m.id).includes(action.id)) {
        return state
      } else {
        return [
          ...state,
          message(undefined, action)
        ]
      }
    case 'SEND_MESSAGE':
      return [
        ...state,
        message(undefined, action)
      ]
    default:
      return state
  }
}

export const meta = (state = {}, action) => {
  switch(action.type) {
    case 'MESSAGES_FETCH':
      return {
        ...state,
        isFetching: true
      }
    case 'MESSAGES_RECEIVED':
      return {
        ...state,
        isFetching: false,
        lastFetched: action.receivedAt
      }
    default:
      return state
  }
}