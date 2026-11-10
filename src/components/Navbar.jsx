import Link from "next/link";
import smallLightLogo from "../assets/logo-light(1)-1.png";
import Image from "next/image";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__content">
        <figure className="nav__logo--wrapper">
          <Image
            src={smallLightLogo}
            alt="Small Next Flick Logo"
            className="nav__logo--img"
            quality={75}
          />
          <h2 className="nav__logo--name">
            Next<span className="crimson">Flick</span>
          </h2>
        </figure>
        <div className="nav__link--list">
          <Link href="/" className="nav__link">
            Home
          </Link>
          <Link href="/browse" className="nav__link">
            Browse
          </Link>
          <Link href="/search" className="nav__link nav__link--primary">
            Search movies
          </Link>
        </div>
        <NavbarMenu />
      </div>
    </nav>
  );
};

export default Navbar;
