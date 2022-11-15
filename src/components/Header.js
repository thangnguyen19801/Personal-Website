import "./Header.css";
import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Header(props) {
  const navLinks = [
    { label: "Home" },
    { label: "About" },
    { label: "Contact" },
  ];
  const handleClick = (event, key) => {
    props.refe[key].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between align-middle mt-0">
          <Link to="/" className="logo">
            <h1
              className="navbar-brand p-0 m-0 text-light border border-success border-3 rounded p-"
              onClick={() => window.scrollTo({ top: 0 })}
            >
              MyBlog
            </h1>
          </Link>
          <div className="menu me-5">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navLinks.map((link, index) => (
                <li
                  className="nav-item px-2"
                  key={index}
                  onClick={(event) => handleClick(event, index)}
                >
                  <Link className="nav-link text-light text-uppercase px-3">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </Router>
  );
}

export default Header;
