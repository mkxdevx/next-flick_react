import { useState } from 'react'
import { Link } from 'react-router-dom'
import smallDarkLogo from '../assets/logo-light(1)-1.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav>
      <div className="nav__content">
        <figure className="nav__logo--wrapper">
          <img src={smallDarkLogo} alt="Small Next Flick Logo" className="nav__logo--img" />
          <h2 className="nav__logo--name">
            Next<span className="crimson">Flick</span>
          </h2>
        </figure>
        <ul className="nav__link--list">
          <li>
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/search" className="nav__link">
              Find your movie
            </Link>
          </li>
          <li>
            <Link to="/browse" className="nav__link nav__link--primary">
              Browse
            </Link>
          </li>
        </ul>
        <button
          className="menu__btn menu__btn--open"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <div className={`nav__overlay${menuOpen ? ' nav__overlay--open' : ''}`}>
        <button
          className="menu__btn menu__btn--close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <ul className="nav__overlay--list">
          <li>
            <Link to="/" className="nav__overlay--link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/search"
              className="nav__overlay--link"
              onClick={closeMenu}
            >
              Find your movie
            </Link>
          </li>
          <li>
            <Link to="/browse" className="nav__overlay--link" onClick={closeMenu}>
              Browse
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
