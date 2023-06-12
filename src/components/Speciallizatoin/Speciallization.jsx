import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { MdDesignServices } from "react-icons/md";
// import TestimonialSlider4 from "../component/TestimonialSlider-4";

function Speciallization() {
  const [open, setOpen] = useState("p2");
  return (
    <>
      {/* <!-- Service --> */}
      <section className="content-inner" id="service">
        <div className="container">
          <div className="section-head style-3 text-center mb-4">
            <h2 className="title">Our Speciallization <br/></h2>
            <div className="dlab-separator style-2 bg-primary"></div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div
                className={`${
                  open === "p1"
                    ? "icon-bx-wraper style-5 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-5 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p1")}
              >
                <div className="icon-bx">
                  <span className="icon-cell">
                    <MdDesignServices className="flaticon-office"></MdDesignServices>
                  </span>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15 cap">Ui/Ux Design</h4>
                  <p className="m-b20">
                    Step into a world of captivating design and unforgettable
                    user experiences. Our UI/UX wizards weave magic through
                    visually stunning interfaces that leave users breathless.
                    Elevate your digital presence with our expertise and watch
                    your audience fall in love at first click.
                  </p>
                  <Link to="/services-3">
                    <a className="btn btn-outline-primary service_btn">
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div
                className={`${
                  open === "p2"
                    ? "icon-bx-wraper style-5 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-5 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p2")}
              >
                <div className="icon-bx">
                  <span className="icon-cell">
                    <FaLaptopCode className="flaticon-coding"></FaLaptopCode>
                  </span>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15 cap">Web Development</h4>
                  <p className="m-b20">
                    Elevate your business with our expert web development
                    services. We craft stunning and functional websites,
                    ensuring seamless user experiences across devices. Let us
                    bring your digital dreams to life.
                  </p>
                  <Link href="/services-3">
                    <a className="btn btn-outline-primary service_btn">
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div
                className={`${
                  open === "p3"
                    ? "icon-bx-wraper style-5 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-5 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p3")}
              >
                <div className="icon-bx">
                  <span className="icon-cell">
                    <SlGraph className="flaticon-laptop"></SlGraph>
                  </span>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15 cap">
                    Advertisement Service
                  </h4>
                  <p className="m-b20">
                    Unlock the power of effective advertising with our strategic
                    services. We craft compelling campaigns that ignite audience
                    engagement, boost brand visibility, and drive measurable
                    results. Let your brand shine and soar above
                    the competition.
                  </p>
                  <Link href="/services-3">
                    <a className="btn btn-outline-primary service_btn">
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <TestimonialSlider4/> */}
        </div>
      </section>
    </>
  );
}

export default Speciallization;
