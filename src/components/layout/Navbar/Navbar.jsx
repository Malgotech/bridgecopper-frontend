import React, { useEffect, useState } from "react";
import Style from "./Navbar.module.scss";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";
import logo from "../../../assets/images/header-logo.svg";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import ContactForm from "../../ui/ContactForm/ContactForm";

const Navbar = ({   contactModal,setContactModal , setThirdSectionActive, handleContactModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bgChange, setBgChange] = useState(false);

  const navigate = useNavigate();

  const goToThirdSection = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("copper");
      if (el) {
        const yOffset = -100;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  const goToLeaderSection = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("leader");
      if (el) {
        const yOffset = -100;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  const goToNetworkSection = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("network");
      if (el) {
        const yOffset = -100;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

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

  useEffect(() => {
    const handleScroll = () => {
      const thirdSection = document.getElementById("third-section");
      const navbar = document.getElementById("navbar");

      if (!thirdSection || !navbar) return;

      const navbarHeight = navbar.offsetHeight;
      const sectionTop = thirdSection.getBoundingClientRect().top;
      const sectionBottom = thirdSection.getBoundingClientRect().bottom;

      // Check if third section is within the visible area (taking navbar height into account)
      if (sectionTop <= navbarHeight && sectionBottom > navbarHeight) {
        setBgChange(true);
        setThirdSectionActive(true);
      } else {
        setBgChange(false);
        setThirdSectionActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setThirdSectionActive]);

  return (
    <header
      id="navbar"
      className={`${Style.header} ${scrolled ? Style.shadow : ""}`}>
      <div className="custom-container">
        <div className={Style.nav_container}>
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
            <ul className="mobile-hide ">
              <li>
                <Link
                  to="#copper"
                  onClick={goToThirdSection}
                  className={`${Style.nav_link} `}>
                  Our Copper
                </Link>
              </li>
              <li>
                <Link
                  to="#network"
                  onClick={goToNetworkSection}
                  className={`${Style.nav_link}  `}>
                  Our Network
                </Link>
              </li>

              <li>
                <Link
                  to="#leader"
                  onClick={goToLeaderSection}
                  className={`${Style.nav_link}  `}>
                  Our Leadership
                </Link>
              </li>

              <li>
                <Button title="Let's Connect" onClick={handleContactModal} />
              </li>
            </ul>

            <button
              className={`${Style.btn_menu} desktop-hide tab-hide`}
              onClick={handleNav}>
              {isOpen ? <IoClose /> : <LuMenu />}
            </button>
          </nav>
          {isOpen && (
            <div className={Style.mobile_nav} onClick={handleNav}>
              <ul>
                <li>
                  <Link
                    to="#copper"
                    onClick={goToThirdSection}
                    className={`${Style.nav_link} `}>
                    Our Copper
                  </Link>
                </li>
                <li>
                  <Link
                    to="#network"
                    onClick={goToNetworkSection}
                    className={`${Style.nav_link}  `}>
                    Our Network
                  </Link>
                </li>

                <li>
                  <Link
                    to="#leader"
                    onClick={goToLeaderSection}
                    className={`${Style.nav_link}  `}>
                    Our Leadership
                  </Link>
                </li>

                <li>
                  <Button title="Let's Connect" onClick={handleContactModal} />
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

                  <ContactForm
        show={contactModal}
        handleClose={() => setContactModal(false)}
      />
    </header>
  );
};

export default Navbar;
