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
        <h1>Welcome to Degree Authentication Portal</h1>
        <p>Verify academic credentials securely and instantly.</p>
        {/* <a href="#verify" className="btn">Verify Now</a> */}
        <Link to="/verified" className="btn">Verify Now</Link>
      </section>
      {/* Footer */}
      <footer className="footer">
        <p>© 2025 DegreeAuth | All Rights Reserved</p>
      </footer>
    </div>
  );
}
