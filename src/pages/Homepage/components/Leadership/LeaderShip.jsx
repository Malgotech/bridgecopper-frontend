import React from "react";
import Style from "./LeaderShip.module.scss";
import cardImg from "../../../../assets/images/leaderImg.png";
import clientImg from "../../../../assets/images/Shai.png";
import { useTranslation } from "react-i18next";

const LeaderShip = () => {
  const { i18n, t } = useTranslation();

  return (
    <section className="custom-container" id="leader">
      <div className={Style.leadership_section}>
        <h2 className={Style.h_text_1}> {t("Leadership")} </h2>

        <p className={Style.p_text_1}>
       {t("L Text 1")}
          <br className="break" /> {t("L Text 2")}.
        </p>

        <div className={Style.leadership_content}>
          <div className="row g-4">
            <div className="col-xxl-6 col-lg-5 col-md-6 col-12  ">
              <div className={Style.leadership_content_left}>
                <div className={Style.progressive_blur}></div>

                <img
                  src={cardImg}
                  alt="founder"
                  width={500}
                  height={620}
                  className={Style.founder_img}
                />

                <div className={Style.content_bottom}>
                  <div className={Style.exp_content}>
                    <span>{t("L Text 3")}</span>
                  </div>
                  <div className={Style.certified_trader_container}>
                    <span> {t("L Text 4")}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-7 col-md-6 col-12">
              <div className={Style.leadership_content_right}>
                <h3 className={Style.h_text_2}>{t("L Text 5")}</h3>
                <p className={Style.p_text_2}>{t("L Text 6")}</p>
                <p className={Style.p_text_3}>
                 {t("L Text 7")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={Style.leadership_card_section}>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 col-12">
              <div className={Style.leadership_card}>
                <div className={Style.background_color} />

                <div className={Style.blur_card} />

                <img
                  src={clientImg}
                  alt="card"
                  width={286}
                  height={356}
                  className={Style.card_img}
                />

                <div className={Style.card_body}>
                  <div className={Style.card_content}>
                    <p className={Style.name}>{t("L Text 8")}</p>
                    <p className={Style.role}>{t("L Text 9")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className={Style.leadership_card}>
                <div className={Style.background_color} />

                <div className={Style.blur_card} />

                <img
                  src={clientImg}
                  alt="card"
                  width={286}
                  height={356}
                  className={Style.card_img}
                />

                <div className={Style.card_body}>
                  <div className={Style.card_content}>
                       <p className={Style.name}>{t("L Text 8")}</p>
                    <p className={Style.role}>{t("L Text 9")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className={Style.leadership_card}>
                <div className={Style.background_color} />

                <div className={Style.blur_card} />

                <img
                  src={clientImg}
                  alt="card"
                  width={286}
                  height={356}
                  className={Style.card_img}
                />

                <div className={Style.card_body}>
                  <div className={Style.card_content}>
                    <p className={Style.name}>{t("L Text 8")}</p>
                    <p className={Style.role}>{t("L Text 9")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className={Style.leadership_card}>
                <div className={Style.background_color} />

                <div className={Style.blur_card} />

                <img
                  src={clientImg}
                  alt="card"
                  width={286}
                  height={356}
                  className={Style.card_img}
                />

                <div className={Style.card_body}>
                  <div className={Style.card_content}>
                    <p className={Style.name}>{t("L Text 8")}</p>
                    <p className={Style.role}>{t("L Text 9")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderShip;
