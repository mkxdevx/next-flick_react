import Image from "next/image";
import LightLogo from "../assets/logo-light(2).png";
import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="landing__content">
            <Image
              src={LightLogo}
              alt="Next Flick Logo"
              className="landing__logo"
              quality={75}
            />
            <SearchForm
              formClassName="landing__search"
              placeholder="Search movies..."
              buttonClassName="landing__search--btn"
              inputClassName="landing__search--input"
            />
            <h3 className="landing__description">
              <span className="crimson">Discover, search, and explore</span>{" "}
              thousands of films tailored to your taste—all in one sleek,
              user-friendly platform.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
