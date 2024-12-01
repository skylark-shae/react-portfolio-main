import BsGithub from "react-icons/bs";
// import BsLinkedin from "react-icons/bs";


const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://github.com/skylark-shae" target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>
      {/* Linkedin removed for now, no account */}
      {/* <a href="https://linkedin.com/in/skylar_shae" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a> */} 
    </div>
  );
};

export default HeaderSocials;
