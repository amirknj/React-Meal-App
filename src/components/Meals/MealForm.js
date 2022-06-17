import React,{useRef} from 'react'
import Input from '../UI/Input'
import classes from "./MealItemForm.module.css"

const MealForm = props => {

  const submitHandler = event =>{
      event.preventDefault()
      props.onAddtoCart(inputRef.current.value)
  }

  const inputRef = useRef()

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input
            label="Amount"
            ref = {inputRef}
            input={{
              type:"number",
              min:"1",
              max:"10",
              step:"1",
              defaultValue:"1"
            }}
        />
        <button>+Add</button>
    </form>
  )
}

export default MealForm