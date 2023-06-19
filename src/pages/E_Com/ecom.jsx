import {Link} from "react-router-dom";
import Header from "../../components/Header/Header";
import Process from "../../components/Process/Process";
import OurFeatures from "../OurFeatures/OurFeatures";
import Footer from "../../components/Footer/Footer";
import EUserFeature from './EcomUserFeatures'
import FaqEcom from "./FaqEcom";
import GetInTouch from "../GetInTouch";
import EComPortfolio from "./EComPortfolio";
import Portfolio from "../../components/D_Portfolio/D_Portfolio";
import Development from "../../components/Coupon/Development";

const E_Com = () => {
  return (
    <>
      <div className="business_section">
        {/* <Header3 /> */}
        <Header />

        {/* <div className="heading">
          <h6
            data-wow-delay="0.5s"
            data-wow-duration="3s"
            className="wow fadeInUp sub-title text-yellow"
          >
            BEST E-COMMERCE WEBSITE & APP DEVELOPMENT
          </h6>
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
        </div> */}

        <div
          className="banner-three bg-primary"
          style={{
            backgroundImage:
              "url(images/background/bg5.png), url(images/background/bg6.png), var(--gradient-sec)",
          }}
        >


          
          <div className="container">
            <div className="banner-inner new">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="banner-content text-white">
                    <h6
                      data-wow-delay="0.5s"
                      data-wow-duration="3s"
                      className="wow fadeInUp sub-title text-yellow rizwan"
                      
                    >
                      BEST E-COMMERCE WEBSITE & APP DEVELOPMENT
                    </h6>
                    <h1
                      data-wow-delay="1s"
                      data-wow-duration="3s"
                      className="wow fadeInUp m-b20"
                    >
                      Unlock Your Ecommerce Success with a Stunning
                      Online Presence
                    </h1>
                    <p
                      data-wow-delay="1.5s"
                      data-wow-duration="3s"
                      className="wow fadeInUp m-b30"
                    >
                      Open the doors to ecommerce success. Our digital agency
                      creates stunning online experiences that captivate
                      customers and drive tangible results.
                    </p>
                    <div className="button_container">
                      <Link to="/GetInT">
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
      </div>
      <OurFeatures />

      {/* <EComPortfolio hidden={true} category='ecom'/> */}
      <Portfolio/>
      {/* <EUserFeature hidden={true} category='ecom'/> */}
      {/* <Process/> */}
      <Development/>
      <EUserFeature/>
      <FaqEcom/>
      <GetInTouch/>
      <Footer/>
    </>
  );
};

export default E_Com;
