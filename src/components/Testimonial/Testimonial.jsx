import React from 'react'

import './Testimonial.scss'

const Testimonial = ({
  testimonialImg,
  testimonialTxt,
  testimonialName,
  testimonialTitle,
}) => {
  return (
    <article className="testimonial-container">
      <img className="testimonial-img" src={testimonialImg} alt="" />
      <p className="testimonial-txt">{testimonialTxt}</p>
      <h4 className="testimonial-name">{testimonialName}</h4>
      <p className="testimonial-name--title">{testimonialTitle}</p>
    </article>
  );
};

export default Testimonial