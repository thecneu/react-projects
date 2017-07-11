import React from 'react'

const Input = ({name, value, placeholder, onChange}) => (
  <input type="text" name={name} value={value} placeholder={placeholder} onChange={onChange} />
)

export default Input