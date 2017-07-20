import React from 'react'

const Message = ({avatar, name, text, time}) => (
  <div className="message">
    <i className="material-icon">{avatar}</i>
    <div>
      <strong>{name}</strong>
      <span className="time">a few seconds</span>
    </div>
    <p>{text}</p>
  </div>
)

export default Message