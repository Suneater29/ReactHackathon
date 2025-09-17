import React from "react";
import Hedder from "./Hedder";
import "../About.css";
export default function About() {
  return (
    <>
    <Hedder/>
    <div className="about-container">
      
      
      <header className="about-header">
        <h1>About CheckMyDoc</h1>
      </header>

      <section className="about-section">
        <p>
           A secure platform designed to simplify and modernize the process of 
           document and degree authentication. Our mission is to provide students,
           universities, and employers with a reliable way to verify academic credentials instantly.
        </p>
      </section>

      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ Secure & encrypted verification system</li>
          <li>✔ Fast and accurate results</li>
          <li>✔ Trusted by universities and employers</li>
          <li>✔ Easy to use for students & organizations</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          We aim to eliminate fake degrees and certificates by creating a 
          transparent and globally accessible authentication system. 
          Every document verified through our platform is 100% authentic and 
          backed by trusted sources.
        </p>
      </section>

      <footer className="about-footer">
        <p>Helping build a trustworthy future for education & employment.</p>
      </footer>
    </div>
    </>
  );
}
