import React from "react";
import Style from "./ScrollStack.module.scss";
import cardImg1 from "../../../../assets/images/global-new-1.png";
import cardImg2 from "../../../../assets/images/global-new-2.png";
import cardImg3 from "../../../../assets/images/global-new-3.png";
import cardImg4 from "../../../../assets/images/global-new-4.png";
import { useTranslation } from "react-i18next";

const ScrollStack = () => {
    const { i18n, t } = useTranslation();
  
 
    const cardData = [
      {
        title: t("G Text 6"),
        description: t("G Text 7"),
        image: cardImg1,
      },
      {
        title: t("G Text 8"),
        description: t("G Text 9"),
        image: cardImg2,
      },
      {
        title: t("G Text 10"),
        description:t("G Text 11"),
        image: cardImg3,
      },
      {
        title: t("G Text 12"),
        description: t("G Text 13"),
        image: cardImg4,
      },
    ];
  

  return (
    <section className={`${Style.scroll_section} tab-hide mobile-hide`}>
      <div className={Style.sticky_container}>
        <div className={Style.cards_wrapper}>
          {cardData.map((card, index) => (
            <div key={index} className={Style.global_card}>
              <div className={Style.blur} />
              <img
                src={card.image}
                alt="global-card"
                className={Style.card_img}
              />
              <div className={Style.card_content}>
                <p className={Style.p_text_3}>{card.title}</p>
                <p className={Style.p_text_4}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollStack;
