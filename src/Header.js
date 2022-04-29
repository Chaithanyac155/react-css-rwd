import React, { useState } from "react";
import Home from "./Home";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <header className="header sticky">
        <a
          href="#"
          aria-label="Healthify"
          tabIndex="0"
          className="main-nav-link"
          style={{ fontWeight: "600" }}
          onClick={() => setClicked(false)}
        >
          Healthify<span style={{ color: "red" }}>Me</span>
        </a>
        <nav>
          <ul
            className={`main-nav ${
              clicked ? "main-nav-list" : "main-nav-list close"
            }`}
          >
            <li>
              <a
                href="#home"
                aria-label="home"
                className="main-nav-link"
                onClick={handleClick}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                aria-label="about"
                className="main-nav-link"
                onClick={handleClick}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                aria-label="contact"
                className="main-nav-link"
                onClick={handleClick}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#learn"
                aria-label="learn"
                className="main-nav-link"
                onClick={handleClick}
              >
                Learn
              </a>
            </li>
          </ul>
        </nav>
        <div
          className="menu-icon"
          tabIndex="1"
          onClick={handleClick}
          aria-label="menu-icon"
        >
          {/* <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i> */}
          <div className={clicked ? "cross" : "bars"}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      <main>
        <section id="home">
          <Home />
        </section>
      </main>
      <footer>copyrights@2022</footer>
    </>
  );
};

export default Header;
