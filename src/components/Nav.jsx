import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <header>
      <nav>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          🏠Home
        </Link>
        <Link to="/contact" style={{ textDecoration: "none", color: "white" }}>
          📒Contacto
        </Link>
      </nav>
      <div>
        <p>Happy Cake🍰</p>
      </div>
    </header>
  );
}

export default Nav;
