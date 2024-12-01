import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
// import FiLinkedin from "react-icons/fi";
import { FiGithub, FiLinkedin } from "react-icons/fi";


function Contact() {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <a href="mailto:skylarkline.16+portfolio@gmail.com" target="_blank" rel="noopener noreferrer" className="">Contact Me</a>
          </article>
          {/* LinkedIn Removed, no personal account. Uncomment and correct URL when applicable */}
          {/* <article className="contact_option">
            <FiLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/skylark-shae"
              target="_blank" rel="noopener noreferrer"
              className=""
            >Work History</a>
          </article> */}
          <article className="contact_option">
            <FiGithub className="contact_option-icon" />
            <h4>GitHub</h4>
            <a
              href="https://www.github.com/skylark-shae"
              target="_blank" rel="noopener noreferrer"
              className=""
            >Projects</a>
          </article>
        </div>

        {/* Contact Form*/}
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
