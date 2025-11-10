import React from "react";
import Style from "./PremiumCopper.module.scss";
import stone from "../../../../assets/images/stone.png";
import Button from "../../../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";

const PremiumCopper = () => {
  const navigate = useNavigate();

  const goToNetworkSection = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("network");
      if (el) {
        const yOffset = -100;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section className="custom-container" id="copper">
      <div className={Style.premium_section}>
        <div className="row w-100">
          <div className="col-lg-6 col-md-12 col-12">
            <div className={Style.premium_section_left}>
              <img
                src={stone}
                alt="stone"
                width={479}
                height={479}
                className={Style.stone_img}
              />

              <div
                className={`${Style.round_container} ${Style.round_container_1}`}>
                <div className={Style.orbit_path}>
                  <div className={Style.cu_container}>
                    <span>Cu</span>
                  </div>
                </div>

                <div className={Style.reserve_content}>
                  <span>
                    $10B <br />
                    Reserve
                  </span>
                </div>

                <div
                  className={`${Style.round_container} ${Style.round_container_2}`}>
                  <div className={Style.orbit_path}>
                    <div className={Style.mass_container}>
                      <span>
                        Mass <br />
                        63.546
                      </span>
                    </div>

                    <div className={Style.hash_container}>
                      <span>#29</span>
                    </div>
                  </div>

                  <div
                    className={`${Style.round_container} ${Style.round_container_3}`}>
                    <div
                      className={`${Style.round_container} ${Style.round_container_4}`}>
                      <div className={Style.round} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12  ">
            <div className={Style.premium_section_right}>
              <h2 className={Style.h_text_1}>
                <span> Premium copper </span> <br className="break" />{" "}
                concentrate. Direct from <br className="break" /> Chile’s
                world-class ore
              </h2>

              <p className={Style.p_text_1}>
                Bridge Copper sources copper ore from Chile, recognized globally
                for its rich mineral reserves and unparalleled ore quality. Our
                partners in Chile are among just{" "}
                <span>
                  {" "}
                  twelve elite mining companies authorized by ENAMI Chile,{" "}
                </span>{" "}
                the government’s National Mining Enterprise, ensuring all supply
                meets strict industry and export standards.
              </p>

              <Button
                to="#network"
                title="Explore Our Network"
                onClick={goToNetworkSection}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumCopper;
