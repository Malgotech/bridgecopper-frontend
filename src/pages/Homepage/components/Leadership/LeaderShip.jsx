import React from "react";
import Style from "./LeaderShip.module.scss";
import clientImg from "../../../../assets/images/client-img.svg";
import cardImg from "../../../../assets/images/leader-card-img.svg";

const LeaderShip = () => {
  return (
    <section className="custom-container">
      <div className={Style.leadership_section}>
        <h2 className={Style.h_text_1}>Leadership</h2>

        <p className={Style.p_text_1}>
          Transparency and accountability define our relationships at{" "}
          <br className="break" /> every stage.
        </p>

        <div className={Style.leadership_content}>
          <div className="row g-4">
            <div className="col-xxl-6 col-lg-5 col-md-6 col-12  ">
              <div className={Style.leadership_content_left}>
                <img
                  src={clientImg}
                  alt="founder"
                  width={500}
                  height={620}
                  className={Style.founder_img}
                />

                <div className={Style.content_bottom}>
                  <div className={Style.exp_content}>
                    <span>25+ years of Experience</span>
                  </div>
                  <div className={Style.certified_trader_container}>
                    <span> Certified Trader</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-7 col-md-6 col-12">
              <div className={Style.leadership_content_right}>
                <h3 className={Style.h_text_2}>Haim Dzindzihashvili</h3>
                <p className={Style.p_text_2}>FOUNDER</p>
                <p className={Style.p_text_3}>
                  Founded and led by Haim Dzindzihashvili, a certified trader
                  with 25+ years experience in commodities and global finance,
                  Bridge Copper unites tradition, credibility, and
                  forward-thinking deal-making.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={Style.leadership_card_section}>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 col-12">
              <div className={Style.leadership_card}>
                <img
                  src={cardImg}
                  alt="card"
                  width={286}
                  height={356}
                  className={Style.card_img}
                />

                <div className={Style.card_body}>
                  <div className={Style.card_content}>
                    <p className={Style.name}>Shai Dzindzihashvili</p>
                    <p className={Style.role}>Designation</p>
                  </div>
                </div>
              </div>
            </div>
               <div className="col-lg-3 col-md-6 col-12">
              <div className={Style.leadership_card}>
                <img
                  src={cardImg}
                  alt="card"
                  width={286}
                  height={356}
                  className={Style.card_img}
                />

                <div className={Style.card_body}>
                  <div className={Style.card_content}>
                    <p className={Style.name}>Shai Dzindzihashvili</p>
                    <p className={Style.role}>Designation</p>
                  </div>
                </div>
              </div>
            </div>
               <div className="col-lg-3 col-md-6 col-12">
              <div className={Style.leadership_card}>
                <img
                  src={cardImg}
                  alt="card"
                  width={286}
                  height={356}
                  className={Style.card_img}
                />

                <div className={Style.card_body}>
                  <div className={Style.card_content}>
                    <p className={Style.name}>Shai Dzindzihashvili</p>
                    <p className={Style.role}>Designation</p>
                  </div>
                </div>
              </div>
            </div>
               <div className="col-lg-3 col-md-6 col-12">
              <div className={Style.leadership_card}>
                <img
                  src={cardImg}
                  alt="card"
                  width={286}
                  height={356}
                  className={Style.card_img}
                />

                <div className={Style.card_body}>
                  <div className={Style.card_content}>
                    <p className={Style.name}>Shai Dzindzihashvili</p>
                    <p className={Style.role}>Designation</p>
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
