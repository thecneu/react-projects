import React from 'react'
import Message from './Message'

const Messages = ({messages}) => (
  <ul>
    {messages.map(msg => <Message {...msg} />)}
  </ul>
)

export default Messages