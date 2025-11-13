import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import Style from "./GlobalSupply.module.scss";
import cardImg1 from "../../../../assets/images/global-new-1.png";
import cardImg2 from "../../../../assets/images/global-new-2.png";
import cardImg3 from "../../../../assets/images/global-new-3.png";
import cardImg4 from "../../../../assets/images/global-new-4.png";
import { useTranslation } from "react-i18next";

const GlobalSupply = () => {
  const { i18n, t } = useTranslation();

  const cardData = [
    {
      title: t("G Text 6"),
      desc: t("G Text 7"),
      image: cardImg1,
    },
    {
      title: t("G Text 8"),
      desc: t("G Text 9"),
      image: cardImg2,
    },
    {
      title: t("G Text 10"),
      desc:t("G Text 11"),
      image: cardImg3,
    },
    {
      title: t("G Text 12"),
      desc: t("G Text 13"),
      image: cardImg4,
    },
  ];

  return (
    <section className={Style.global_section}>
      <div className="custom-container">
        <div className={Style.global_section_head}>
          <div className={Style.global_section_head_left}>
            <h2 className={Style.h_text_1}> {t("Global Supply Chain")} </h2>
            <p className={Style.p_text_1}>
              {t("G Text 1")}
              <br className="break tab-break" /> {t("G Text 2")}
            </p>
          </div>
          <p className={Style.p_text_2}>
            {t("G Text 3")}
            <br className="break tab-break" /> {t("G Text 4")}
            <br className="break tab-break" /> {t("G Text 5")}
          </p>
        </div>
      </div>

      <div className="custom-container mt-5">
        <div className="row   g-5 desktop-hide">
          {cardData.map((card, index) => (
            <div className="col-md-6 col-12" key={index}>
              <div className={Style.global_card}>
                <div className={Style.blur_bottom} />
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
