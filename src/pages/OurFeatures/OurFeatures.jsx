import { GiBrain } from "react-icons/gi";
import { TfiVector } from "react-icons/tfi";
import { FaLaptopCode } from "react-icons/fa";
// import { GiRocketThruster } from "react-icons/gi";
import { RxRocket } from "react-icons/rx";


function OurFeatures() {
  return (
    <>
      {/* <!-- Our Fetures --> */}
      <section className="content-inner bg-white " id="feature">
        <div className="container my-3">
          <div className="section-head style-3 text-center">
            <h2 className="title">Why Choose Us <br/></h2>
            <div className="dlab-separator style-2 bg-primary"></div>
          </div>
          <div className="row align-items-center about-wraper-2">
            <div className="col-lg-4">
              <div className="row">
                <div
                  className="col-lg-12 col-md-6 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div className="icon-bx-wraper left m-b50 icon-up">
                    <div className="icon-bx-sm radius gradient-sec shadow-primary m-b20">
                      <a href="#" className="icon-cell text-white">
                        <GiBrain className="flaticon-idea"></GiBrain>
                      </a>
                    </div>
                    <div className="icon-content">
                      <h4 className="dlab-tilte text-capitalize">
                        Professional Results
                      </h4>
                      <p>
                        Exceeding expectations with professional web development
                        that delivers exceptional results.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-12 col-md-6 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.4s"
                >
                  <div className="icon-bx-wraper left m-b50 icon-up">
                    <div className="icon-bx-sm radius gradient-sec shadow-primary m-b20">
                      <a href="#" className="icon-cell text-white">
                        <TfiVector className="flaticon-vector"></TfiVector>
                      </a>
                    </div>
                    <div className="icon-content">
                      <h4 className="dlab-tilte text-capitalize">
                        Cost Efficiency
                      </h4>
                      <p>
                        Maximize your budget with our web development agency's
                        cost-efficient solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 wow zoomIn"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="dz-media text-center m-b30">
                <img src="images/about/img7.png" className="move-1" alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div
                  className="col-lg-12 col-md-6 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div className="icon-bx-wraper left m-b50 icon-up">
                    <div className="icon-bx-sm radius gradient-sec shadow-primary m-b20">
                      <a href="#" className="icon-cell text-white">
                        <FaLaptopCode className="flaticon-coding"></FaLaptopCode>
                      </a>
                    </div>
                    <div className="icon-content">
                      <h4 className="dlab-tilte text-capitalize">
                        Custom Solutions
                      </h4>
                      <p>
                        Personalized web development solutions tailored to match
                        your distinct vision and goals.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-12 col-md-6 wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.4s"
                >
                  <div className="icon-bx-wraper left m-b50 icon-up">
                    <div className="icon-bx-sm radius gradient-sec shadow-primary m-b20">
                      <a href="#" className="icon-cell text-white">
                        <RxRocket className="flaticon-rocket"></RxRocket>
                      </a>
                    </div>
                    <div className="icon-content">
                      <h4 className="dlab-tilte text-capitalize">
                        Technical Support
                      </h4>
                      <p id="portfolio">
                        Reliable technical assistance available to ensure smooth
                        operation and optimal performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurFeatures;
