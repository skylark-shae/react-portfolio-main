import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://github.com/skylark-shae" target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>
      <a href="https://linkedin.com/in/skylar_shae" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocials;
