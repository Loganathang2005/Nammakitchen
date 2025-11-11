import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="logo">
            <span role="img" aria-label="food">🍴</span> Namma <strong>Kitchen</strong>
          </h1>

          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? "✖" : "☰"}
          </div>

          <ul className="nav-links-desktop">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/combo">ComboItems</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          {user ? (
            <div className="user-section">
              <span>Hi, {user.username}</span>
              <button onClick={logout} className="logout-btn">Logout</button>
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/login" className="login-btn">Login</Link>
              <Link to="/register" className="register-btn">Register</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu below Navbar */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/menu" onClick={toggleMenu}>Menu</Link>
          <Link to="/combo" onClick={toggleMenu}>ComboItems</Link>
          <Link to="/cart" onClick={toggleMenu}>Cart</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>

          {user ? (
            <button onClick={() => { logout(); toggleMenu(); }} className="logout-btn-mobile">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" onClick={toggleMenu}>Login</Link>
              <Link to="/register" onClick={toggleMenu}>Register</Link>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
