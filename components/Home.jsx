import React from "react";
import "../Home.css";
import { NavLink, Link } from "react-router";
import Hedder from "./Hedder";
<img src="" alt="" sizes="" srcset="" />
export default function Home() {
  return (
    <div className="home">
      <Hedder/>
      {/* Hero Section */}
      <section id="home" className="hero">
        <h1>Welcome to </h1>
          <br /><h1><strong>
            <span className="brand-name">ProofPoint</span></strong></h1>
          <br />
        <h2>Verify academic credentials securely and instantly</h2>
        {/* <a href="#verify" className="btn">Verify Now</a> */}
        <br />
        <br />
        <Link to="/verified" className="btn">Verify Now</Link>
      </section>
      {/* Footer */}
      <footer className="footer">
        <p>© 2025 DegreeAuth | All Rights Reserved</p>
      </footer>
    </div>
  );
}
