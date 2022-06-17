import React,{useContext} from 'react'
import CartContext from '../../context/cart-context'
import "./CartItem.module.css"

const CartItem = props => {

    const cartContext = useContext(CartContext)  

    const cartRemoveHandler = () =>{
        cartContext.removeItem(props.item.id)
    }
    
    const addToCartHandler = () => {
        cartContext.addItem({...props.item,amount:1})
    }


    return (
        <>
        <li> 
            <div>
                <p>{props.item.name} : {props.item.amount}</p>    
            </div>
            <div>
                <button onClick={cartRemoveHandler}>remove</button>
                <button onClick={addToCartHandler}>add</button>
            </div>
        </li>
        <hr />
        </>
    )
}

export default CartItem