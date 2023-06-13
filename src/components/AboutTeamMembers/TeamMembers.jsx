
import c from "./TeamMembers.module.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { Autoplay } from "swiper";

function TeamMembers() {
  return (
    <>
    <div className="responsive">
    <section className={c.laptop}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={3}
        initialSlide={1}
        loop={true}
        autoplay={{
          delay: 3000,
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
              <img src="images/team/small/Rakesh1.jpeg" alt="Rakesh1.jpeg" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="/team-3">
                    Rakesh Dadhich <br />
                  </a>
                </h3>
                <span className="dlab-position">Director</span>
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
              <img src="images/team/small/Praveen1.jpeg" alt="Praveen1.jpeg" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="/team-3">
                    Praveen Dadhich <br />
                  </a>
                </h3>
                <span className="dlab-position">Director</span>
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
              <img src="images/team/small/Bina.jpeg" alt="Bina Kunadiya" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="/team-3">
                    {" "}
                    Bina Kunadiya <br />
                  </a>
                </h3>
                <span className="dlab-position">Full Stack Developer</span>
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
              <img src="images/team/small/Diwanshu.jpeg" alt="Diwanshu.jpeg" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="/team-3">
                    {" "}
                    Diwanshu Midha <br />
                  </a>
                </h3>
                <span className="dlab-position">Full Stack Developer</span>
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
              <img src="images/team/small/Sartaj.jpg" alt="Sartaj.jpg" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="/team-3">
                    Sartaj Saifi <br />
                  </a>
                </h3>
                <span className="dlab-position">Full Stack Developer</span>
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
              <img src="images/team/small/Surjeet1.jpeg" alt="Surjeet1.jpeg" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="/team-3">
                    {" "}
                    Surjeet Chaudhary <br />{" "}
                  </a>
                </h3>
                <span className="dlab-position">WordPress Developer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </section>
    <section className={c.phone}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        initialSlide={1}
        loop={true}
        autoplay={{
          delay: 3000,
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
              <img src="images/team/small/Rakesh1.jpeg" alt="Rakesh1.jpeg" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a className="done" href="/team-3">
                    Rakesh Dadhich <br />
                  </a>
                </h3>
                <span id="working" className="dlab-position">Director</span>
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
              <img src="images/team/small/Praveen1.jpeg" alt="Praveen1.jpeg" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a className="done" href="/team-3">
                    Praveen Dadhich <br />
                  </a>
                </h3>
                <span id="working" className="dlab-position">Director</span>
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
              <img src="images/team/small/Bina.jpeg" alt="Bina Kunadiya" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a className="done" href="/team-3">
                    {" "}
                    Bina Kunadiya <br />
                  </a>
                </h3>
                <span id="working" className="dlab-position">Full Stack Developer</span>
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
              <img src="images/team/small/Diwanshu.jpeg" alt="Diwanshu.jpeg" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a className="done" href="/team-3">
                    {" "}
                    Diwanshu Midha <br />
                  </a>
                </h3>
                <span id="working" className="dlab-position">Full Stack Developer</span>
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
              <img src="images/team/small/Sartaj.jpg" alt="Sartaj.jpg" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a className="done" href="/team-3">
                    Sartaj Saifi <br />
                  </a>
                </h3>
                <span id="working" className="dlab-position">Full Stack Developer</span>
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
              <img src="images/team/small/Surjeet1.jpeg" alt="Surjeet1.jpeg" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a className="done" href="/team-3">
                    {" "}
                    Surjeet Chaudhary <br />{" "}
                  </a>
                </h3>
                <span id="working" className="dlab-position">WordPress Developer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </section>
      </div>
    </>
  );
}

export default TeamMembers;
