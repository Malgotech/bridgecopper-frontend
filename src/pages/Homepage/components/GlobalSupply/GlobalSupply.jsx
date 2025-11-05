import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import Style from "./GlobalSupply.module.scss";
import cardImg1 from "../../../../assets/images/global-card-1.webp";
import cardImg2 from "../../../../assets/images/global-card-2.webp";
import cardImg3 from "../../../../assets/images/global-card-3.webp";
import cardImg4 from "../../../../assets/images/global-card-4.webp";

const cardData = [
  {
    title: "ENAMI Approved",
    desc: "Direct partnerships with ENAMI-authorized miners in Chile",
    image: cardImg1,
  },
  {
    title: "Global Reach",
    desc: "Working with sustainable mining networks worldwide",
    image: cardImg2,
  },
  {
    title: "Verified Partners",
    desc: "All our sources are government verified and audited",
    image: cardImg3,
  },
  {
    title: "Eco-Friendly Mining",
    desc: "Focused on environmentally conscious practices",
    image: cardImg4,
  },
];

const GlobalSupply = () => {
  return (
    <section className={Style.global_section}>
      <div className="custom-container">
        <div className={Style.global_section_head}>
          <div className={Style.global_section_head_left}>
            <h2 className={Style.h_text_1}>Global Supply Chain</h2>
            <p className={Style.p_text_1}>
              Bridge Copper integrates direct copper production with a{" "}
              <br className="break tab-break" /> seamless, world-class logistics
              network.
            </p>
          </div>
          <p className={Style.p_text_2}>
            Operating from our European headquarters in Austria, we{" "}
            <br className="break tab-break" /> connect elite mine owners in
            Chile and Arizona to clients across{" "}
            <br className="break tab-break" /> Asia, Europe, and the Middle
            East.
          </p>
        </div>
      </div>


      <div className="custom-container mt-5">
        <div className="row   g-2 desktop-hide">
          {cardData.map((card, index) => (
            <div className="col-md-6 col-12" key={index}>
              <div className={Style.global_card}>
                <img
                  src={card.image}
                  alt={card.title}
                  className={Style.card_img}
                />
                <div className={Style.card_content}>
                  <p className={Style.p_text_3}>{card.title}</p>
                  <p className={Style.p_text_4}>{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalSupply;
