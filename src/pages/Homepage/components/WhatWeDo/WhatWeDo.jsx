import React, { useEffect, useRef, useState } from "react";
import Style from "./WhatWeDo.module.scss";
import cardImg1 from "../../../../assets/images/what-card-img-1.svg";

const cards = [
  {
    title: "Direct Copper Sourcing",
    text: "Transparency and accountability are embedded throughout our operations, backed by international banks and  trade insurance providers. Our system is designed for long-term confidence",
  },
  {
    title: "Exclusive Regional Supply",
    text: "Transparency and accountability are embedded throughout our operations, backed by international banks and  trade insurance providers. Our system is designed for long-term confidence",
  },
  {
    title: "Integrated Trade Logistics",
    text: "Transparency and accountability are embedded throughout our operations, backed by international banks and  trade insurance providers. Our system is designed for long-term confidence",
  },
  {
    title: "Trusted Partnerships",
    text: "Transparency and accountability are embedded throughout our operations, backed by international banks and  trade insurance providers. Our system is designed for long-term confidence",
  },
];

const WhatWeDo = ({ isActive }) => {
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

  return (
    <section
      id="third-section"
      className={`${Style.what_section} ${
        isActive ? Style.active_section : ""
      }`}>
      <div className="custom-container">
        <div className={Style.what_section_head}>
          <div className={Style.what_section_head_left}>
            <h2 className={Style.h_text_1}>What We Do?</h2>
            <p className={Style.p_text_1}>
              Transparency and accountability define our relationships at every
              stage.
            </p>
          </div>
          <p className={Style.p_text_2}>
            Bridge Copper collaborates with leading international banks and
            trade insurance providers, building trust and stability for
            long-term procurement and investment decisions.
          </p>
        </div>
      </div>

      <div className="custom-container">
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
                <img src={cardImg1} alt="card" className={Style.card_img} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
