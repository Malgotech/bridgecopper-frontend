import React from "react";
import Style from "./ScrollStack.module.scss";
import cardImg1 from "../../../../assets/images/global-card-1.webp";
import cardImg2 from "../../../../assets/images/global-card-2.webp";
import cardImg3 from "../../../../assets/images/global-card-3.webp";
import cardImg4 from "../../../../assets/images/global-card-4.webp";

const ScrollStack = () => {
  return (
    <section className={`${Style.scroll_section} tab-hide mobile-hide`}>
      <div className={Style.sticky_container}>
        <div className={Style.cards_wrapper}>
          <div className={Style.global_card}>
            <img src={cardImg1} alt="global-card" className={Style.card_img} />
            <div className={Style.card_content}>
              <p className={Style.p_text_3}>ENAMI Approved</p>
              <p className={Style.p_text_4}>
                Direct partnerships with ENAMI-authorized miners in Chile
              </p>
            </div>
          </div>
          <div className={Style.global_card}>
            <img src={cardImg2} alt="global-card" className={Style.card_img} />
            <div className={Style.card_content}>
              <p className={Style.p_text_3}>Vast Reserves</p>
              <p className={Style.p_text_4}>
                More than USD 10 billion in proven copper reserves
              </p>
            </div>
          </div>
          <div className={Style.global_card}>
            <img src={cardImg3} alt="global-card" className={Style.card_img} />
            <div className={Style.card_content}>
              <p className={Style.p_text_3}>Legacy Leadership</p>
              <p className={Style.p_text_4}>
                Operations managed by a family office with over 80 years’
                experience
              </p>
            </div>
          </div>
          <div className={Style.global_card}>
            <img src={cardImg4} alt="global-card" className={Style.card_img} />
            <div className={Style.card_content}>
              <p className={Style.p_text_3}>World Reach</p>
              <p className={Style.p_text_4}>
                Proven track record supplying global industrial, manufacturing,
                and energy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollStack;
