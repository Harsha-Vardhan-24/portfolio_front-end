import React from "react";
import { Link } from "react-router-dom";
import Resume from "../public/Harsha_Vardhan_Resume.pdf";

export default function Contact() {
  return (
    <section>
      <h2>
        If you're captivated by my work and eager to collaborate or simply
        engage in a friendly conversation, <br /> You can find me on these
        social platforms:
      </h2>
      <div className="button-links-area">
        <a href={Resume} className="button-links" download>
          Resume
        </a>
        <Link
          onClick={() => {
            window.location = "mailto:javvajiharshavardhan.24@gmail.com";
          }}
          className="button-links"
        >
          Email
        </Link>
        <Link
          target="_blank"
          to="https://www.linkedin.com/in/harsha-vardhan-8511721b2/"
          className="button-links"
        >
          LinkedIn
        </Link>
        <Link
          target="_blank"
          to="https://github.com/Harsha-Vardhan-24"
          className="button-links"
        >
          Github
        </Link>
        <Link
          target="_blank"
          to="https://www.instagram.com/harshavardhan.24/"
          className="button-links"
        >
          Instagram
        </Link>
        <Link
          target="_blank"
          to="https://twitter.com/harshavardh_a_n"
          className="button-links"
        >
          Twitter
        </Link>
        <Link
          target="_blank"
          to="https://www.reddit.com/user/coding_owl"
          className="button-links"
        >
          Reddit
        </Link>
      </div>
    </section>
  );
}
