import React from "react";
import "./header.css";
import CTA from "./CTA";
import ProfileImage from "../../assets/signal_16775.png";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <>
      <header id="header">
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Skylar Kline</h1>
          <h5 className="text-light">Full-Stack Developer</h5>
          <CTA />
          <div>
            <div className="profile_image">
              <img src={ProfileImage} alt="pofile image, skylark" />
            </div>
          </div>
          <HeaderSocials />
          <a href="#footer" className="scroll_down">
            Scroll Down!
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
