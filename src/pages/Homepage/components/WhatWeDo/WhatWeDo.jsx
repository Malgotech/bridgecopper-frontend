import React from "react";
import Style from "./WhatWeDo.module.scss";

const WhatWeDo = () => {
  return (
    <section className={Style.what_section}>
      <div className="custom-container">
        <div className={Style.partner_section_head}>
          <div className={Style.partner_section_head_left}>
            <h2 className={Style.h_text_1}>What we Do?</h2>
            <p className={Style.p_text_1}>
              Transparency and accountability define our relationships at{" "}
              <br className="tab-break break" /> every stage.
            </p>
          </div>

          <p className={Style.p_text_2}>
            Bridge Copper collaborates with leading international banks and{" "}
            <br className="break tab-break " />
            trade insurance providers, building trust and stability for long-{" "}
            <br className="break tab-break " /> term procurement and investment
            decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
