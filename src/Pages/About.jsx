import React, { useState } from "react";

const About = () => {
  return (
    <div className="about">
      <div className="contact-about">
        <h1 className="contact">Phone Number:</h1>
        <h2 className="contact">Number</h2>
        <h1 className="contact">Email Adress:</h1>
        <h2 className="contact">Email</h2>
      </div>
      <div className="company-about">
        <h1 className="about-name">Company Name</h1>
        <p className="about-about">This company does things for money. Like things that you would pay for,<br/>
        they do that and you pay them for it. So really they're like other companies but not. Boom.</p>
      </div>
    </div>
  );
};

export default About;
