const Navbar = () => {
  return (
    <nav>
      <div class="nav__content">
        <figure class="nav__logo--wrapper">
          <img src="./assets/logo-light(1).png" alt="" class="nav__logo--img" />
          <h2 class="nav__logo--name">
            Next<span class="crimson">Flick</span>
          </h2>
        </figure>
        <ul class="nav__link--list">
          <li>
            <a href="./index.html" className="nav__link">
              Home
            </a>
          </li>
          <li>
            <a href="./search.html" className="nav__link">
              Find your movie
            </a>
          </li>
          <li>
            <a href="./search.html" className="nav__link nav__link--primary">
              Browse
            </a>
          </li>
        </ul>
        <button className="menu__btn menu__btn--open" onClick={openMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <div className="nav__overlay">
        <div className="menu__btn menu__btn--close" onClick={closeMenu}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <ul className="nav__overlay--list">
          <li>
            <a
              href="./index.html"
              className="nav__overlay--link"
              onClick={closeMenu} 
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="./search.html"
              class="nav__overlay--link"
              onclick="closeMenu()"
            >
              Find your movie
            </a>
          </li>
          <li>
            <a href="./search.html" className="nav__overlay--link">
              Browse
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
