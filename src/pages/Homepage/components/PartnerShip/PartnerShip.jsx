import React from "react";
import Style from "./PartnerShip.module.scss";
import partnerImg from "../../../../assets/images/parter-img.webp";
import cardImg1 from "../../../../assets/images/partner-card-img-1.webp";
import cardImg2 from "../../../../assets/images/partner-card-img-2.webp";
import cardImg3 from "../../../../assets/images/partner-card-img-3.webp";
import cardImg4 from "../../../../assets/images/partner-card-img-4.webp";



const PartnerShip = () => {
  return (
    <section className="custom-container">
      <div className={Style.partner_section}>
        <div className={Style.partner_section_head}>
          <div className={Style.partner_section_head_left}>
            <h2 className={Style.h_text_1}>Trusted Partnerships</h2>
            <p className={Style.p_text_1}>
              Transparency and accountability define our relationships at{" "}
              <br className="tab-break break" /> every stage.
            </p>
          </div>

          <img
            src={partnerImg}
            alt="partner"
            width={200}
            height={136}
            className={`${Style.partner_img} desktop-hide tab-hide`}
          />
          <p className={Style.p_text_2}>
            Bridge Copper collaborates with leading international banks and{" "}
            <br className="break tab-break " />
            trade insurance providers, building trust and stability for long-{" "}
            <br className="break tab-break " /> term procurement and investment
            decisions.
          </p>
        </div>

        <div className={Style.partner_card_section}>
          <div className={`${Style.partner_img_container} mobile-hide`}>
            <img
              src={partnerImg}
              alt="partner"
              width={200}
              height={136}
              className={Style.partner_img}
            />
          </div>

          <div
            className={`${Style.partner_card} ${Style.partner_card_top_left}`}>
            <div className={Style.card_body}>
              <h3 className={Style.h_text_2}>Bank Support</h3>
              <p className={Style.p_text_3}>
                We work with trusted global banks, ensuring every transaction is
                swift, secure, and fully verified for financial confidence.
              </p>

              <img
                src={cardImg1}
                alt="partner"
                width={200}
                height={200}
                className={Style.card_img_1}
              />
            </div>
          </div>

          <div
            className={`${Style.partner_card} ${Style.partner_card_top_right}`}>
            <div className={Style.card_body}>
              <h3 className={Style.h_text_2}>Insured Trade</h3>
              <p className={Style.p_text_3}>
                Leadership with fresh perspective and deep industry roots
                propels Bridge Copper towards new opportunities and sustained
                excellence.
              </p>

              <img
                src={cardImg2}
                alt="partner"
                width={200}
                height={200}
                className={Style.card_img_2}
              />
            </div>
          </div>
          <div
            className={`${Style.partner_card} ${Style.partner_card_bottom_left}`}>
            <div className={Style.card_body_bottom}>
              <h3 className={Style.h_text_2}>Bank Support</h3>
              <p className={Style.p_text_3}>
                We work with trusted global banks, ensuring every transaction is
                swift, secure, and fully verified for financial confidence.
              </p>

              <img
                src={cardImg3}
                alt="partner"
                width={180}
                height={180}
                className={Style.card_img_3}
              />
            </div>
          </div>
          <div
            className={`${Style.partner_card} ${Style.partner_card_bottom_right}`}>
            <div className={Style.card_body_bottom}>
              <h3 className={Style.h_text_2}>Bank Support</h3>
              <p className={Style.p_text_3}>
                We work with trusted global banks, ensuring every transaction is
                swift, secure, and fully verified for financial confidence.
              </p>

              <img
                src={cardImg4}
                alt="partner"
                width={200}
                height={200}
                className={Style.card_img_4}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerShip;
