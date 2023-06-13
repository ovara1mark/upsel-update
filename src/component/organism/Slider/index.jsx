import React, { useRef, useState } from "react";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./slider.css";
import { HeroSection, HeroSectionThree, HeroSectionTwo } from "../../molecules";

const FadeExample = () => {
  return (
    <div id="/">
      <Fade arrows={false}>
        <HeroSection />
        <HeroSectionThree />
        <HeroSectionTwo />
      </Fade>
    </div>
  );
};

export default FadeExample;
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./slider.css";
// import { HeroSection, HeroSectionThree, HeroSectionTwo } from "../../molecules";

// // import required modules
// import { Autoplay, EffectFade, Pagination } from "swiper";

// export default function App() {
//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         effect={"fade"}
//         centeredSlides={true}
//         pagination={{
//           clickable: true,
//           el: `swiper-container swiper-container-testClass`,
//           bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`,
//         }}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         modules={[Autoplay, EffectFade, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <HeroSectionTwo />
//         </SwiperSlide>

//         <SwiperSlide>
//           <HeroSectionThree />
//         </SwiperSlide>

//         <SwiperSlide>
//           <HeroSection />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
