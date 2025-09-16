import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import DegreeVerifier from "./components/DegreeVerifier";
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/verify" element={<DegreeVerifier/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/verified" element={<DegreeVerifier/>}></Route>
    </Routes>
    </>
  );
}
export default App;
