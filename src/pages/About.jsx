import React from "react";
import picture from "../../images/profilePic.jpeg";
import Resume from "../public/Harsha_Vardhan_Resume.pdf";

export default function About() {
  return (
    <>
      <section className="about">
        <div className="about-section">
          <img
            className="profile-img"
            src={picture}
            alt="harsha vardhan picture"
          />
          <p className="about-text">
            As a self-taught full-stack web developer hailing from Hyderabad, I
            am passionate about crafting exceptional online experiences. With a
            relentless pursuit of simplicity, I thrive on delivering
            user-friendly solutions. I am dedicated to staying up-to-date with
            the latest security measures and industry best practices, ensuring
            the utmost quality and reliability in every project. Through my
            continuous quest for knowledge, I have completed multiple courses
            and obtained a range of certifications in web development, equipping
            me with a diverse skill set to tackle any challenge that comes my
            way.
          </p>
        </div>
        <div className="about-skills">
          <h1>My skills</h1>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Bootstrap</li>
            <li>Node</li>
            <li>Express.</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>Firebase</li>
            <li>Git</li>
          </ul>
        </div>

        <div className="about-links">
          <button className="button-links">
            <a href={Resume} className="download-btn" download>
              Resume
            </a>
          </button>
          <button
            onClick={() => {
              window.location = "mailto:javvajiharshavardhan.24@gmail.com";
            }}
            className="button-links"
          >
            Email Me
          </button>
        </div>
      </section>
    </>
  );
}
