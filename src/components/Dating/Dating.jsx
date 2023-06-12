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

const Dating = () => {
  return (
    <>
      <div className="business_section">
        <Header />

        <div className="container">
          <div className="banner-inner">
            <div
              className="row align-items-center"
              style={{
                paddingTop: "10rem",
              }}
            >
              <div className="col-md-6">
                <div className="banner-content text-white">
                  <h6
                    data-wow-delay="0.5s"
                    data-wow-duration="3s"
                    className="wow fadeInUp sub-title text-yellow"
                  >
                    BEST DATING MATRIMONIAL WEBSITE DEVELOPMENT
                  </h6>
                  <br />
                  <br />

                  <h1
                    data-wow-delay="1s"
                    data-wow-duration="3s"
                    className="wow fadeInUp m-b20"
                    style={{
                      fontSize: "3rem",
                      paddingTop: "2rem",
                      color: "white",
                    }}
                  >
                    Designing the Future of Love: Dating & Matrimonial Website
                  </h1>
                  <p
                    data-wow-delay="1.5s"
                    data-wow-duration="3s"
                    className="wow fadeInUp m-b30"
                  >
                    Create your own dating website similar to Match.com, OkCupid
                    or eHarmony.
                  </p>
                  <div className="button_container">
                    <Link to="/GetInTouch">
                      <a
                        data-wow-delay="2s"
                        data-wow-duration="3s"
                        className="wow fadeInUp  btn btn-corner gradient btn-primary"
                      >
                        HIRE US
                      </a>
                    </Link>
                   
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
                  </div>
                </div>
              </div>
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
      <DuplicatePort />
      <Development />
      <DatingFeatures />

      <DatingFAQ />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Dating;
