import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import About from "./AboutUs";
import Order from "./Order";
import NonVeg from "./NonVeg";
import ContactUs from "./ContactUs";
import Cart from "./Cart";

import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import NotFound from "./NotFound";
import Milk from "./Milk";
import Login from "./Login";
import { logout } from "./store";

function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const dispatch =useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  

  return (
    <BrowserRouter>
      {/* Navigation Bar (Fixed at Top) */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/veg">Veg</Link>
        <Link to="/nonveg">Nonveg</Link>
        <Link to="/about">About</Link>
        <Link to="/order">Order</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart" className={totalItems > 0 ? "cart" : ""} data-cart={totalItems > 0 ? totalItems : ''}>Cart ({totalItems})</Link>
        <Link to="/milk">Milk</Link>
        {isAuthenticated?<>
        <span  className="welcome-message">Welcome,{user}</span>
        <button onClick={() => dispatch(logout())} className="logout-btn">
  🔒 Logout
</button>

        </>
       : <Link to="/login">Login</Link>
}
      </nav>

      {/* Page Content (Starts Below Navbar) */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
