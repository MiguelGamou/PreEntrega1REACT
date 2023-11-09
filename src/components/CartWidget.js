import React from 'react';
import cartImage from './carrito.png';
import '../CartWidget.css' 

const CartWidget = () => {
  const itemsInCart = 5;
  
  return (
    <div className="cart-widget">
      <img src={cartImage} alt="Cart" className="cart-icon" />
      <span className="cart-badge">{itemsInCart}</span>
    </div>
  );
}

export default CartWidget;
