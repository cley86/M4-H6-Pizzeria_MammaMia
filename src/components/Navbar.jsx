import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart, total } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          🍕 Pizzería Mamma Mía
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                🔓 Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                🔒 Logout
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                🔐 Registrarse
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                🔐 Iniciar Sesión
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                🛒 Carrito ({cart.reduce((acc, item) => acc + item.quantity, 0)}
                ) - $ {total.toLocaleString()}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
