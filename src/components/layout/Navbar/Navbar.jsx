import React, { useEffect, useState } from "react";
import Style from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import Button from "../../common/Button/Button";
import logo from "../../../assets/images/header-logo.svg";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${Style.header} ${scrolled ? Style.shadow : ""}`}>
      <a href="/" className={Style.header_link}>
        <img
          src={logo}
          alt="bridge copper logo"
          width={64}
          height={64}
          className={Style.header_logo}
        />
      </a>

      <nav className={`${Style.header_nav}`}>
        <ul className="mobile-hide">
          <li>
            <Link to="/" className={`${Style.nav_link} `}>
              Our Copper
            </Link>
          </li>
          <li>
            <Link to="/plans" className={`${Style.nav_link}  `}>
              Our Network
            </Link>
          </li>
          <li>
            <Link to="/plots" className={`${Style.nav_link} `}>
              About
            </Link>
          </li>
          <li>
            <Link to="/faq" className={`${Style.nav_link}  `}>
              Vision
            </Link>
          </li>

          <li>
            <Button title="Let's Connect" />
          </li>
        </ul>

        <button
          className={`${Style.btn_menu} desktop-hide tab-hide`}
          onClick={handleNav}>
          {isOpen ? <IoClose /> : <LuMenu />}
        </button>
      </nav>

      {isOpen && (
        <div className={Style.mobile_nav}>
          <ul>
            <li>
              <Link to="/" className={`${Style.nav_link} `}>
                Our Copper
              </Link>
            </li>
            <li>
              <Link to="/plans" className={`${Style.nav_link}  `}>
                Our Network
              </Link>
            </li>
            <li>
              <Link to="/plots" className={`${Style.nav_link} `}>
                About
              </Link>
            </li>
            <li>
              <Link to="/faq" className={`${Style.nav_link}  `}>
                Vision
              </Link>
            </li>

            <li>
              <Button title="Let's Connect" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
