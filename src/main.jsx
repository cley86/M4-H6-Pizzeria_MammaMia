import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

// Importar los Providers
import { CartProvider } from "./context/CartContext";
import { PizzaProvider } from "./context/PizzaContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <PizzaProvider>
        <App />
      </PizzaProvider>
    </CartProvider>
  </StrictMode>
);
