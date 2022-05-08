import React, { useState, useEffect } from "react";

import "./Navigation.scss";

import NavButton from "../../assets/icon-hamburger.svg";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);



  return (
    <nav className="nav-container">
      <p className="logo">sunnyside</p>
      <ul className="nav-links">
        <li className="nav-link">
          {" "}
          <a href="#">About</a>
        </li>
        <li className="nav-link">
          {" "}
          <a href="#">Services</a>
        </li>
        <li className="nav-link">
          {" "}
          <a href="#">Projects</a>
        </li>
        <li className="nav-link nav-link--custom">
          {" "}
          <a href="#">Contact</a>
        </li>
      </ul>
      <button className="nav-button" onClick={menuToggleHandler}>
        <img src={NavButton} alt="" />
      </button>
      {menuOpen && (
        <ul className="nav-links--mobile">
          <li className="nav-link">
            {" "}
            <a href="#">About</a>
          </li>
          <li className="nav-link">
            {" "}
            <a href="#">Services</a>
          </li>
          <li className="nav-link">
            {" "}
            <a href="#">Projects</a>
          </li>
          <li className="nav-link nav-link--custom">
            {" "}
            <a href="#">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
