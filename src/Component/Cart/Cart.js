import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)
    let totalsellary=0;

    for (let i = 0; i < cart.length; i++) {
        const amount = cart[i];
        totalsellary= totalsellary+amount.sellary;
        
    }
    const tax = totalsellary /10 ;
    return (
        <div className="cart">
            <h3>AddFriend: {cart.length}</h3>
            <h4>Sellary: ${totalsellary}</h4>
            <h4>Gov't Tax: ${tax}</h4>

           <h2>Final-Sellary: ${totalsellary-tax}</h2>
        </div>
    );
};

export default Cart;