import React from 'react'
import ReactDOM  from 'react-dom'
import classes from "./Modal.module.css"


const Backdrop = props => {
    document.documentElement.addEventListener('keydown',function(event){
        if(event.key === 'Escape'){
            props.onClose()
        } 
    })
    
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = props => {

    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
            <hr></hr>
        </div>
    )

}

const Modal = props => {
    const modalRoot = document.getElementById("overlays")

    return (
        <>
          {ReactDOM.createPortal(<Backdrop onClose={props.onClick}/>, modalRoot)}
          {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, modalRoot)}
        </>
    )
}

export default Modal