import smallDarkLogo from '../assets/logo-light(1)-1.png'

const Footer = () => {
  return (
    <footer>
        <div class="container">
            <div class="row">
                <div class="footer__links">
                    <a href="./index.html" class="footer__link">Home</a>
                    <a href="./search.html" class="footer__link">Browse</a>
                    <a href="#" class="footer__link">About</a>
                    <a href="#" class="footer__link">API</a>
                    <a href="#" class="footer__link">Contact</a>
                    <a href="#" class="footer__link">Support</a>
                    <a href="#" class="footer__link">Privacy Policy</a>
                    <a href="#" class="footer__link">Terms of Service</a>
                </div>
                <div class="footer__bottom">
                    <img src={smallDarkLogo} alt="Small Next Flick Logo" class="footer__logo" />
                    <div class="footer__socials">
                        <a href="#" class="footer__social">GitHub</a>
                        <a href="#" class="footer__social">LinkedIn</a>
                    </div>
                    <p class="footer__copyright">
                        &copy; 2026 NextFlick | Mikayla Esparza
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer