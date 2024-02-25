import React from "react";
import "./../Carts/Cart.css";
import left from "./../../Assets/left-arrow.png";
import cartimg1 from './../../Assets/cartImg1.png';
import cartimg2 from './../../Assets/cartImg2.png';
import cartimg3 from './../../Assets/cartImg3.png';
import { useEffect, useState } from 'react';
import dlt from './../../Assets/delete.png';


function Cart() {
    const [count, setCount] = useState(0);

const [name, setName] = useState("");


  
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = ()=>{
    setCount(prevCount=> prevCount - 1);
  }


console.log(setName)
console.log(name)


  return (
    <>
      <div className="cart-top">
        <div className="title">
          <h4>Home</h4>
          <img src={left} alt="" />
          <h4>AddToCart</h4>
        </div>
        <p>
          Please fill in the fields below and click place order to complete your
          purchase! <br />
          Already registered?{" "}
          <span style={{ color: "#8A33FD" }}> Please login here.</span>
        </p>
      </div>
      <div className="cart-container">
      <div className="cart-header">
        <h3>Product Details</h3>
        <div className="cart-title">
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>shipping</h3>
        <h3>subtotal</h3>
        <h3>action</h3>
        </div>
      </div>
      <div className="cart-content">
        <img src={cartimg3}/>
        <div className="cart-main">
        <label>$29.00</label>
        <div>
        <button onClick={increment}>+</button>
        1
        <button onClick={decrement}>-</button>
        </div>
        <label>FREE</label>
        <label>$29.00</label>
        <div>
        <img src={dlt}/>
        </div>
        </div>
       
        </div>
        {/* cart 2 */}
        <div className="cart-content">
        <img src={cartimg1}/>
        <div className="cart-main">
        <label>$29.00</label>
        <div>
        <button onClick={increment}>+</button>
        2
        <button onClick={decrement}>-</button>
        </div>
        <label>FREE</label>
        <label>$29.00</label>
        <div>
        <img src={dlt}/>
        </div>
        </div>
       {/* cart 3 */}
        </div>
        <div className="cart-content">
        <img src={cartimg2}/>
        <div className="cart-main">
        <label>$29.00</label>
        <div>
        <button onClick={increment}>+</button>
        2
        <button onClick={decrement}>-</button>
        </div>
        <label>FREE</label>
        <label>$29.00</label>
        <div>
        <img src={dlt}/>
        </div>
        </div>
       
        </div>
        </div>
        <div className="total-container">
        <div className="total-left">
            <h3>Discount Codes</h3>
            <p>Enter your coupon code if you have one</p>
            <div className="coupon-inbox">
            <input type="text" /> 
            <a>Apply Coupon</a>
            </div>
            <div>
            <button>Continue Shopping</button>
            </div>
        </div>
        <div className="total-right">
            <div className="total-title">
            <label>Sub Total</label>
            <p>$513.00</p>
            </div>
            <div className="total-title">
            <label>Shipping</label>
            <p>$5.00</p>
            </div>
            <div className="total-title">
            <label>Grand Total</label>
            <p>$518.00</p>
            </div>
            <button>Proceed To Checkout</button>
        </div>
        </div>




    </>
  );
}

export default Cart;
