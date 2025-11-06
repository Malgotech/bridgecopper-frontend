import React from "react";
import Style from "./BannerSection.module.scss";
import Button from "../../../../components/common/Button/Button";
import backgrundvdo from "../../../../assets/images/CopperConcentrateVideo.webm";
import enami from "../../../../assets/images/enami.webp";
import square from "../../../../assets/images/Subtract.png";
import bannerImg from "../../../../assets/images/banner-img.webp";

const BannerSection = () => {
  return (
    <section className={Style.banner_section}>
      <div className={Style.banner_container}>
        <div className={Style.banner_vdo_content}>
          <video
            src={backgrundvdo}
            autoPlay
            loop
            muted
            playsInline
            cla
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <div className={Style.vdo_blur} />
        </div>

        <div className={Style.banner_content_top}>
          <h1 className={Style.h_text_1}>
            From the world's richest <br className="break" /> copper reserves to
            Asia's <br className="break" /> growing industries
          </h1>

          <p className={Style.p_text_1}>
            Strategic investments in Chilean copper production are poised to{" "}
            <br className="break" /> reshape global supply chains and energize
            emerging markets.
          </p>

          <div className={Style.btn_container}>
            <Button title="Explore Our Network" className={Style.btn_explore} />

            <button className={Style.btn_connect}>
              <span>Contact Us</span>
            </button>
          </div>
        </div>

        <div className={`${Style.scroll_container} tab-hide mobile-hide`}>
          <div className={Style.mouse_container}>
            <div className={Style.mouse}>
              <span className={Style.span} />
            </div>
          </div>

          <p className={Style.p_scroll}>Scroll Down</p>
        </div>

        <div className={`${Style.banner_bottom_content} tab-hide mobile-hide`}>
          <div className={Style.banner_bottom_container}>
            <img
              src={square}
              alt="square"
              className={`${Style.square_img}  tab-hide mobile-hide`}
            />

            <img
              src={square}
              alt="square"
              className={`${Style.square_img_right}  tab-hide mobile-hide`}
            />

            <p className={`${Style.p_text_2} mobile-hide`}>
              Partnered with entities
            </p>
            <div className={Style.bottom_container}>
              <div className={Style.bottom_content}>
                <p className={Style.p_text_3}>$10B</p>
                <p className={Style.p_text_4}>in Copper Reserves</p>
              </div>
              <div className={Style.bottom_content}>
                <p className={Style.p_text_3}>80+</p>
                <p className={Style.p_text_4}>Years of Experience</p>
              </div>
              <div className={Style.bottom_content}>
                <img src={enami} alt="enami" width={134} height={48} />
                <p className={Style.p_text_4}>Chile Authorized</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${Style.banner_bottom_content} desktop-hide`}>
        <div className={Style.banner_bottom_container}>
          <img
            src={square}
            alt="square"
            className={`${Style.square_img}  tab-hide mobile-hide`}
          />

          <p className={`${Style.p_text_2} `}>
            Partnered with entities
          </p>
          <div className={Style.bottom_container}>
            <div className={Style.bottom_content}>
              <p className={Style.p_text_3}>$10B</p>
              <p className={Style.p_text_4}>in Copper Reserves</p>
            </div>
            <div className={Style.bottom_content}>
              <p className={Style.p_text_3}>80+</p>
              <p className={Style.p_text_4}>Years of Experience</p>
            </div>
            <div className={Style.bottom_content}>
              <img src={enami} alt="enami" width={134} height={48} />
              <p className={Style.p_text_4}>Chile Authorized</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
