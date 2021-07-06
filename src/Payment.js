import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          {" "}
          Checkout{" "}
          {
            <Link style={{ textDecoration: "none" }} to="/checkout">
              {basket?.length} items
            </Link>
          }
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p className="user__name">Deepak Semwal</p>
            <p>{user?.email}</p>
            <p>123 Sumannagar Dharampur,248001</p>
            <p>Dehradun Uttrakhand</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3> Review items and delievery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3> Payment Methods</h3>
          </div>
        </div>
        <div className="payment__details"></div>
      </div>
    </div>
  );
}

export default Payment;
