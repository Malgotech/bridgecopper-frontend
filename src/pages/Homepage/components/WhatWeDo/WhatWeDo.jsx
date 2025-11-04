 

import React, { useEffect, useRef, useState } from "react";
import Style from "./WhatWeDo.module.scss";
import cardImg1 from "../../../../assets/images/what-card-img-1.svg";

const cardsData = [
  {
    title: "Direct Copper Sourcing",
    desc: "We build direct supply relationships with miners and smelters, reducing intermediary layers and optimizing trade margins.",
    img: cardImg1,
  },
  {
    title: "Exclusive Regional Supply",
    desc: "Bridge Copper ensures regional exclusivity, enabling buyers to secure consistent, reliable copper sources.",
    img: cardImg1,
  },
  {
    title: "Integrated Trade Logistics",
    desc: "Our logistics infrastructure ensures smooth and efficient movement from source to destination.",
    img: cardImg1,
  },
  {
    title: "Trusted Partnerships",
    desc: "Transparency and accountability are embedded throughout our operations, backed by international banks and trade insurance providers.",
    img: cardImg1,
  },
];

const WhatWeDo = ({ isActive }) => {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const scrollDirection = useRef("down");

  // Detect scroll direction
  useEffect(() => {
    const handleDirection = () => {
      const currentY = window.scrollY;
      scrollDirection.current = currentY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleDirection);
    return () => window.removeEventListener("scroll", handleDirection);
  }, []);

  // Detect when section enters the viewport
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const middle = window.innerHeight * 0.5;
      const inView = rect.top <= middle && rect.bottom >= middle;

      // If scrolling DOWN and section reaches center → activate lock
      if (inView && !isLocked && scrollDirection.current === "down") {
        setIsLocked(true);
        document.body.style.overflow = "hidden";
      }

      // If section leaves view and cards are reset → unlock scroll
      if ((!inView || scrollDirection.current === "up") && isLocked) {
        setIsLocked(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [isLocked, visibleCards]);

  // Handle card scroll logic only when locked
  useEffect(() => {
    if (!isLocked) return;

    const handleWheel = (e) => {
      e.preventDefault();

      if (isAnimating) return;
      setIsAnimating(true);

      const direction = e.deltaY > 0 ? "down" : "up";

      if (direction === "down") {
        if (visibleCards < cardsData.length) {
          setVisibleCards((prev) => prev + 1);
        } else {
          // When last card done, unlock and allow natural scroll down
          setTimeout(() => {
            document.body.style.overflow = "auto";
            setIsLocked(false);
            window.scrollBy({
              top: window.innerHeight * 0.8,
              behavior: "smooth",
            });
          }, 300);
        }
      } else {
        if (visibleCards > 0) {
          setVisibleCards((prev) => prev - 1);
        } else {
          // When back at start, unlock and allow scroll up naturally
          setTimeout(() => {
            document.body.style.overflow = "auto";
            setIsLocked(false);
            window.scrollBy({
              top: -window.innerHeight * 0.8,
              behavior: "smooth",
            });
          }, 300);
        }
      }

      // Cooldown between scrolls
      setTimeout(() => setIsAnimating(false), 700);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isLocked, visibleCards, isAnimating]);

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
              Transparency and accountability define our relationships at{" "}
              <br className="tab-break break" /> every stage.
            </p>
          </div>
          <p className={Style.p_text_2}>
            Bridge Copper collaborates with leading international banks and{" "}
            <br className="break tab-break" />
            trade insurance providers, building trust and stability for long-{" "}
            <br className="break tab-break" /> term procurement and investment
            decisions.
          </p>
        </div>
      </div>

      {/* Scroll Cards */}
      <div className={Style.swiper_ref_container} ref={sectionRef}>
        <div className="custom-container">
          <div className={Style.what_swiper_container}>
            {cardsData.map((card, index) => (
              <div
                key={index}
                className={`${Style.what_card} ${
                  index < visibleCards ? Style.visible : ""
                }`}
                ref={sectionRef}>
                <div className={Style.card_left}>
                  <h2 className={Style.h_text_2}>{card.title}</h2>
                  <p className={Style.p_text_3}>{card.desc}</p>
                </div>
                <img
                  src={card.img}
                  alt="card"
                  width={493}
                  height={478}
                  className={Style.card_img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
