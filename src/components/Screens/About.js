import React from "react";
import ScreenStyle from "./styles/Screen.module.css";
const About = () => {
  return (
    <div>
      <h1 className={ScreenStyle.titlePage}>About</h1>
      <p className={ScreenStyle.desc}>
        Skilled Frontend Developer with 4+ years of experience in designing,
        developing, and deploying flexible and responsive enterprise
        applications using configurable methodologies. Expert in creating
        reusable components to enhance and expedite development processes.
      </p>
      <p>--Vishal Anand</p>
    </div>
  );
};

export default About;
