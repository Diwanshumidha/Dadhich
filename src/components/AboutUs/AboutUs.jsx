import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../Header/Header";
import GetInTouch from "../../pages/GetInTouch";
import Footer from "../Footer/Footer";

import AboutTeamMembers from "../AboutTeamMembers/TeamMembers";
import AboutUs3 from "./AboutUs-3";

import ClientSlider from "../ClientSlider/Clients-3";
import Testimonial3 from "../AboutTestimonials/Testimonial-3";

import AboutService from "../AboutService/Service-3";

function AboutUs() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-1 bg-primary"
          style={{
            backgroundImage: "url(images/banner/bnr2.png), var(--gradient-sec)",
            backgroundSize: "cover, 200%",
          }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Dadhich Technologies</h1>
            </div>
          </div>
        </div>

        {/* <!-- About Us --> */}

        <AboutUs3 />

        {/* <Service3 /> */}
        <AboutService />

        {/* <!-- Team --> */}
        <section className="content-inner-1 bg-gray">
          <div className="container">
            <div className="section-head style-3 text-center">
              <h2 className="title">Our Team Members</h2>
              <div className="dlab-separator style-2 bg-primary"></div>
            </div>
            <div className="row my-3">
              <div className="col-lg-12">
                {/* <TeamMembers /> */}
                <AboutTeamMembers />
              </div>
            </div>
          </div>
          {/* <section className="content-inner-1 bg-gray">
          
        </section> */}
        </section>

        {/* <!-- Newsletter --> */}
        <section
          className="content-inner-3 wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
          style={{
            backgroundImage:
              "url(images/background/bg12.png), var(--gradient-sec)",
            backgroundSize: "cover, 200%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row align-items-center subscribe-wraper-1">
              <div className="col-lg-7 col-md-6">
                <h2 className="text-white title m-b30">
                  Subscribe To Our Newsletter For Latest Update Of New Products
                </h2>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="dlab-subscribe style-3 max-w500">
                  <form
                    className="dzSubscribe"
                    action="script/mailchamp.php"
                    method="post"
                  >
                    <div className="dzSubscribeMsg"></div>
                    <div className="form-group m-b30">
                      <div className="input-group mb-0">
                        <input
                          name="dzEmail"
                          required="required"
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                        <div className="input-group-addon">
                          <button
                            name="submit"
                            value="Submit"
                            type="submit"
                            className="btn btn-corner gradient shadow btn-primary"
                          >
                            Subscribe Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Testimonials --> */}
        {/* <BTestimonials /> */}
        <Testimonial3 />
        {/* <!-- Blog --> */}
        <section className="content-inner">
          <div className="container">
            <div className="section-head style-3 text-center">
              <h2 className="title">Our Blog & News</h2>
              <div className="dlab-separator style-2 bg-primary"></div>
            </div>
            <div className="row">
              <div
                className="col-xl-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="dlab-blog blog-half m-b30">
                  <div className="dlab-media">
                    <img src="images/blog/default/thum1.jpg" alt="" />
                  </div>
                  <div className="dlab-info">
                    <h5 className="dlab-title">
                      <Link to="/blog-details-3">
                        <a>
                          Vestibulum massa arcu, consectetu pellentesque
                          scelerisque.
                        </a>
                      </Link>
                    </h5>
                    <p>
                      Sed quis sagittis velit. Aliquam velit eros, bibendum ut
                      massa et, consequat laoreet erat nam ac imperdiet.
                    </p>
                    <div className="dlab-meta">
                      <ul>
                        <li className="post-date">
                          <i className="flaticon-clock m-r10"></i>7 March, 2020
                        </li>
                        <li className="post-comment">
                          <a href="#">
                            <i className="flaticon-speech-bubble"></i>
                            <span>15</span>
                          </a>
                        </li>
                        <li className="post-share">
                          <i className="flaticon-share"></i>
                          <ul>
                            <li>
                              <a className="fa fa-facebook" href="#"></a>
                            </li>
                            <li>
                              <a className="fa fa-twitter" href="#"></a>
                            </li>
                            <li>
                              <a className="fa fa-linkedin" href="#"></a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="dlab-blog blog-half m-b30">
                  <div className="dlab-media">
                    <img src="images/blog/default/thum2.jpg" alt="" />
                  </div>
                  <div className="dlab-info">
                    <h5 className="dlab-title">
                      <Link to="/blog-details-3">
                        <a>
                          Quisque sem tortor, convallis in arcu eu, accumsan
                          finibus massa.
                        </a>
                      </Link>
                    </h5>
                    <p>
                      Sed quis sagittis velit. Aliquam velit eros, bibendum ut
                      massa et, consequat laoreet erat nam ac imperdiet.
                    </p>
                    <div className="dlab-meta">
                      <ul>
                        <li className="post-date">
                          <i className="flaticon-clock m-r10"></i>7 March, 2020
                        </li>
                        <li className="post-comment">
                          <a href="#">
                            <i className="flaticon-speech-bubble"></i>
                            <span>15</span>
                          </a>
                        </li>
                        <li className="post-share">
                          <i className="flaticon-share"></i>
                          <ul>
                            <li>
                              <a className="fa fa-facebook" href="#"></a>
                            </li>
                            <li>
                              <a className="fa fa-twitter" href="#"></a>
                            </li>
                            <li>
                              <a className="fa fa-linkedin" href="#"></a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div className="dlab-blog blog-half m-b30">
                  <div className="dlab-media">
                    <img src="images/blog/default/thum3.jpg" alt="" />
                  </div>
                  <div className="dlab-info">
                    <h5 className="dlab-title">
                      <Link to="/blog-details-3">
                        <a>
                          Praesent ut lobortis purus hasellus libero orci,
                          accumsan
                        </a>
                      </Link>
                    </h5>
                    <p>
                      Sed quis sagittis velit. Aliquam velit eros, bibendum ut
                      massa et, consequat laoreet erat nam ac imperdiet.
                    </p>
                    <div className="dlab-meta">
                      <ul>
                        <li className="post-date">
                          <i className="flaticon-clock m-r10"></i>7 March, 2020
                        </li>
                        <li className="post-comment">
                          <a href="#">
                            <i className="flaticon-speech-bubble"></i>
                            <span>15</span>
                          </a>
                        </li>
                        <li className="post-share">
                          <i className="flaticon-share"></i>
                          <ul>
                            <li>
                              <a className="fa fa-facebook" href="#"></a>
                            </li>
                            <li>
                              <a className="fa fa-twitter" href="#"></a>
                            </li>
                            <li>
                              <a className="fa fa-linkedin" href="#"></a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.8s"
              >
                <div className="dlab-blog blog-half m-b30">
                  <div className="dlab-media">
                    <img src="images/blog/default/thum4.jpg" alt="" />
                  </div>
                  <div className="dlab-info">
                    <h5 className="dlab-title">
                      <Link to="/blog-details-3">
                        <a>
                          Fusce sem ligula, imperdiet sed nisi sit amet, euismod
                          posuere.
                        </a>
                      </Link>
                    </h5>
                    <p>
                      Sed quis sagittis velit. Aliquam velit eros, bibendum ut
                      massa et, consequat laoreet erat nam ac imperdiet.
                    </p>
                    <div className="dlab-meta">
                      <ul>
                        <li className="post-date">
                          <i className="flaticon-clock m-r10"></i>7 March, 2020
                        </li>
                        <li className="post-comment">
                          <a href="#">
                            <i className="flaticon-speech-bubble"></i>
                            <span>15</span>
                          </a>
                        </li>
                        <li className="post-share">
                          <i className="flaticon-share"></i>
                          <ul>
                            <li>
                              <a className="fa fa-facebook" href="#"></a>
                            </li>
                            <li>
                              <a className="fa fa-twitter" href="#"></a>
                            </li>
                            <li>
                              <a className="fa fa-linkedin" href="#"></a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Clients Logo --> */}
        <div className="p-tb50 bg-gray">
          <div className="container">
            <div className="clients-carousel owl-none owl-carousel">
              {/* <ClientSlider /> */}
            </div>
          </div>
        </div>

        {/* <!-- Contact Form --> */}
        <GetInTouch />
        {/* <section className="content-inner">
          
        </section> */}
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
