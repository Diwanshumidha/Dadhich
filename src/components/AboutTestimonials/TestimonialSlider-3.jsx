

import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { motion } from "framer-motion";

function TestimonialSlider3() {
  // const settings = {
  // 	dots: true,
  // 	infinite: true,
  // 	slidesToShow: 1,
  // 	slidesToScroll: 1,
  // 	autoplay: true,
  // 	speed: 3500,
  // 	arrows: false,
  // };
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        className="testimonials-carousel2 owl-carousel owl-theme owl-none owl-theme owl-dots-primary-full wow fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.6s"
      >
        <SwiperSlide className="item">
          <motion.div className="testimonial-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}>
            <div className="testimonial-pic ">
              <img src="images/testimonials/JoshuaSophy.jpeg" alt="" />
            </div>
            <div className="testimonial-text">
              <p className="white">
                Rakesh has done an amazing job for me. I started with nothing
                and no idea and now have a great site ready for the next stage
                of my business development. He was extremely patient with me
                while I dealt with a temporary illness and has been very
                responsive to my requested changes and he provides top-notch
                help, especially for someone like me who's all thumbs when it
                comes to this service.
              </p>
              <strong className="testimonial-name white">Joshuasophy</strong>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <motion.div className="testimonial-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          >
            <div className="testimonial-pic ">
              <img src="images/testimonials/FinCross.jpeg" alt="" />
            </div>
            <div className="testimonial-text">
              <p className="white">
                This guy went above and beyond to give me a website needed.
                Amazing communication and a long term partnership formed!
              </p>
              <strong className="testimonial-name white">Fincross777</strong>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <motion.div className="testimonial-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          >
            <div className="testimonial-pic ">
              <img src="images/testimonials/MichealMcFarland.jpeg" alt="" />
            </div>
            <div className="testimonial-text">
              <p className="white">
                His communication is fantastic, and the result is exactly what
                we wanted we had a couple features which caused a delay on the
                delivery. He shared the challenges right away, I saw how much
                time and hard he worked to solve the challenge. will use him
                again.
              </p>
              <strong className="testimonial-name white">Memberbiz</strong>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="item">
          <motion.div className="testimonial-2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          >
            <div className="testimonial-pic ">
              <img src="images/testimonials/Kenyeben.jpeg" alt="" />
            </div>
            <div className="testimonial-text">
              <p className="white">
             
                He is very detailed on making sure that everything exceeds my
                expectations. I have worked with him before and will work with
                him again.
              </p>
              <strong className="testimonial-name white">Kenyeben</strong>
            </div>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default TestimonialSlider3;
