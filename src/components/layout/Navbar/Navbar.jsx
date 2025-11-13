import React, { useEffect, useState } from "react";
import Style from "./Navbar.module.scss";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";
import logo from "../../../assets/images/header-logo.svg";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import ContactForm from "../../ui/ContactForm/ContactForm";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = ({
  contactModal,
  setContactModal,
  setThirdSectionActive,
  handleContactModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bgChange, setBgChange] = useState(false);
  const { i18n, t } = useTranslation();

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

  const [isOpenLang, setIsOpenLang] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "zh", label: "中文" },
  ];

  const currentLanguage =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const toggleDropdown = () => setIsOpenLang((prev) => !prev);

  const selectLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpenLang(false);
  };

  return (
    <>
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

            <nav className={`${Style.header_nav} mobile-hide`}>
              <ul className="mobile-hide ">
                <li>
                  <Link
                    to="#copper"
                    onClick={goToThirdSection}
                    className={`${Style.nav_link} `}>
                    {t("Our Copper")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="#network"
                    onClick={goToNetworkSection}
                    className={`${Style.nav_link}  `}>
                    {t("Our Network")}
                  </Link>
                </li>

                <li>
                  <Link
                    to="#leader"
                    onClick={goToLeaderSection}
                    className={`${Style.nav_link}  `}>
                    {t("Our Leadership")}
                  </Link>
                </li>

                <li>
                  <Button
                    title={t("Let's Connect")}
                    onClick={handleContactModal}
                  />
                </li>
              </ul>

              <div className={Style.language_dropdown}>
                <button
                  className={Style.dropdown_toggle}
                  onClick={toggleDropdown}>
                  🌍 {currentLanguage.label}
                  <IoIosArrowDown
                    style={{
                      transform: isOpenLang ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "0.3s",
                    }}
                  />
                </button>

                {isOpenLang && (
                  <ul className={Style.dropdown_menu}>
                    {languages.map((lang) => (
                      <li
                        key={lang.code}
                        onClick={() => selectLanguage(lang.code)}>
                        {lang.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

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
                      {t("Our Copper")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#network"
                      onClick={goToNetworkSection}
                      className={`${Style.nav_link}  `}>
                      {t("Our Network")}
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#leader"
                      onClick={goToLeaderSection}
                      className={`${Style.nav_link}  `}>
                      {t("Our Leadership")}
                    </Link>
                  </li>

                  <li>
                    <Button
                      title={t("Let's Connect")}
                      onClick={handleContactModal}
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>

      <ContactForm
        show={contactModal}
        handleClose={() => setContactModal(false)}
      />
    </>
  );
};

export default Navbar;
