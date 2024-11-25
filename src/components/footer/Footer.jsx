import './footer.css'
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { FaXTwitter } from "react-icons/fa6";
import Signature from '../../assets/Tab-sig.png'
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer id='footer'>
      <a href="/" className="footer_logo"><img src={Signature} alt='Signature logo png color invert'/></a>

      <ul className="permaLinks">
       <li><a href="/">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#experience">Experience</a></li>
       <li><a href="#services">Services</a></li>
       <li><a href="#portfolio">Portfolio</a></li>
       <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com/skylarshae" target="_blank" rel="noopener noreferrer"><AiOutlineFacebook/></a>
        <a href="https://instagram.com/skylarkshae" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram/></a>
        <a href="https://x.com/Skylark_shae" id='twitter_logo' target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
        <span className="mobile_socials">
        <a href="https://github.com/skylar-shae" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/skylar-shae" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </span>
      </div>

      <div className="footer_copyright">
        <small>&copy; Sky-shae Design 2024</small>
      </div>
    </footer>
  )
}

export default Footer