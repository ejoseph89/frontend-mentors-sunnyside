import React from "react";

import "./CallToAction.scss";

const CallToAction = ({ title, textContent, imgSrc, reverse, linkColor }) => {


  return (
    <section className={`cta-container ${reverse ? "reverse" : ""}`}>
      <article className="cta-text">
        <div className="cta-text-container">
          <h2>{title}</h2>
          <p>{textContent}</p>
          <a href="#" >Learn more</a>
        </div>
      </article>
      <article className="cta-img">
        <img src={imgSrc} alt="" />
      </article>
    </section>
  );
};

export default CallToAction;
