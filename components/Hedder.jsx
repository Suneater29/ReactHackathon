import { NavLink, Link } from "react-router";
import "../Hedder.css"
export default function Hedder(){
    return (
        <nav className="navbar">
        <div className="logo">DegreeAuth</div>
        <ul className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/verify">Verify</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
    )
}