import React, { useEffect, useRef, useState } from "react";
import Style from "./WhatWeDo.module.scss";
import cardImg1 from "../../../../assets/images/what-card-img-1-new.svg";
import cardImg2 from "../../../../assets/images/what-card-img-2.svg";
import cardImg3 from "../../../../assets/images/what-card-img-3.svg";
import cardImg4 from "../../../../assets/images/what-card-img-1.svg";


import AOS from "aos";
import "aos/dist/aos.css";

const cards = [
  {
    title: "Direct Copper Sourcing",
    text: "Through direct partnerships with elite mines in Chile and Arizona, and a fully integrated value chain, we ensure clients receive copper supply with maximum reliability, transparency, and quality.",
    image: cardImg1,
  },
  {
    title: "Exclusive Regional Supply",
    text: "Our team holds exclusive rights to distribute copper products across leading Asian and Middle Eastern markets, tailored to meet the strategic needs of industrial and energy sectors.",
    image: cardImg2,
  },
  {
    title: "Integrated Trade Logistics",
    text: "From mine to smelter, we coordinate every link: shipping, inspection, insurance, and finance. Each shipment complies with strict international standards, and secure movement.",
    image: cardImg3,
  },
  {
    title: "Trusted Partnerships",
    text: "Transparency and accountability are embedded throughout our operations, backed by international banks and  trade insurance providers. Our system is designed for long-term confidence",
     image: cardImg4,
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

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
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

      <div className="custom-container" data-aos="fade-up">
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
