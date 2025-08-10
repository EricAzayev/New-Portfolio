import React from "react";

const Project = ({ title, date, description, links }) => {
  return (
    <div className="project">
      <div className="heading">
        <h6 className="date">{date}</h6>
        <h5 className="title">{title}</h5>
      </div>
      <p className="description">{description}</p>
      <div className="links">
        {links.github && (
          <div>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="doc-link"
            >
              GitHub <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
        )}
        {links.demo && (
          <div>
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="doc-link"
            >
              Demo <ion-icon name="link-outline"></ion-icon>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
