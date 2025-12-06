import { Link } from "react-router-dom";
import "./Header.css";
import { CartContext } from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";

const Header = () => {
  const {cartItems} = useContext(CartContext)
  const cartCount = cartItems.reduce((sum, item)=>sum + item.quantity, 0)

  // dark mode state - initialize from localStorage
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem('dark') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    // add / remove class on document body so CSS can toggle appearance
    if (dark) document.body.classList.add('dark-mode');
    else document.body.classList.remove('dark-mode');
    try { localStorage.setItem('dark', dark ? 'true' : 'false'); } catch {}
  }, [dark]);

  return (
    <header className="header">
      <Link to='/' className="logo">SteamDB</Link>
      <nav className="nav-links">
        <button
          className={"theme-toggle" + (dark ? ' active' : '')}
          aria-pressed={dark}
          title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={() => setDark(d => !d)}
        >
          {dark ? 'Light' : 'Dark'}
        </button>
        <Link to="/">Home</Link>
        <div className="cart-link">
          <Link to="/cart">Wishlist</Link>
          {cartCount>0 && (<span className="cart-badge">{cartCount}</span>)}
        </div>

    

        {/* <Link to="/payment">Payment</Link> */}
      </nav>
    </header>
  );
};

export default Header;
