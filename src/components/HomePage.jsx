"use client";

import Image from "next/image";
import LightLogo from "../assets/logo-light(2).png";

const HomePage = () => {
  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="landing__content">
            <Image src={LightLogo} alt="Next Flick Logo" className="landing__logo" />
            <div className="landing__search">
              <input
                type="text"
                placeholder="Search movies..."
                className="landing__search--input"
              ></input>
              <button
                className="landing__search--btn"
                onClick={console.log("handleSearch(event)")}
              >
                <i className="fa solid fa-magnifying-glass"></i>
              </button>
            </div>
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
};

export default HomePage;
