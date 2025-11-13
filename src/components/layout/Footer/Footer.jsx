import React from "react";
import Style from "./Footer.module.scss";
import tick from "../../../assets/images/tick.webp";
import Button from "../../common/Button/Button";
import arrowImg from "../../../assets/images/btn-arrow-img.webp";
import footerLogo from "../../../assets/images/footer-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import ContactForm from "../../ui/ContactForm/ContactForm";
import { useTranslation } from "react-i18next";

const Footer = ({ handleContactModal, contactModal, setContactModal }) => {
  const {   t } = useTranslation();

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

  return (

    <>
    
    <footer className={Style.footer}>
      <div className="custom-container">
        <div className={Style.footer_container}>
          <div className={Style.footer_head}>
            <div className={Style.footer_head_left}>
              <h2 className={Style.h_text_1}>
                <span> {t("F-Text-1")} </span> <br />
                {t("F-Text-2")}
              </h2>
              <div className={Style.footer_left_content}>
                <p className={Style.p_text_1}>
                  <img
                    src={tick}
                    alt="check"
                    width={20}
                    height={20}
                    className={Style.tick}
                  />
                {t("F-Text-3")}
                </p>
                <p className={Style.p_text_1}>
                  <img
                    src={tick}
                    alt="check"
                    width={20}
                    height={20}
                    className={Style.tick}
                  />
          {t("F-Text-4")}
                </p>
              </div>
            </div>
            <div className={Style.footer_head_right}>
              <p className={Style.p_text_2}>
              {t("F-Text-5")} <br className="break" /> {t("F-Text-6")}
              </p>

              <Button
                title={t("F-Text-7")}
                img={arrowImg}
                onClick={handleContactModal}
              />
            </div>
          </div>
          <div className={Style.footer_body}>
            <img
              src={footerLogo}
              alt="footer-logo"
              width={60}
              height={64}
              className={Style.footer_logo}
            />

            <div className={Style.footer_nav}>
              <Link
                to="#copper"
                className={Style.foot_link}
                onClick={goToThirdSection}>
                {" "}
             {t("Our Copper")}
              </Link>
              <Link
                to="#network"
                onClick={goToNetworkSection}
                className={Style.foot_link}>
                {" "}
               {t("Our Network")}
              </Link>
              <Link
                to="#leader"
                onClick={goToLeaderSection}
                className={Style.foot_link}>
                 {t("Our Leadership")}
              </Link>
            </div>
            <div className={Style.social_link_container}>
              <a
                href="/"
                rel="noopener noreferrer"
                className={Style.social_link}
                aria-label="Facebook">
                <FaFacebook />
              </a>
              <a
                href="/"
                rel="noopener noreferrer"
                className={Style.social_link}
                aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a
                href="/"
                rel="noopener noreferrer"
                className={Style.social_link}
                aria-label="Instagram">
                <FaInstagram />
              </a>
              <a
                href="/"
                rel="noopener noreferrer"
                className={Style.social_link}
                aria-label="Twitter">
                <BsTwitterX />
              </a>
            </div>
          </div>
          <div className={Style.hr_line} />

          <div className={Style.footer_bottom}>
            <p className={Style.p_text_3}>
             {t("F-Text-8")}
            </p>

            <div className={Style.footer_bottom_right}>
              <Link to="" className={Style.foot_link}>
                {t("F-Text-9")}
              </Link>
              <Link to="" className={Style.foot_link}>
               {t("F-Text-10")}
              </Link>
            </div>
          </div>
        </div>
      </div>

    
    </footer>

 
    </>

  );
};

export default Footer;
