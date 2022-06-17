import React,{useContext} from 'react'
import CartContext from '../../context/cart-context'
import classes from './HeaderCart.module.css'

const HeaderCart = props => {
  
  const cartContext = useContext(CartContext)

  return (
    <button className={classes.button} onClick={props.onClick}>
          <span className={classes.icon}>
          <i className="fa-solid fa-cart-plus fa-lg"></i>
          </span>
          <span>Shopping Cart</span>
          <span className={classes.badge}>{cartContext.items.length}</span>
    </button>
  )
}

export default HeaderCart