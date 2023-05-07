import React from "react";
import "./leftSection.css";
import Form from "../form/Forms.js";

const LeftSec = () => {
  return (
    <div className="main-container">
      <div className="info">
        <p>March 17, 2021, 12:00</p>
        <h1>The help of Augmented Reality and Holograms.</h1>
        <p className="para">
          Use Augmented Reality to keep students engaged and provide detailed
          explanations of models and course material. In a 3D, AR Lab, students
          can pinch, zoom, and rotate quipments related to the course, for a
          fully immersive learning experience
        </p>
        <h2>Join the event</h2>
        <Form />
      </div>
    </div>
  );
};

export default LeftSec;
