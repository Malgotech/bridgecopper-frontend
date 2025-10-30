import React, { useRef, useState, useEffect } from "react";
import Style from "./WhatWeDo.module.scss";
import cardImg1 from "../../../../assets/images/what-card-img-1.svg";
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper/modules";
import { EffectCards } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";

const WhatWeDo = () => {
  const swiperRef = useRef(null);
 const [activeIndex, setActiveIndex] = useState(3);

  // Card data
  const cardsData = [
    {
      title: "Direct Copper Sourcing",
      description:
        "Secure direct access to premium copper from verified global mines with guaranteed quality and competitive pricing.",
      image: cardImg1,
    },
    {
      title: "Exclusive Regional Supply",
      description:
        "Dedicated supply chains tailored to your region ensuring consistent availability and reduced lead times.",
      image: cardImg1,
    },
    {
      title: "Integrated Trade Logistics",
      description:
        "End-to-end logistics solutions from mine to delivery with real-time tracking and customs clearance.",
      image: cardImg1,
    },
    {
      title: "Trusted Partnerships",
      description:
        "Transparency and accountability embedded throughout our operations, backed by international banks and trade insurance providers. Our system is designed for long-term confidence.",
      image: cardImg1,
    },
  ];

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const cardHeight = windowHeight * 0.8; // 80% of viewport height

      // Calculate which card should be active based on scroll position
      const newIndex = Math.round(scrollTop / cardHeight);
      const clampedIndex = Math.max(
        0,
        Math.min(newIndex, cardsData.length - 1)
      );

      if (clampedIndex !== activeIndex) {
        setActiveIndex(clampedIndex);
        if (swiperRef.current?.swiper) {
          swiperRef.current.swiper.slideTo(clampedIndex);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <section className={Style.what_section}>
      <div className="custom-container">
        <div className={Style.what_section_head}>
          <div className={Style.what_section_head_left}>
            <h2 className={Style.h_text_1}>What we Do?</h2>
            <p className={Style.p_text_1}>
              Transparency and accountability define our relationships at{" "}
              <br className="tab-break break" /> every stage.
            </p>
          </div>

          <p className={Style.p_text_2}>
            Bridge Copper collaborates with leading international banks and{" "}
            <br className="break tab-break " />
            trade insurance providers, building trust and stability for long-{" "}
            <br className="break tab-break " /> term procurement and investment
            decisions.
          </p>
        </div>


    <div className={Style.what_swiper_container}>
      <Swiper
        direction="vertical"
        slidesPerView={1}
        mousewheel={{ releaseOnEdges: false, sensitivity: 1 }}
        speed={800}
        grabCursor={true}
        modules={[Mousewheel]}
        className={Style.expo_vertical_swiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index} className={Style.card_slide}>
            <div
              className={`${Style.what_card} ${
                activeIndex === index ? Style.active : ""
              }`}
            >
              <div className={Style.card_body}>
                <h2 className={Style.h_text_1}>{card.title}</h2>
                {activeIndex === index && (
                  <>
                    <p className={Style.p_text_3}>{card.description}</p>
                    <img
                      src={card.image}
                      alt={card.title}
                      width={493}
                      height={478}
                      className={Style.card_img}
                    />
                  </>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    
 
      </div>
    </section>
  );
};

export default WhatWeDo;
