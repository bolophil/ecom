import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import handleCart from '../redux/reducer/handleCart';
import { delCart, addCart, delAllCart } from '../redux/action';
import { NavLink } from "react-router-dom";


export default function Cart() {
    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch();
    const handleClose = (item) => {
        dispatch(delAllCart(item));
    }

    const cartItems = (cartItem) =>{
        return(
            <div className="px-4 bg-light rounded-3 py-3" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={() => handleClose(cartItem)} className="btn-close float-end" aria-label="Close"> </button>
                    <div className="row justify-conten-center">
                        <div className="col-md-4">
                            <img className='card-img-top' src={cartItem.image} alt={cartItem.title} height="300px" width="180px"/>
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold">{cartItem.qty} X ${cartItem.price} = ${cartItem.qty*cartItem.price}</p>
                            <button className="btn btn-outline-dark me-4" 
                            onClick={()=> dispatch(delCart(cartItem))}>
                                <i className='fa fa-minus'></i>
                            </button>
                            <button className="btn btn-outline-dark me-4" 
                            onClick={()=> dispatch(addCart(cartItem))}>
                                <i className='fa fa-plus'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    const emptyCart = () => {
        return (
            <div className="px-4 bg-light rounded-3">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                        <NavLink to="/products" type="button" className="btn btn-lg btn-success ms-2 m-5">
                            CONTINUE SHOPPING
                         </NavLink> 
                    </div>
                </div>
            </div>
        )
    }
    const button = () => {
        return(
            <div className="container">
                <div className="row">
                    <NavLink className="btn btn-outline-primary mb-5 w-25" to="/checkout">Process to checkout</NavLink>
                </div>
            </div>
        );
    }
  return (
    <div>
        {state.length ===0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)};
        {state.length !== 0 && button()};
        
    </div>
  )
}
