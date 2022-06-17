import React from 'react'
import classes from "./Input.module.css"

const Input = React.forwardRef((props, input_ref) => {
  return (
    <div className={classes.input}>
        <label>{props.label}</label>
        <input {...props.input} ref={input_ref}/>
  </div>
  )
})

export default Input