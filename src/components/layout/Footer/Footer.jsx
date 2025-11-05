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

const Footer = () => {
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
    <footer className={Style.footer}>
      <div className="custom-container">
        <div className={Style.footer_container}>
          <div className={Style.footer_head}>
            <div className={Style.footer_head_left}>
              <h2 className={Style.h_text_1}>
                <span> Get ready to secure your </span> <br />
                Copper Supply Chain Partner!
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
                  80+ years of Experience
                </p>
                <p className={Style.p_text_1}>
                  <img
                    src={tick}
                    alt="check"
                    width={20}
                    height={20}
                    className={Style.tick}
                  />
                  Leadership with Fresh Perspective
                </p>
              </div>
            </div>
            <div className={Style.footer_head_right}>
              <p className={Style.p_text_2}>
                Operating from Austria, Bridge Copper integrates mining,
                trading, <br className="break" /> and logistics across
                continents.
              </p>

              <Button title="Let's Connect" img={arrowImg} />
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
                Our Copper
              </Link>
              <Link
                to="#network"
                onClick={goToNetworkSection}
                className={Style.foot_link}>
                {" "}
                Our Network
              </Link>
              <Link
                to="#leader"
                onClick={goToLeaderSection}
                className={Style.foot_link}>
                Our LeaderShip
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
              © 2025 Bridge Copper Inc. | All Rights Reserved
            </p>

            <div className={Style.footer_bottom_right}>
              <Link to="" className={Style.foot_link}>
                Terms of Service
              </Link>
              <Link to="" className={Style.foot_link}>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
