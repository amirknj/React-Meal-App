import React,{useState} from "react"
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from "./context/CartProvider";

function App() {
  const [showCart,setShowCart] = useState(false)

  const showCartHandler = () => {
     setShowCart(true)
  }

  const hideCartHandler = () => {
    setShowCart(false)
  }

  return (
    <CartProvider>
      {showCart && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
          <Meals />
      </main>
    </CartProvider>
  )
}

export default App;
