import React, { useState } from "react";

const About = () => {
  return (
    <div classNAme="about">
      <div className="contact-main">
        <ul className="contacts">
          <li>Phone: </li>
          <li>Email: </li>
          <ul className="socials">
            <li>Twitter</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </ul>
      </div>
      <div className="company-description">
        <h1 className="about-name">Company Name</h1>
        <p className = "about-desc">
          The description of the company will be here. sklagh djkahfdkfj jhadgkb. <br/>
          grhjjdb fgjhsadf jhsalf. lksaf kjf; vkvj.<br/> 
          klfa;shgr dklgjrk  dalk;gj djfkalgbr <br/> 
          sdlakjger kjds;lfv bb <br/> 
          lsdabgr  sdjafklf ljsdf.
        </p>
      </div>
    </div>
  );
};

export default About;
