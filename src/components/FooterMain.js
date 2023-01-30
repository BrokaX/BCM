import React from "react";
import logoBanner from "../assets/logo-banner.png"
function FooterMain() {
  return (
    <footer class="mt-auto bg-dark text-center text-white">
      <div class="container p-4 pb-0">
        {/*Social media*/}
        <section class="mb-4">
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fab fa-facebook-f"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fab fa-twitter"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fab fa-google"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fab fa-instagram"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i class="fab fa-github"></i>
          </a>
        </section>
      </div>

      {/* Copyright*/}

      <div className="text-center p-3 footer-bg">
        © {new Date().getFullYear()} Copyright:  
        <a className="text-white" href="https://github.com/BrokaX/">
          Abbes
        </a> & <a className="text-white" href="https://github.com/zopapami/">
          Zoi
        </a> 
      </div>
      <div><img className="logo-banner-footer" src={logoBanner} alt="logo banner" /></div>
    </footer>
  );
}

export default FooterMain;
