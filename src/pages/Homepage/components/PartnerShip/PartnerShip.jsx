import React from "react";
import Style from "./PartnerShip.module.scss";
import partnerImg from "../../../../assets/images/parter-img.webp";
import cardImg1 from "../../../../assets/images/partner-card-img-1.webp";
import cardImg2 from "../../../../assets/images/partner-card-img-2.webp";
import cardImg3 from "../../../../assets/images/partner-card-img-3.webp";
import cardImg4 from "../../../../assets/images/partner-card-img-4.webp";
import { useTranslation } from "react-i18next";

const PartnerShip = () => {
    const { i18n, t } = useTranslation();

  return (
    <section className="custom-container">
      <div className={Style.partner_section}>
        <div className={Style.partner_section_head}>
          <div className={Style.partner_section_head_left}>
            <h2 className={Style.h_text_1}>{t("Trusted Partnerships")} </h2>
            <p className={Style.p_text_1}>
             {t("T Text 1")}
              <br className="tab-break break" /> {t("T Text 2")}.
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
             {t("T Text 3")}
            <br className="break tab-break " />
         {t("T Text 4")}
            <br className="break tab-break " />  {t("T Text 5")}
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
              <h3 className={Style.h_text_2}>{t("T Text 6")}</h3>
              <p className={Style.p_text_3}>
             {t("T Text 7")}
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
              <h3 className={Style.h_text_2}>{t("T Text 8")}</h3>
              <p className={Style.p_text_3}>
               {t("T Text 9")}
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
              <h3 className={Style.h_text_2}>{t("T Text 10")}</h3>
              <p className={Style.p_text_3}>
               {t("T Text 11")}
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
              <h3 className={Style.h_text_2}>{t("T Text 12")}</h3>
              <p className={Style.p_text_3}>
                {t("T Text 13")}
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
