import darkLogo from "../assets/logo-light(2).png";

const HomePage = () => {
  return (
    <section id="landing">
      <div class="container">
        <div class="row">
          <div class="landing__content">
            <img src={darkLogo} alt="Next Flick Logo" class="landing__logo" />
            <div class="landing__search">
              <input
                type="text"
                placeholder="Search movies..."
                class="landing__search--input"
              ></input>
              <button
                class="landing__search--btn"
                onclick="handleSearch(event)"
              >
                <i class="fa solid fa-magnifying-glass"></i>
              </button>
            </div>
            <h3 class="landing__description">
              <span class="crimson">Discover, search, and explore</span>{" "}
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
