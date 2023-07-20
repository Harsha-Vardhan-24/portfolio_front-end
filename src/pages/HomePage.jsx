import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Resume from "../public/Harsha_Vardhan_Resume.pdf";

export default function App() {
  const [recentProjects, setRecentProjects] = useState(undefined);

  const fetchData = async () => {
    try {
      const apiCall = await fetch(
        "https://harshavardhan-24-backend.onrender.com/recent-projects"
      );
      const data = await apiCall.json();
      setRecentProjects(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const projectsData =
    recentProjects !== undefined &&
    recentProjects.map((project) => {
      const { name, description, link, stack, _id } = project;
      return (
        <div className="project-tile" key={_id}>
          <h2>{name}</h2>
          <h3>Stack used:</h3>
          <ul className="skills">
            {stack.map((skill) => {
              return <li key={skill}>{skill}</li>;
            })}
          </ul>
          <p>{description}</p>
          <button className="button-links">
            <Link target="_blank" className="portfolio-link" to={link}>
              Link
            </Link>
          </button>
        </div>
      );
    });

  return (
    <>
      <div className="main-text-area">
        <h1>Hello 👋</h1>
        <h1>I'm Harsha Vardhan 👨‍💻</h1>
        <h1>
          Crafting seamless digital experiences from front-end to back-end.
        </h1>
      </div>
      <h4>Full-stack web developer, Based in Hyderabad.</h4>
      <div className="button-links-area">
        <a href={Resume} className="button-links" download>
          Resume
        </a>
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
          onClick={() => {
            window.location = "mailto:javvajiharshavardhan.24@gmail.com";
          }}
          className="button-links"
        >
          Email
        </Link>
      </div>
      <div className="recent-projects-section">
        <h1>Here are recent projects that I have crafted</h1>
        <section className="recent-projects">
          {projectsData ? projectsData : <p>Loading...</p>}
        </section>
      </div>
    </>
  );
}
