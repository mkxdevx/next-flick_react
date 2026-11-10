"use client";
import { useState } from "react";
import Link from "next/link";

const NavbarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <>
      <button
        className="menu__btn menu__btn--open"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className={`nav__overlay ${isMenuOpen ? "nav__overlay--open" : ""}`}>
        <button
          className="menu__btn menu__btn--close"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="nav__overlay--list">
            <Link
              href="/"
              className="nav__overlay--link"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          <Link
            href="/search"
            className="nav__overlay--link"
            onClick={() => setIsMenuOpen(false)}
          >
            Find your movie
          </Link>
          <Link
            href="/browse"
            className="nav__overlay--link"
            onClick={() => setIsMenuOpen(false)}
          >
            Browse
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavbarMenu