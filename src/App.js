import React, { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// All pages

import NavBar from "./components/Navbar/NavBar";
import AlfHome from "./components/AlfHome";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import { useDocTitle } from "./components/CustomHook";
import ScrollToTop from "./components/ScrollToTop";
import Careers from "./components/Careers";
import Clients from "./components/Clients";
import About from "./components/AboutUs";
import Footer from "./components/Footer";
import Resources from "./pages/Resources";



function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-out-cubic",
      });
    };

    window.addEventListener("load", () => {
      aos_init();
    });
  }, []);

  useDocTitle("ALF| Access Livelihoods Fooundation ");

  return (
    <>
      
      <Router>
       
        <NavBar />
        <ScrollToTop>
       
          <Routes>
            <Route path="/" element={<AlfHome />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Resources" element={<Resources />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Clients" element={<Clients />} />
            <Route path="/Careers" element={<Careers />} />
          </Routes>
          
        </ScrollToTop>


        
        <Footer />
      
      </Router>
   
    </>
  );
}

export default App;
