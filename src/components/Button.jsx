import React from 'react'

const Button = ({color = 'black', title}) => {
  return (
    <button style={{color:color}}>{title}</button>
  )
}

// Button.defaultProps ={
//   color : 'black'
// }

export default Button