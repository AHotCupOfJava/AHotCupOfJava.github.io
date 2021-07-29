import React from 'react'

const FormInput = ({ type, placeholder, value, setValue }) => (
  <input
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={e => setValue(e.target.value)}
  />
)

export default FormInput
