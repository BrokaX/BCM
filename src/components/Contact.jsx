import React from 'react'
import FooterMain from './FooterMain'
export default function Contact() {
  return (
    <div><div className="Contact-us">
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
      <FooterMain /></div>
  )
}
