import React from "react";
import "../Contact.css";
import Hedder from "./Hedder";

export default function Contact() {
  return (
  <>
  <Hedder/>
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have questions or need help? Get in touch with us. 
          We’re here to support you.
        </p>
      </header>

      {/* Contact Info Section */}
      <section className="contact-info">
        <div className="info-box">
          <h3>Email</h3>
          <p>support@proofpoint.com</p>
        </div>
        <div className="info-box">
          <h3>Phone</h3>
          <p>+91 98765 43210</p>
        </div>
        {/* <div className="info-box">
          <h3>Address</h3>
          <p>123, Knowledge Park, Delhi, India</p>
        </div> */}
      </section>

      {/* Contact Form */}
      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
</>
  );
}
