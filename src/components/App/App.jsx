import CallToAction from "../CallToAction/CallToAction";
import Hero from "../Hero/Hero";
import Service from "../Service/Service";

import "./App.scss";
import TransformImg from '../../assets/desktop/image-transform.jpg'
import StantoutImg from '../../assets/desktop/image-stand-out.jpg'
import GraphicDesignBg from '../../assets/desktop/image-graphic-design.jpg'
import PhotographyBg from '../../assets/desktop/image-photography.jpg'
import TestimonialImg1 from '../../assets/image-emily.jpg'
import TestimonialImg2 from '../../assets/image-thomas.jpg'
import TestimonialImg3 from '../../assets/image-jennie.jpg'
import Testimonial from "../Testimonial/Testimonial";
import GridImg1 from '../../assets/desktop/image-gallery-milkbottles.jpg'
import GridImg2 from '../../assets/desktop/image-gallery-orange.jpg'
import GridImg3 from '../../assets/desktop/image-gallery-cone.jpg'
import GridImg4 from '../../assets/desktop/image-gallery-sugarcubes.jpg'

import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

function App() {
  return (
    <>
      <Hero />
      <main className="app-container">
        <CallToAction
          title="Transform your brand"
          textContent="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do nmost of the marketing for you."
          imgSrc={TransformImg}
          reverse={false}
          linkColor="yellow-link"
        />
        <CallToAction
          title="Stand out to the right audience"
          textContent="Using a collaborative formula for designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places"
          imgSrc={StantoutImg}
          reverse={true}
          linkColor="red-link"
        />
        <section className="services-container">
          <Service
            title="Graphic design"
            textContent="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention."
            background={GraphicDesignBg}
          />
          <Service
            title="Photography"
            textContent="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
            background={PhotographyBg}
          />
        </section>
        <section className="testimonials-container">
          <h3>Client testimonials</h3>
          <section className="flex-container">
            <Testimonial
              testimonialImg={TestimonialImg1}
              testimonialTxt="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
              testimonialName="Emily R."
              testimonialTitle="Marketing Director"
            />
            <Testimonial
              testimonialImg={TestimonialImg2}
              testimonialTxt="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
              testimonialName="Thomas S."
              testimonialTitle="Chief Operation Officer"
            />
            <Testimonial
              testimonialImg={TestimonialImg3}
              testimonialTxt="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
              testimonialName="Jennie F."
              testimonialTitle="Business Owner"
            />
          </section>
        </section>
        <section className="photo-grid-container">
          <img src={GridImg1} alt="" />
          <img src={GridImg2} alt="" />
          <img src={GridImg3} alt="" />
          <img src={GridImg4} alt="" />
        </section>
      </main>
      <footer className="footer-container">
        <h2>sunnyside</h2>
        <nav>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </nav>
        <section className="socials-container">
          <a href="#">{<FaFacebookSquare />}</a>
          <a href="#">{<FaInstagram />}</a>
          <a href="#">{<FaTwitter />}</a>
          <a href="#">{<FaPinterest />}</a>
        </section>
      </footer>
    </>
  );
}

export default App;
