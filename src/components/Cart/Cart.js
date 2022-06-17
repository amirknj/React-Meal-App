import React,{useContext} from 'react'
import CartContext from '../../context/cart-context'
import Modal from '../UI/Modal'
import classes from "./Cart.module.css"
import CartItem from './CartItem'

const Cart = props => {
  
  const cartContext = useContext(CartContext)  

  const cartItems = 
      <ul className={classes["cart-items"]}>
          { cartContext.items.map(item => 
            <CartItem 
                key={item.id}
                item={item}
            />
          )} 
      </ul>
    

  return (
    <Modal onClick={props.onHideCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>${cartContext.totalAmount.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes["btn--alt"]} onClick={props.onHideCart}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart