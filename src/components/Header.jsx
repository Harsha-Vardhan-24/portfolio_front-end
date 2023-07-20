import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/" className="nav-buttons">
          HV.
        </Link>
      </h1>
      <nav>
        <button>
          <Link to="/about" className="nav-buttons">
            About Me
          </Link>
        </button>
        <button>
          <Link to="/projects" className="nav-buttons">
            Projects
          </Link>
        </button>
        <button>
          <Link to="/contact" className="nav-buttons">
            Contact
          </Link>
        </button>
      </nav>
    </header>
  );
}
