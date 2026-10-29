"use client";

import { useState } from "react";
import Link from "next/link";
import smallLightLogo from "../assets/logo-light(1)-1.png";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav__content">
        <figure className="nav__logo--wrapper">
          <Image
            src={smallLightLogo}
            alt="Small Next Flick Logo"
            className="nav__logo--img"
          />
          <h2 className="nav__logo--name">
            Next<span className="crimson">Flick</span>
          </h2>
        </figure>
        <ul className="nav__link--list">
          <li>
            <Link href="/" className="nav__link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/search" className="nav__link">
              Find your movie
            </Link>
          </li>
          <li>
            <Link href="/browse" className="nav__link nav__link--primary">
              Browse
            </Link>
          </li>
        </ul>
        <button
          className="menu__btn menu__btn--open"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <div className={`nav__overlay ${isMenuOpen ? "nav__overlay--open" : ""}`}>
        <button
          className="menu__btn menu__btn--close"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <ul className="nav__overlay--list">
          <li>
            <Link
              href="/"
              className="nav__overlay--link"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/search"
              className="nav__overlay--link"
              onClick={() => setIsMenuOpen(false)}
            >
              Find your movie
            </Link>
          </li>
          <li>
            <Link
              href="/browse"
              className="nav__overlay--link"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
