import Link from "next/link";
import smallLightLogo from "../assets/logo-light(1)-1.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer__links">
            <Link href="/" className="footer__link">
              Home
            </Link>
            <Link href="/browse" className="footer__link">
              Browse
            </Link>
            <Link href="/" className="footer__link">
              About
            </Link>
            <Link href="/" className="footer__link">
              API
            </Link>
            <Link href="/" className="footer__link">
              Support
            </Link>
            <Link href="/" className="footer__link">
              Privacy Policy
            </Link>
            <Link href="/" className="footer__link">
              Terms of Service
            </Link>
          </div>
          <div className="footer__bottom">
            <Image
              src={smallLightLogo}
              alt="Small Next Flick Logo"
              className="footer__logo"
            />
            <div className="footer__socials">
              <Link href="#" className="footer__social">
                GitHub
              </Link>
              <Link href="#" className="footer__social">
                LinkedIn
              </Link>
            </div>
            <p className="footer__copyright">
              &copy; 2026 NextFlick | Mikayla Esparza
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
