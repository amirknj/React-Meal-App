import React from 'react'
import HeaderCart from './HeaderCart'
import classes from "./Header.module.css"
import HeaderImage from "../../assets/meals.jpg"

const Header = props => {
    
  return (
    <>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCart onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={HeaderImage} alt="Table" />
        </div>
    </>
  )
}

export default Header