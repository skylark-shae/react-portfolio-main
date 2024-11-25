import "./experience.css";
import { FaCheckCircle } from "react-icons/fa";

function Experience() {
  return (
    <section id="experience">
      <h5>Personal Experience</h5>
      <h2>Developing Skills</h2>
      {/* Front end */}
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Front-end Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>Vite</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>Debugging</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* Back End */}
        <div className="experience_backend">
          <h3>Back-end Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>Express.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>RESTful APIs</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>Git Control</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>Object Oriented Programming</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>CRUD</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
