// import React, { useRef, useState, useEffect } from "react";
// import Style from "./WhatWeDo.module.scss";
// import cardImg1 from "../../../../assets/images/what-card-img-1.svg";

// const WhatWeDo = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const swiperContainerRef = useRef(null);
//   const isScrolling = useRef(false);
//   const allowScroll = useRef(true);

//   const cards = [
//     {
//       title: "Direct Copper Sourcing",
//       description:
//         "Direct access to copper sources ensuring quality and reliability in our supply chain.",
//       image: cardImg1,
//     },
//     {
//       title: "Exclusive Regional Supply",
//       description:
//         "Exclusive regional supply partnerships that guarantee consistent availability.",
//       image: cardImg1,
//     },
//     {
//       title: "Integrated Trade Logistics",
//       description:
//         "Seamless integrated logistics for efficient copper trade operations worldwide.",
//       image: cardImg1,
//     },
//     {
//       title: "Trusted Partnerships",
//       description:
//         "Transparency and accountability are embedded throughout our operations, backed by international banks and trade insurance providers. Our system is designed for long-term confidence, and make up our company's DNA.",
//       image: cardImg1,
//     },
//   ];

//   useEffect(() => {
//     const container = swiperContainerRef.current;
//     if (!container) return;

//     const handleWheel = (e) => {
//       if (!allowScroll.current) return;

//       const isLastCard = currentSlide === cards.length - 1;
//       const isFirstCard = currentSlide === 0;

//       // Lock page scroll inside section
//       e.preventDefault();

//       if (isScrolling.current) return;
//       isScrolling.current = true;

//       // Scroll down
//       if (e.deltaY > 0) {
//         if (!isLastCard) {
//           setCurrentSlide((prev) => Math.min(prev + 1, cards.length - 1));
//         } else {
//           // Allow natural scroll after reaching last card
//           allowScroll.current = false;
//           setTimeout(() => {
//             allowScroll.current = true;
//           }, 1000);
//           window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
//         }
//       }

//       // Scroll up
//       if (e.deltaY < 0) {
//         if (!isFirstCard) {
//           setCurrentSlide((prev) => Math.max(prev - 1, 0));
//         } else {
//           // Allow natural scroll after reaching first card
//           allowScroll.current = false;
//           setTimeout(() => {
//             allowScroll.current = true;
//           }, 1000);
//           window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
//         }
//       }

//       setTimeout(() => {
//         isScrolling.current = false;
//       }, 800);
//     };

//     container.addEventListener("wheel", handleWheel, { passive: false });

//     return () => {
//       container.removeEventListener("wheel", handleWheel);
//     };
//   }, [currentSlide]);

//   const getCardStyle = (index) => {
//     const position = index - currentSlide;

//     if (position === 0) {
//       return {
//         zIndex: cards.length,
//         transform: "translateY(0) scale(1)",
//         opacity: 1,
//       };
//     } else if (position < 0) {
//       return {
//         zIndex: cards.length + position,
//         transform: `translateY(-${Math.abs(position) * 40}px) scale(${
//           1 - Math.abs(position) * 0.05
//         })`,
//         opacity: 0.7 - Math.abs(position) * 0.2,
//       };
//     } else {
//       return {
//         zIndex: cards.length - position,
//         transform: `translateY(${position * 40}px) scale(${
//           1 - position * 0.05
//         })`,
//         opacity: 0.4 - position * 0.1,
//       };
//     }
//   };

//   return (
//     <section className={Style.what_section}>
//       <div className="custom-container">
//         <div className={Style.what_section_head}>
//           <div className={Style.what_section_head_left}>
//             <h2 className={Style.h_text_1}>What we Do?</h2>
//             <p className={Style.p_text_1}>
//               Transparency and accountability define our relationships at{" "}
//               <br className="tab-break break" /> every stage.
//             </p>
//           </div>

//           <p className={Style.p_text_2}>
//             Bridge Copper collaborates with leading international banks and{" "}
//             <br className="break tab-break " />
//             trade insurance providers, building trust and stability for long-{" "}
//             <br className="break tab-break " /> term procurement and investment
//             decisions.
//           </p>
//         </div>

//         <div className={Style.what_swiper_container} ref={swiperContainerRef}>
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className={`${Style.what_card} ${
//                 index === currentSlide
//                   ? Style.active
//                   : index < currentSlide
//                   ? Style.prev
//                   : Style.next
//               }`}
//               style={getCardStyle(index)}>
//               <div className={Style.card_left}>
//                 <h2 className={Style.h_text_2}>{card.title}</h2>
//                 <p className={Style.p_text_3}>{card.description}</p>
//               </div>
//               <img
//                 src={card.image}
//                 alt="card"
//                 width={493}
//                 height={478}
//                 className={Style.card_img}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatWeDo;

 
import React, { useEffect, useRef, useState } from "react";
import Style from "./WhatWeDo.module.scss";
import cardImg1 from "../../../../assets/images/what-card-img-1.svg";

const cardsData = [
  {
    title: "Direct Copper Sourcing",
    desc: "We build direct supply relationships with miners and smelters, reducing intermediary layers and optimizing trade margins.",
    img: cardImg1,
  },
  {
    title: "Exclusive Regional Supply",
    desc: "Bridge Copper ensures regional exclusivity, enabling buyers to secure consistent, reliable copper sources.",
    img: cardImg1,
  },
  {
    title: "Integrated Trade Logistics",
    desc: "Our logistics infrastructure ensures smooth and efficient movement from source to destination.",
    img: cardImg1,
  },
  {
    title: "Trusted Partnerships",
    desc: "Transparency and accountability are embedded throughout our operations, backed by international banks and trade insurance providers.",
    img: cardImg1,
  },
];

const WhatWeDo = ({isActive}) => {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Detect when section enters view
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView =
        rect.top <= window.innerHeight * 0.5 &&
        rect.bottom >= window.innerHeight * 0.5;

      if (inView && !isLocked) {
        setIsLocked(true);
        document.body.style.overflow = "hidden";
      } else if (!inView && isLocked && visibleCards === 0) {
        setIsLocked(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [isLocked, visibleCards]);

  // Strict scroll control inside section
  useEffect(() => {
    if (!isLocked) return;

    const handleWheel = (e) => {
      e.preventDefault();

      // If animation (card transition) is ongoing — block new scroll
      if (isAnimating) return;

      setIsAnimating(true);
      const direction = e.deltaY > 0 ? "down" : "up";

      if (direction === "down") {
        if (visibleCards < cardsData.length) {
          setVisibleCards((prev) => prev + 1);
        } else {
          // Unlock only after last card shown
          setTimeout(() => {
            document.body.style.overflow = "auto";
            setIsLocked(false);
            window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
          }, 300);
        }
      } else {
        if (visibleCards > 0) {
          setVisibleCards((prev) => prev - 1);
        } else {
          // Unlock only when first card is hidden
          setTimeout(() => {
            document.body.style.overflow = "auto";
            setIsLocked(false);
            window.scrollBy({ top: -window.innerHeight * 0.8, behavior: "smooth" });
          }, 300);
        }
      }

      // Debounce (prevents fast skips)
      setTimeout(() => setIsAnimating(false), 700);
    };

    // Disable native scroll
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isLocked, visibleCards, isAnimating]);

  return (
    <section id="third-section"  className={`${Style.what_section} ${isActive ? Style.active_section :" "}`} >
      <div className="custom-container">
        <div className={Style.what_section_head}>
          <div className={Style.what_section_head_left}>
            <h2 className={Style.h_text_1}>What We Do?</h2>
            <p className={Style.p_text_1}>
              Transparency and accountability define our relationships at{" "}
              <br className="tab-break break" /> every stage.
            </p>
          </div>
          <p className={Style.p_text_2}>
            Bridge Copper collaborates with leading international banks and{" "}
            <br className="break tab-break" />
            trade insurance providers, building trust and stability for long-{" "}
            <br className="break tab-break" /> term procurement and investment
            decisions.
          </p>
        </div>
      </div>

      {/* Scroll Cards */}
      <div className={Style.swiper_ref_container} ref={sectionRef}>
        <div className="custom-container">
          <div className={Style.what_swiper_container}>
            {cardsData.map((card, index) => (
              <div
                key={index}
                className={`${Style.what_card} ${
                  index < visibleCards ? Style.visible : ""
                }`}>
                <div className={Style.card_left}>
                  <h2 className={Style.h_text_2}>{card.title}</h2>
                  <p className={Style.p_text_3}>{card.desc}</p>
                </div>
                <img
                  src={card.img}
                  alt="card"
                  width={493}
                  height={478}
                  className={Style.card_img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

