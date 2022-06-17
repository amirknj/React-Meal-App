import React,{useReducer} from 'react'
import CartContext from './cart-context'


const cartReducer = (state,action) => {
    if(action.type === 'ADD'){
        // const updateItem = state.item.concat(action.item)
        const updateAmount = state.totalAmount + (action.item.price * action.item.amount)
        let updatedItems
        
        const existingIndex = state.item.findIndex(item => {
            return item.id === action.item.id
        })

        const existingItem = state.item[existingIndex] 
        if(existingItem){

            const updatedItem = {
                ...existingItem,
                amount : existingItem.amount + action.item.amount
            }
            updatedItems = [...state.item]  //cause change reference
            updatedItems[existingIndex] = updatedItem
            
        }else{
            updatedItems = state.item.concat(action.item)
        }
        return {
            // dispatcher miyad cartState ro ba in 2ta update mikone
            item : updatedItems,
            totalAmount : updateAmount
        }
    }else if(action.type === 'REMOVE'){
        
        const existingIndex = state.item.findIndex(item =>  item.id === action.id)
        const existingItem = state.item[existingIndex]
        const updateAmount = +state.totalAmount - +existingItem.price

        let updatedItems
        if(+existingItem.amount === 1){
            updatedItems = state.item.filter(item => item.id !== action.id)
        }else{
            const updatedItem ={...existingItem, amount: +existingItem.amount - 1 }
            updatedItems = [...state.item]
            updatedItems[existingIndex] = updatedItem 
        }
        return {
            item : updatedItems,
            totalAmount : updateAmount 
        }
        
    }
}
const CartProvider = props => {

    const [cartState, dispatchCartState] = useReducer(cartReducer,{item:[], totalAmount:0})
    
    const addToCartHandler = item => {
        dispatchCartState({type : 'ADD', item : item})
        console.log(item);
    }

    const removeFromCartHandler = id =>{
        dispatchCartState({type : 'REMOVE', id : id})
    }

    const cnxValue = {
        items : cartState.item,
        totalAmount : cartState.totalAmount,
        addItem : addToCartHandler,
        removeItem : removeFromCartHandler
    }

    return (
        <CartContext.Provider value={cnxValue}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider