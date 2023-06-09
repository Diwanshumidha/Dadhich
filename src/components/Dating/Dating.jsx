import React from "react";
// import DuplicatePort from "./DuplicatePort";
// import DatingFAQ from "./DatingFAQ";
import GetInTouch from "../../pages/GetInTouch";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import DuplicatePort from "./DatingPort";

const Dating = () => {
  return (
    <>
      <div className="business_section">
        <Header/>
        <div className="heading">
          <h1 className="main_heading">
          Designing the Future of Love: Dating & Matrimonial Website
          </h1>
          <p className="para">
          Create your own dating website similar to Match.com, OkCupid or eHarmony.
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
      {/* <Features3 /> */}
      {/* <D_Portfolio hidden={true} category='ecom'></D_Portfolio> */}
      {/* <Port/> */}
      {/* <DuplicatePort/>
      <Process/> */}
      {/* <FeaturesDuplicate/> */}
      {/* <DatingFeatures/> */}
      {/* <DatingFAQ/> */}
      <DuplicatePort/>
      <GetInTouch/>
      
      <Footer/>
    </>
  );
};

export default Dating;
