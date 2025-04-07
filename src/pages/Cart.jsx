import React from "react";
import "../styles/Cart.css";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removePizza,
    total,
  } = useCart();

  return (
    <div className="cart">
      <h2>Detalles del pedido:</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.img} alt={item.name} />
            <span className="name">{item.name}</span>
            <span className="price">${item.price.toLocaleString()}</span>
            <div className="quantity-controls">
              <button
                className="decrease"
                onClick={() => decreaseQuantity(item.id)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="increase"
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </button>
            </div>
            <button className="remove" onClick={() => removePizza(item.id)}>
              🗑
            </button>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <>
          <h3>Total: ${total.toLocaleString()}</h3>
          <button className="pay-button">Pagar</button>
        </>
      )}
    </div>
  );
};

export default Cart;
