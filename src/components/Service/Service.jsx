import React from "react";

import './Service.scss'

const Service = ({ title, textContent, background }) => {
  return (
    <article className="service" style={{backgroundImage: `url(${background})`}}>
      <div className="service-container">
        <h3>{title}</h3>
        <p>{textContent}</p>
      </div>
    </article>
  );
};

export default Service;
