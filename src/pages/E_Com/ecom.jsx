import React from "react";
// import Header3 from "../layout/header-3";
// import Link from "next/link";
import {Link} from "react-router-dom";
import Header from "../../components/Header/Header";
import Process from "../../components/Process/Process";
import GetInTouch3 from "../../components/GetInTouch/get-in-touch";
import OurFeatures from "../OurFeatures/OurFeatures";
import EUserFeature from "./EcomUserFeatures";
import EComPortfolio from "../../components/Portfolio/EComPortfolio";
import Footer from "../../components/Footer/Footer";
import FaqEcom from "./FaqEcom";
import GetInTouch from "../GetInTouch";

const E_Com = () => {
  return (
    <>
      <div className="business_section">
        {/* <Header3 /> */}
        <Header/>
        <div className="heading">
          <h1 className="main_heading">
            Unlock Your Ecommerce Success with a Stunning Online Presence
          </h1>
          <p className="para">
            Open the doors to ecommerce success. Our digital agency creates
            stunning online experiences that captivate customers and drive
            tangible results.
          </p>
          <div>
            <Link to="#contact">
              <a
                data-wow-delay="2s"
                data-wow-duration="3s"
                className="wow fadeInUp business_btn btn btn-corner gradient btn-primary"
              >
                <div className="fa fa-user"></div>
                <span>Hire Us</span>
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
      <OurFeatures/>

      <EComPortfolio hidden={true} category='ecom'/>
      {/* <EUserFeature hidden={true} category='ecom'/> */}
      {/* <Process/> */}
      {/* <D_Features/> */}
      {/* <FAQ3/> */}
      {/* <GetInTouch3 /> */}
      
      {/* <Footer3/> */}
      <FaqEcom/>
      <GetInTouch/>
      <Footer/>
    </>
  );
};

export default E_Com;
