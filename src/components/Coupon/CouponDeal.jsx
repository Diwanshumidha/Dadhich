import React from "react";
import { Link } from "react-router-dom";
import OurFeatures from "../../pages/OurFeatures/OurFeatures";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CouponPortfolio from "./CouponPortfolio";
import Development from "./Development";
import CouponFeatures from "./CouponFeatures";
import FaqCoupon from "./FapCoupon";
import GetInTouch from "../../pages/GetInTouch";
import Process from "../Process/Process";
import { motion } from "framer-motion";


const CouponDeal = () => {
  return (
    <>
      <div className="business_section">
        <Header />
        {/* <div className="heading">
          <h1 className="main_heading">
          Affordable & Automated Coupon  & Deal Website Development
          </h1>
          <p className="para">
          Experience the perfect blend of affordability and stunning design with our coupon and deal website development services.
          </p>
          <div>
            <Link href="#contact">
              <a
                data-wow-delay="2s"
                data-wow-duration="3s"
                className="wow fadeInUp business_btn btn btn-corner gradient btn-primary"
              >
                <div className="fa fa-user"></div>
                <span>Hire Us</span>
              </a>
            </Link>
            <Link href="https://wa.me/+918696219723">
              <a
                data-wow-delay="2s"
                data-wow-duration="3s"
                className="wow fadeInUp business_btn business_btn--outline  btn btn-corner gradient btn-primary"
              >
                <div className="fa fa-whatsapp"></div>

                WHATSAPP
              </a>
            </Link>
          </div>
        </div> */}
        <div className="container">
          <div className="banner-inner rizwan">
            <div className="row align-items-center"
              style={{
                paddingTop: "10rem"
              }}
            >
              <motion.div className="col-md-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <div className="banner-content text-white"

                >
                  <motion.h6
                    data-wow-delay="0.5s"
                    data-wow-duration="3s"
                    className="wow fadeInUp sub-title text-yellow "
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                  >
                    TOP RATED COUPON & DEAL WEBSITE DEVELOPMENT
                  </motion.h6>
                  <br />
                  <br />
                  <motion.h1
                    data-wow-delay="1s"
                    data-wow-duration="3s"
                    className="wow fadeInUp m-b20 rizwan"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}

                    style={{
                      fontSize: "3rem",
                      paddingTop: "2rem",
                      color: "white"

                    }}
                  >
                    Affordable & Automated Coupon  & Deal Website Development
                  </motion.h1>
                  <p
                    data-wow-delay="1.5s"
                    data-wow-duration="3s"
                    className="wow fadeInUp m-b30"
                  >
                    Experience the perfect blend of affordability and stunning design with our coupon and deal website development services.
                  </p>
                  <motion.div className="button_container"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  >
                    <Link to="/GetInTouch">
                      <a
                        data-wow-delay="2s"
                        data-wow-duration="3s"
                        className="wow fadeInUp  btn btn-corner gradient btn-primary"
                      >
                        HIRE US
                      </a>
                    </Link>
                    {/* <Link to="#portfolio">
                      <a
                        data-wow-delay="2s"
                        data-wow-duration="3s"
                        className="wow fadeInUp  btn btn-corner hero_portfolio gradient btn-primary"
                      >
                        PORTFOLIO
                      </a>
                    </Link> */}
                    <Link to="https://wa.me/+918696219723">
                      <a
                        data-wow-delay="2s"
                        data-wow-duration="3s"
                        className="wow fadeInUp business_btn business_btn--outline  btn btn-corner gradient btn-primary"
                      >
                        <div className="fa fa-whatsapp"></div>
                        WHATSAPP
                      </a>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
              <div className="col-md-6">
                <div
                  className="dz-media wow fadeIn"
                  data-wow-delay="1s"
                  data-wow-duration="3s"
                >
                  <img
                    src="images/main-slider/slider3/pic1.png"
                    className="move-1"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurFeatures />
      <CouponPortfolio />
      <Development />
      <CouponFeatures />
      {/* <D_Portfolio hidden={true} category='ecom'></D_Portfolio> */}
      {/* <DuplicatePort/>
      <Process/>
  <FeaturesDuplicate/>*/}
      {/* <Process/> */}
      <FaqCoupon />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default CouponDeal;
