import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

function TeamSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="team-carousel2 owl owl-carousel owl-none owl-theme owl-dots-primary-full"
      >
        <SwiperSlide
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.1s"
        >
          <div className="dlab-team style-2 m-b10">
            <div className="dlab-media">
              <img src="images/team/small/pic1.jpg" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="/team-3">John Doe</a>
                </h3>
                <span className="dlab-position">Senior Designer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="dlab-team style-2 m-b10">
            <div className="dlab-media">
              <img src="images/team/small/pic2.jpg" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="/team-3">Emily Smith</a>
                </h3>
                <span className="dlab-position">Senior Designer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <div className="dlab-team style-2 m-b10">
            <div className="dlab-media">
              <img src="images/team/small/pic3.jpg" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="/team-3">Blake Run</a>
                </h3>
                <span className="dlab-position">Senior Designer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.4s"
        >
          <div className="dlab-team style-2 m-b10">
            <div className="dlab-media">
              <img src="images/team/small/pic4.jpg" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="/team-3">Jenna Smith</a>
                </h3>
                <span className="dlab-position">Senior Designer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.5s"
        >
          <div className="dlab-team style-2 m-b10">
            <div className="dlab-media">
              <img src="images/team/small/pic1.jpg" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="/team-3">John Doe</a>
                </h3>
                <span className="dlab-position">Senior Designer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div className="dlab-team style-2 m-b10">
            <div className="dlab-media">
              <img src="images/team/small/pic2.jpg" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="/team-3">Emily Smith</a>
                </h3>
                <span className="dlab-position">Senior Designer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.7s"
        >
          <div className="dlab-team style-2 m-b10">
            <div className="dlab-media">
              <img src="images/team/small/pic3.jpg" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="/team-3">Blake Run</a>
                </h3>
                <span className="dlab-position">Senior Designer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.8s"
        >
          <div className="dlab-team style-2 m-b10">
            <div className="dlab-media">
              <img src="images/team/small/pic4.jpg" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="/team-3">Jenna Smith</a>
                </h3>
                <span className="dlab-position">Senior Designer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.9s"
        >
          <div className="dlab-team style-2 m-b10">
            <div className="dlab-media">
              <img src="images/team/small/pic1.jpg" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="/team-3">John Doe</a>
                </h3>
                <span className="dlab-position">Senior Designer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="1.0s"
        >
          <div className="dlab-team style-2 m-b10">
            <div className="dlab-media">
              <img src="images/team/small/pic2.jpg" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="/team-3">Emily Smith</a>
                </h3>
                <span className="dlab-position">Senior Designer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="1.1s"
        >
          <div className="dlab-team style-2 m-b10">
            <div className="dlab-media">
              <img src="images/team/small/pic3.jpg" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="/team-3">Blake Run</a>
                </h3>
                <span className="dlab-position">Senior Designer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="1.2s"
        >
          <div className="dlab-team style-2 m-b10">
            <div className="dlab-media">
              <img src="images/team/small/pic4.jpg" alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="/team-3">Jenna Smith</a>
                </h3>
                <span className="dlab-position">Senior Designer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default TeamSlider;
