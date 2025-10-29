import React from "react";
import Style from "./PartnerShip.module.scss";

const PartnerShip = () => {
  return (
    <section className="custom-container">
      <div className={Style.partner_section}>
        <div className={Style.partner_section_head}>
          <div className={Style.partner_section_head_left}>
            <h2 className={Style.h_text_1}>Trusted Partnerships</h2>
            <p className={Style.p_text_1}>
              Transparency and accountability define our relationships at{" "}
              <br className="break" /> every stage.
            </p>
          </div>
          <p className={Style.p_text_2}>
            Bridge Copper collaborates with leading international banks and{" "}
            <br className="break" />
            trade insurance providers, building trust and stability for long-{" "}
            <br className="break" /> term procurement and investment decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerShip;
