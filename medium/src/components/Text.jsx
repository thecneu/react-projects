import React from 'react'

const Text = ({children, content}) => {
  if (content) {
    return <div className="text" dangerouslySetInnerHTML={{ __html: content}} />
  }

  return <div className="text">{children}</div>
}

export default Text