import React, { useEffect, useRef, useState } from "react";
import Style from "./WhatWeDo.module.scss";
import cardImg1 from "../../../../assets/images/what-card-img-1.png";
import cardImg2 from "../../../../assets/images/what-card-img-2.png";
import cardImg3 from "../../../../assets/images/what-card-img-3.png";
import cardImg4 from "../../../../assets/images/what-card-img-4.png";
import { useTranslation } from "react-i18next";

import AOS from "aos";
import "aos/dist/aos.css";



const WhatWeDo = ({ isActive }) => {
  const { i18n, t } = useTranslation();
  const [activatedCards, setActivatedCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const stickyTop = parseInt(getComputedStyle(card).top);

        if (rect.top <= stickyTop + 1) {
          setActivatedCards((prev) =>
            prev.includes(index) ? prev : [...prev, index]
          );
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);


  const cards = [
  {
    title: t("What Text 6"),
    text:  t("What Text 7"),
    image: cardImg1,
  },
  {
    title:  t("What Text 8"),
    text:  t("What Text 9"),
    image: cardImg2,
  },
  {
    title:  t("What Text 10"),
    text:  t("What Text 11"),
    image: cardImg3,
  },
  {
    title:  t("What Text 12"),
    text: t("What Text 13"),
    image: cardImg4,
  },
];

  return (
    <section
      id="third-section"
      className={`${Style.what_section} ${
        isActive ? Style.active_section : ""
      }`}>
      <div className="custom-container">
        <div className={Style.what_section_head}>
          <div className={Style.what_section_head_left}>
            <h2 className={Style.h_text_1}> {t("What We Do")} </h2>
            <p className={Style.p_text_1}>
              {t("What Text 1")}
              <br className="break" /> {t("What Text 2")}
            </p>
          </div>
          <p className={Style.p_text_2}>
            {t("What Text 3")} <br className="break  " /> {t("What Text 4")}
            <br className="break" /> {t("What Text 5")}
          </p>
        </div>
      </div>

      <div className="custom-container mobile-hide" data-aos="fade-up">
        <div className={Style.what_card_container}>
          {cards.map((card, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`${Style.what_card} ${Style[`what_card_${i + 1}`]} ${
                activatedCards.includes(i) ? Style.active : ""
              }`}>
              <div className={Style.what_card_position}>
                <div className={Style.card_content}>
                  <h2 className={Style.h_text_2}>{card.title}</h2>
                  <p className={Style.p_text_3}>{card.text}</p>
                </div>
                <img src={card.image} alt="card" className={Style.card_img} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
