import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="container-fluid flex-grow-1 p-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
