import React from "react";
import { Link } from "react-router-dom";
import NavBar from './NavBar';
export default function LandingPage() {
  return (
    <div>
      {/*** Page cover***/}

      <div className="Landing-cover">
        <div className="Slogan-CTA">
          <h1 className="Title-slogan">BUSINESS CARD MAKER</h1>
          <h5 className="Slogan-slogan">
            We take your Business to the next level
          </h5>
          <p className="Slogan-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            temporibus, molestias beatae natus similique asperiores sapiente ea
            atque quae blanditiis amet accusamus, tenetur officiis voluptas
            itaque optio eum, quam suscipit ab ut facere cum unde explicabo! Aut
            nisi, fuga incidunt, voluptatem deleniti perspiciatis mollitia
            aliquam, explicabo magni voluptas corrupti explicabo vel!
          </p>
          <button className="Slogan-button">Get Started</button>
          <Link to=""></Link>
        </div>
      </div>
      <NavBar/>
      {/*** Our Products***/}

      <div className="Our-products">
        <h1 className="Title-products">WELCOME TO BCM</h1>
        <div class="cards">
          {/** CARD **/}
          <div>
            <a href="http://localhost:3000" class="card">
              <img
                src="../assets/Card3.png"
                class="card__image"
                alt="Business card"
              />
              <div class="card__overlay">
                <div class="card__header">
                  <img
                    class="card__thumb"
                    src="../assets/App-Logo.png"
                    alt="Logo"
                  />
                  <div class="card__header-text">
                    <h3 class="card__title">Simple Design</h3>
                    <span class="card__status">Dark & Gold</span>
                  </div>
                </div>
                <p class="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </a>
          </div>
          {/** End of CARD **/}
          {/** CARD **/}
          <div>
            <a href="http://localhost:3000" class="card">
              <img
                src="../assets/Card3.png"
                class="card__image"
                alt="Business card"
              />
              <div class="card__overlay">
                <div class="card__header">
                  <img
                    class="card__thumb"
                    src="../assets/App-Logo.png"
                    alt="Logo"
                  />
                  <div class="card__header-text">
                    <h3 class="card__title">Simple Design</h3>
                    <span class="card__status">Dark & Gold</span>
                  </div>
                </div>
                <p class="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </a>
          </div>
          {/** End of CARD **/}
          {/** CARD **/}
          <div>
            <a href="http://localhost:3000" class="card">
              <img
                src="../assets/Card3.png"
                class="card__image"
                alt="Business card"
              />
              <div class="card__overlay">
                <div class="card__header">
                  <img
                    class="card__thumb"
                    src="../assets/App-Logo.png"
                    alt="Logo"
                  />
                  <div class="card__header-text">
                    <h3 class="card__title">Simple Design</h3>
                    <span class="card__status">Dark & Gold</span>
                  </div>
                </div>
                <p class="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </a>
          </div>
          {/** End of CARD **/}
          {/** CARD **/}
          <div>
            <a href="http://localhost:3000" class="card">
              <img
                src="../assets/Card3.png"
                class="card__image"
                alt="Business card"
              />
              <div class="card__overlay">
                <div class="card__header">
                  <img
                    class="card__thumb"
                    src="../assets/App-Logo.png"
                    alt="Logo"
                  />
                  <div class="card__header-text">
                    <h3 class="card__title">Simple Design</h3>
                    <span class="card__status">Dark & Gold</span>
                  </div>
                </div>
                <p class="card__description">
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
      <footer className="footer">
        <div className="footer-container">
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
        </div>
        <div className="social-media-icons">

        </div>
      </footer>
    </div>
  );
}
