import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FiLinkedin, FiGithub } from "react-icons/fi";

function Contact() {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className="contact_option-icon"/>
            <h4>Email</h4>
            <a href="mailto:skylarkline.16+portfolio@gmail.com" target="_blank" rel="noopener noreferrer" className="">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <FiLinkedin className="contact_option-icon"/>
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/skylar-shae"
              target="_blank" rel="noopener noreferrer"
              className=""
            >
              Connect with me
            </a>
          </article>
          <article className="contact_option">
            <FiGithub className="contact_option-icon"/>
            <h4>GitHub</h4>
            <a
              href="https://www.github.com/skylar-shae"
              target="_blank" rel="noopener noreferrer"
              className=""
            >
              Browse my projects
            </a>
          </article>
        </div>
        
        {/* START CONTACT FORM*/}
        <form>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Type your message here"
            required
          ></textarea>
          <button type="submit" id="contact_btn" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
