import React from "react";
import FooterMain from "./FooterMain";
export default function About() {
  return (
    <div>
      <div className="container-about-us">
        <div className="about-us-text">
          <h1>We're the Best</h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          adipisci, modi esse quibusdam animi ad pariatur earum eaque
          repellendus illo sit perferendis temporibus explicabo harum ab enim
          optio. Expedita, hic!
        </div>
        <div className="sliding-background"></div>
        <iframe title="Google Map" className="about-us-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"></iframe>
      </div>
      <FooterMain />
    </div>
  );
}
