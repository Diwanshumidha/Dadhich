// import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import {Autoplay} from "swiper"

function ClientSlider3() {
  
  return (
    <>
      {/* <!-- Clients Logo --> */}

      <Swiper 
      spaceBetween={30}
        centeredSlides={true}
        slidesPerView={6}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}>
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
        <div className="item">
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
        </div>
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
        <div className="item">
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
        </div>
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

export default ClientSlider3;
