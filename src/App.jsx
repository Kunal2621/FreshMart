import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import About from "./AboutUs";
import Order from "./Order";
import NonVeg from "./NonVeg";
import ContactUs from "./ContactUs";
import Cart from "./Cart";
import Milk from "./Milk";
import Login from "./Login";
import NotFound from "./NotFound";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./store";
import { useState } from "react";
import "./App.css";
import { FaBars, FaTimes, FaShoppingCart, FaSignOutAlt, FaUser, FaHome, FaLeaf, FaDrumstickBite, FaInfoCircle, FaClipboardList, FaPhone } from "react-icons/fa";
import RegistrationForm from "./RegistrationForm";
import Admin from './Admin';


function App() {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      <nav>
        <h2 className="logo">Fresh Mart</h2>

        {/* Desktop & Mobile Navigation */}
        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <FaHome /> Home
          </Link>
          <Link to="/veg" onClick={() => setMenuOpen(false)}>
            <FaLeaf /> Veg
          </Link>
          <Link to="/nonveg" onClick={() => setMenuOpen(false)}>
            <FaDrumstickBite /> Nonveg
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            <FaInfoCircle /> About
          </Link>
          <Link to="/order" onClick={() => setMenuOpen(false)}>
            <FaClipboardList /> Order
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <FaPhone /> Contact
          </Link>
          <Link to="/cart" className={totalItems > 0 ? "cart" : ""} data-cart={totalItems > 0 ? totalItems : ''}>
            <FaShoppingCart /> Cart ({totalItems})
          </Link>
          <Link to="/milk" onClick={() => setMenuOpen(false)}>🥛 Milk</Link>

          {isAuthenticated ? (
            <>
              <span className="welcome-message">
                <FaUser /> Welcome, {user}
              </span>
              <button onClick={() => dispatch(logout())} className="logout-btn">
                <FaSignOutAlt /> Logout
              </button>
            </>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <FaUser /> Login
            </Link>
          )}
        </div>

        {/* Three-dot menu button for mobile */}
        <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Page Content */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
