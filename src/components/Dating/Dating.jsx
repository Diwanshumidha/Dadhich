import React from "react";
// import DuplicatePort from "./DuplicatePort";
// import DatingFAQ from "./DatingFAQ";
import GetInTouch from "../../pages/GetInTouch";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import DuplicatePort from "./DatingPort";
import Development from "../Coupon/Development";
import DatingFeatures from "./DatingFEatures";
import DatingFAQ from "./DatingFAQ";
import FeaturesDuplicate from "./FeaturesDuplicate";
import Process from "../Process/Process";
import CouponPortfolio from "../Coupon/CouponPortfolio";
import { motion } from "framer-motion";

const Dating = () => {
  return (
    <>
      <div className="business_section">
        <Header />

        <div className="container">
          <div className="banner-inner rizwan">
            <div
              className="row align-items-center"
              style={{
                paddingTop: "10rem",
              }}
            >
              <motion.div className="col-md-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}>
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
                    TOP RATED DATING MATRIMONIAL WEBSITE DEVELOPMENT
                  </motion.h6>
                  <br />
                  <br />

                  <motion.h1
                    data-wow-delay="1s"
                    data-wow-duration="3s"
                    className="wow fadeInUp m-b20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    style={{
                      fontSize: "3rem",
                      paddingTop: "2rem",
                      color: "white",
                    }}
                  >
                    Designing the Future of Love: Matrimonial & Dating Website
                  </motion.h1>
                  <motion.p
                    data-wow-delay="1.5s"
                    data-wow-duration="3s"
                    className="wow fadeInUp m-b30"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                  >
                    Create your own dating website similar to Match.com, OkCupid
                    or eHarmony.
                  </motion.p>
                  <div className="button_container"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                  >
                    <Link to="/GetInTouch">
                      <motion.a
                        data-wow-delay="2s"
                        data-wow-duration="3s"
                        className="wow fadeInUp  btn btn-corner gradient btn-primary"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                      >
                        HIRE US
                      </motion.a>
                    </Link>

                    <Link to="https://wa.me/+918696219723">
                      <motion.a
                        data-wow-delay="2s"
                        data-wow-duration="3s"
                        className="wow fadeInUp business_btn business_btn--outline  btn btn-corner gradient btn-primary"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                      >
                        <div className="fa fa-whatsapp"></div>
                        WHATSAPP
                      </motion.a>
                    </Link>
                  </div>
                </div>
              </motion.div>
              <div className="col-md-6">
                <motion.div
                  className="dz-media wow fadeIn"
                  data-wow-delay="1s"
                  data-wow-duration="3s"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  <img
                    src="images/main-slider/slider3/pic1.png"
                    className="move-1"
                    alt=""
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <DuplicatePort /> */}
      <CouponPortfolio />
      <Development />
      <DatingFeatures />

      <DatingFAQ />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Dating;
