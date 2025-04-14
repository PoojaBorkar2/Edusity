import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import Play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={Play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>
          More than just gaining knowledge, education empowers individuals,
          strengthens economies, and fosters progress in communities. From early
          childhood learning to higher education and lifelong learning,
          education provides the foundation for critical thinking,
          problem-solving, and innovation.
        </p>
        <p>
          University education is more than the next level in the learning
          process; it is a critical component of human development worldwide.
        </p>
        <p>
          {" "}
          It provides not only the high-level skills necessary for every labor
          market but also the training essential for teachers, doctors, nurses,
          civil servants, engineers, humanists, entrepreneurs, scientists,
          social scientists, and a myriad of other personnel.
        </p>
      </div>
    </div>
  );
};

export default About;
