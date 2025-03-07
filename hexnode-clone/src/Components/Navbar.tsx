import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState("bg-dark navbar-dark");
  const [textColor, setTextColor] = useState("text-white fw-normal");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("bg-light shadow navbar-light");
        setTextColor("text-dark "); 
      } else {
        setNavbarBg("bg-dark navbar-dark");
        setTextColor("text-white "); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${navbarBg}`}>
      <div className="container">
        <a className={`navbar-brand ${textColor} fw-bold`} href="#">
          Hexnode
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-2">
            <li className="nav-item">
              <a className={`nav-link ${textColor}`} href="#Why">
                Why Hexnode
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${textColor}`} href="#Features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${textColor}`} href="#platforms">
                Platforms
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${textColor}`} href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-danger ms-3" href="#">
         14 START FREE TRIAL
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
