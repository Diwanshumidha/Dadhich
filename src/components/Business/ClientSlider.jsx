import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";
// import SwiperCore, { Navigation } from "swiper/core";

// SwiperCore.use([Navigation]);

function ClientSlider() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/logo/logo-blue1.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="images/logo/logo-light1.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/logo/logo-blue2.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="images/logo/logo-light2.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/logo/logo-blue3.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="images/logo/logo-light3.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/logo/logo-blue6.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="images/logo/logo-light6.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/logo/logo-blue4.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="images/logo/logo-light4.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/logo/logo-blue5.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="images/logo/logo-light5.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/logo/logo-blue6.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="images/logo/logo-light6.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ClientSlider;
