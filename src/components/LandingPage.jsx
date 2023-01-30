import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/App-Logo.png";
import BC1 from "../assets/BC1.png"
import BC2 from "../assets/BC2.jpg"
import BC3 from "../assets/BC3.png"
import BC4 from "../assets/BC4.png"
import FooterLandingPage from "./FooterLandingPage";

export default function LandingPage() {
  return (
    <div>
      {/*** Page cover***/}

      <div className="Landing-cover min-vh-100">
        <div className="Slogan-CTA">
          <h1 className="Title-slogan">BUSINESS CARD MAKER</h1>
          <h5 className="Slogan-slogan">
          Take your Business to the next level
          </h5>
          <p className="Slogan-paragraph">
          Every business owner needs a business card. And BCM makes the creative process super fast and easy with our free online Business Card Maker. Now you can create beautiful, professional, printable business card templates for free. Simply fill in the information of your business and download your ready to print personalized business cards.
          </p>
          <Link to="/form" className="">
            <button className="Slogan-button p-3">Get Started</button>
          </Link>
        </div>
      </div>
      
      {/*** Our Products***/}

      <div className="Our-products">
        <h1 className="Title-products">CHOOSE DIFFERENT STYLES</h1>
        <div className="cards">
          {/** CARD **/}
          <div>
            <a href="http://localhost:3000" className="card">
              <img
                src={BC1}
                className="card__image"
                alt="Business card"
              />
              <div className="card__overlay">
                <div className="card__header">
                  <img
                    className="card__thumb"
                    src={logo}
                    alt="Logo"
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">Simple Design</h3>
                    <span className="card__status">Dark & Gold</span>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </a>
          </div>
          {/** End of CARD **/}
          {/** CARD **/}
          <div>
            <a href="http://localhost:3000" className="card">
            <i className="fa-regular fa-bring-front"></i>
              <img
                src= {BC2}
                className="card__image"
                alt="Business card"
              />
              <div className="card__overlay">
                <div className="card__header">
                  <img
                    className="card__thumb"
                    src={logo}
                    alt="Logo"
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">Simple Design</h3>
                    <span className="card__status">Dark & Gold</span>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </a>
          </div>
          {/** End of CARD **/}
          {/** CARD **/}
          <div>
            <a href="http://localhost:3000" className="card">
              <img
                src={BC3}
                className="card__image"
                alt="Business card"
              />
              <div className="card__overlay">
                <div className="card__header">
                  <img
                    className="card__thumb"
                    src={logo}
                    alt="Logo"
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">Simple Design</h3>
                    <span className="card__status">Dark & Gold</span>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </a>
          </div>
          {/** End of CARD **/}
          {/** CARD **/}
          <div>
            <a href="http://localhost:3000" className="card">
              <img
                src={BC4}
                className="card__image"
                alt="Business card"
              />
              <div className="card__overlay">
                <div className="card__header">
                  <img
                    className="card__thumb"
                    src={logo}
                    alt="Logo"
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">Simple Design</h3>
                    <span className="card__status">Dark & Gold</span>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </a>
          </div>
          {/** End of CARD **/}
        </div>
      </div>
      {/* Form */}
      <div className="Contact-us">
        <form className="Contact-us-form" action="">
          <h1 className="Contact-us-title">Get In Touch</h1>
          <label className="Contact-us-label" htmlFor="Name">
            Name
          </label>
          <input className="Contact-us-input" type="text" placeholder="Name" />
          <label className="Contact-us-label" htmlFor="Email">
            Email
          </label>
          <input
            className="Contact-us-input"
            type="email"
            placeholder="Email"
          />
          <label htmlFor="Question" className="Contact-us-label">
            How can we Help?
          </label>
          <textarea
            className="Contact-us-input"
            name="Text"
            placeholder="Your Question"
            id="contactText"
            cols="30"
            rows="10"
          ></textarea>
          <button className="Contact-us-submit">Submit</button>
        </form>
      </div>

      {/* Footer */}
      <FooterLandingPage />
    </div>
  );
}
