import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import Style from "./GlobalSupply.module.scss";
import cardImg1 from "../../../../assets/images/global-card-swiper-img-1.svg";

const cardData = [
  {
    title: "ENAMI Approved",
    desc: "Direct partnerships with ENAMI-authorized miners in Chile",
  },
  {
    title: "Global Reach",
    desc: "Working with sustainable mining networks worldwide",
  },
  {
    title: "Verified Partners",
    desc: "All our sources are government verified and audited",
  },
  {
    title: "Eco-Friendly Mining",
    desc: "Focused on environmentally conscious practices",
  },
];

const GlobalSupply = () => {
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    const handleWheel = (e) => {
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if section is visible in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const isInView =
          rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5;

        if (isInView) {
          e.preventDefault(); // lock page scroll inside section

          if (e.deltaY > 0) {
            // Scrolling down
            if (!swiper.isEnd) {
              swiper.slideNext(600);
            }
          } else if (e.deltaY < 0) {
            // Scrolling up
            if (!swiper.isBeginning) {
              swiper.slidePrev(600);
            }
          }
        }

        // unlock scroll when at last or first slide
        if (
          (swiper.isEnd && e.deltaY > 0) ||
          (swiper.isBeginning && e.deltaY < 0)
        ) {
          // Allow normal page scroll
          window.removeEventListener("wheel", handleWheel);
          // Reattach after small delay to avoid immediate blocking
          setTimeout(() => {
            window.addEventListener("wheel", handleWheel, { passive: false });
          }, 600);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className={Style.global_section} ref={sectionRef}>
      <div className="custom-container">
        <div className={Style.global_section_head}>
          <div className={Style.global_section_head_left}>
            <h2 className={Style.h_text_1}>Global Supply Chain</h2>
            <p className={Style.p_text_1}>
              Bridge Copper integrates direct copper production with a{" "}
              <br className="break" /> seamless, world-class logistics network.
            </p>
          </div>
          <p className={Style.p_text_2}>
            Operating from our European headquarters in Austria, we{" "}
            <br className="break" /> connect elite mine owners in Chile and
            Arizona to clients across <br className="break" /> Asia, Europe, and
            the Middle East.
          </p>
        </div>
      </div>

      <div className={`${Style.global_card_wrapper} tab-hide mobile-hide `}>
        <Swiper
          ref={swiperRef}
          modules={[Mousewheel]}
          slidesPerView={1.2}
          spaceBetween={30}
          speed={2000}
          grabCursor={true}
          allowTouchMove={true}
          mousewheel={false}
          className={Style.global_card_section}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.2 },
            1200: { slidesPerView: 3 },
            1440: { slidesPerView: 2.8 },
            1600: { slidesPerView: 3 },
            1920: { slidesPerView: 3.5 },
            2560: { slidesPerView: 3.5 },
          }}>
          {cardData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className={Style.global_card}>
                <img
                  src={cardImg1}
                  alt="global-card"
                  className={Style.card_img}
                />
                <div className={Style.card_content}>
                  <p className={Style.p_text_3}>{item.title}</p>
                  <p className={Style.p_text_4}>{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="custom-container mt-5">
        <div className="row   g-2 desktop-hide">
          {cardData.map((card, index) => (
            <div className="col-md-6 col-12" key={index}>
              <div className={Style.global_card}>
                <img
                  src={cardImg1}
                  alt={card.title}
                  className={Style.card_img}
                />
                <div className={Style.card_content}>
                  <p className={Style.p_text_3}>{card.title}</p>
                  <p className={Style.p_text_4}>{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalSupply;
