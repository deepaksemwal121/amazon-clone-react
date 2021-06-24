import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/31/INAssociates/2016/June/AIP_GetStarted._CB459521907_._SL1280_FMjpg_.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/*Basket */}
          {/*Basket */}
          {/*Basket */}
          {/*Basket */}
          {/*Basket */}
          {/*Basket */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
