import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.ButtonValue}</button>
  )
}

export default Button