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

const CouponDeal = () => {
  return (
    <>
      <div className="business_section">
        <Header/>
        <div className="heading">
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
        </div>
      </div>
      <OurFeatures/>
      <CouponPortfolio/>
      <Development/>
      <CouponFeatures/>
      {/* <D_Portfolio hidden={true} category='ecom'></D_Portfolio> */}
      {/* <DuplicatePort/>
      <Process/>
  <FeaturesDuplicate/>*/}
      {/* <Process/> */}
      <FaqCoupon/>
      <GetInTouch/> 
      <Footer/>
    </>
  );
};

export default CouponDeal;
