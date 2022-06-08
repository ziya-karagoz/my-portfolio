import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Work from "../components/Work";

const Display = () => {
  //deneme
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default Display;
