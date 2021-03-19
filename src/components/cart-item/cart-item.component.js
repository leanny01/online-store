import React from "react";
import "./cart-item.style.scss";

const CartItem = ({ cartItem: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt={name} />
    <div className="item-details">{name}</div>
    <div className="price">
      {quantity} x ${price}
    </div>
  </div>
);

export default CartItem;
