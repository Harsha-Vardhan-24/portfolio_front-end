import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState(undefined);

  const fetchData = async () => {
    try {
      const apiCall = await fetch(
        "https://harshavardhan-24-backend.onrender.com/"
      );
      const data = await apiCall.json();
      setProjects(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const projectsData =
    projects !== undefined &&
    projects.map((project) => {
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
      <h2>Check Out My Crafted Projects.</h2>
      <section className="projects-section">
        {projectsData ? projectsData : <p>Loading...</p>}
      </section>
    </>
  );
}
