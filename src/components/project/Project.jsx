import React from "react";
import "./project.css";
import cover1 from "../../assets/project-1-Screenshot 2024-11-04 214113.png";
import cover2 from "../../assets/project-2-Screenshot 2024-11-04 213740.png";
import cover3 from "../../assets/project-3-chrome_xT2LYoRyZr.gif";
import cover4 from "../../assets/project-4-367958365-69bab77f-106f-4856-8b0d-15c6110f5ef2.png";
import cover5 from "../../assets/project-5-Screenshot 2024-11-05 122830.png";
import cover6 from "../../assets/project-6-Screenshot 2024-11-05 123436.png";

const data = [
  {
    id: 1,
    image: cover1,
    title: "Readme Markdown Generator",
    github: "https://github.com/skylark-shae/07-Project-readme",
    site: "https://github.com/skylark-shae/07-Project-readme",
  },
  {
    id: 2,
    image: cover2,
    title: "SQL Employee Tracker",
    github: "https://github.com/skylark-shae/10_SQL_skylark-employee-tracker",
    site: "https://github.com/skylark-shae/10_SQL_skylark-employee-tracker",
  },
  {
    id: 3,
    image: cover3,
    title: "Early Portfolio",
    github: "https://github.com/skylark-shae/Portfolio",
    site: "https://skylark-shae.github.io/Portfolio/",
  },
  {
    id: 4,
    image: cover4,
    title: "My Recipe Book: Group Project",
    github: "https://github.com/Petrichor4/my-recipe-book?tab=readme-ov-file",
    site: "https://petrichor4.github.io/my-recipe-book/",
  },
  {
    id: 5,
    image: cover5,
    title: "Bucket List: Bootcamp Mini-Project",
    github: "https://skylark-shae.github.io/bucket-list/",
    site: "https://skylark-shae.github.io/bucket-list/",
  },
  {
    id: 6,
    image: cover6,
    title: "Vehicle Builder Command Line Application",
    github: "https://github.com/skylark-shae/08-TypeScript-and-OOP",
    site: "https://github.com/skylark-shae/08-TypeScript-and-OOP",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio and Group Projects</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, site }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank" rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={site}
                  className="btn btn-primary"
                  target="_blank" rel="noopener noreferrer"
                >
                  Live Site
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
