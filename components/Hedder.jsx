import { NavLink, Link } from "react-router";
import logo from "../images/image.jpg"
import "../Hedder.css"
export default function Hedder(){
    return (
        <nav className="navbar">
        
       <div className="logoparent">
        {/* <div className="image"> <img src="bg.jpg" alt="logo"  /></div> */}
         <div className="logo">ProofPoint</div>
       </div>
        <ul className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/verify">Verify</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
    )
}