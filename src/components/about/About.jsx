import React from "react";
import "./about.css";
import aboutMe from "../../assets/signal-2024-11-05-124953.jpeg";
import { FaAward, FaUsers, FaTasks } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={aboutMe} alt="Creator in About Section" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
          {/* About me cards: Clients, Experience, Ongoing Projetcts */}
            {/* Clients */}
            <article className="about_card">
              <icon className="about_icon">
                <FaUsers />
              </icon>
              <h5>Clients</h5>
              <small>15+ Nationwide and 12+ International</small>
            </article>
            {/* Experience */}
            <article className="about_card">
              <icon className="about_icon">
                <FaAward />
              </icon>
              <h5>Experience</h5>
              <small>5+ Years Working in code and IT</small>
            </article>
            {/* Ongoing Projetcts */}
            <article className="about_card">
              <icon className="about_icon">
                <FaTasks />
              </icon>
              <h5>Ongoing Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          {/* About me paragraphs */}
          <p>
            I hold a Bachelor of Arts in Philosophy from the University of Oregon and am currently working as an accountant at Shephard Investment Group, where I also oversee the IT department’s general operations. My experience has provided me with comprehensive knowledge of everyday IT challenges faced by small businesses and how these challenges can be managed to support future growth. Additionally, I have extensive retail management experience, having served as a café manager at Starbucks and as the scheduling and exam manager in an optometry practice. I have also worked one on one with clients in graphic design and photography, providing me with a unique perspective on the importance of customer service and the value of clear communication.
            <br/> <br/>
            My diverse background and strong attention to detail have highlighted both gaps in my knowledge and opportunities for improvement in automation and data analytics. These insights have driven me to explore beyond the systems I have worked in, combining my skills in critical thinking, personnel management, and continuous learning.
            <br/> <br/>
            Currently, I am enrolled in the University of Oregon’s Full Stack Development Bootcamp, aiming to transition into the field of Computer Science. I am excited to expand my technical expertise, contribute to the field, and collaborate on projects with fellow developers. I am eager to bring my unique perspective and dedication to my future roles in the tech industry.
          </p>

          {/* Connect button */}
          <a href="#contact" className="btn btn-primary about_btn">
            Connect 
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
