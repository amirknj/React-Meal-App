import React,{useContext} from 'react'
import CartContext from '../../context/cart-context'
import MealForm from './MealForm'
import classes from "./MealItem.module.css"

const MealItem = props => {

  const cartContext = useContext(CartContext)

  const addToCartHandler = amount => {
    console.log(amount);
    cartContext.addItem({
      id : props.mealItem.id,
      name : props.mealItem.name,
      price : +props.mealItem.price,
      amount : +amount
    })

  }

  return (
    <li className={classes.meal}>
        <div>
            <h3>{props.mealItem.name}</h3>
            <div className={classes.description}>{props.mealItem.description}</div>
            <div className={classes.price}>{props.mealItem.price}</div>
        </div>
        <div>
          <MealForm onAddtoCart={addToCartHandler}/>
        </div>
    </li>
  )
}

export default MealItem