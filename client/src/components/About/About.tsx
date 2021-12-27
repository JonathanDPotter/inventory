import React from "react";
// styles
import "./About.scss";

const About = () => {
  return (
    <div className="full-page">
      <h1>About this Website</h1>
      <p className="about-text">
        This site is a fake inventory management app with full CRUD
        functionality.
      </p>
      <p>
        The server is written in typescript with express and the front end is
        written in typescript with React.
      </p>
      <p>
        You can find it on github
        <a href="https://github.com/JonathanDPotter/inventory"> here</a>.
      </p>
    </div>
  );
};

export default About;
