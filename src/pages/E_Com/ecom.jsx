import React from "react";
// import Header3 from "../layout/header-3";
// import Link from "next/link";
import {Link} from "react-router-dom";
import Header from "../../components/Header/Header";
import Features3 from "../../components/Features/OurFeatures-3";
import D_Portfolio from "../../components/Portfolio/D_Portfolio";
import Process from "../../components/Process/Process";
import Footer3 from "../../layout/footer-3";
import D_Features from "../../components/Features/D_Features/D_Features";
import FAQ3 from "../../components/FAQ/Faq";
import GetInTouch3 from "../../components/GetInTouch/get-in-touch";

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
      <Features3 />
      <D_Portfolio hidden={true} category='ecom'></D_Portfolio>
      {/* <Process/> */}
      {/* <D_Features/> */}
      {/* <FAQ3/> */}
      {/* <GetInTouch3 /> */}
      
      {/* <Footer3/> */}
    </>
  );
};

export default E_Com;
