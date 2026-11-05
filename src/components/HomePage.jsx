"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LightLogo from "../assets/logo-light(2).png";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleSearch = (event) => {
    event.preventDefault();
    router.push(`/search?query=${encodeURIComponent(query)}`);
  };
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
            <form className="landing__search" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search movies..."
                className="landing__search--input"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              ></input>
              <button className="landing__search--btn">
                <i className="fa solid fa-magnifying-glass"></i>
              </button>
            </form>
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
