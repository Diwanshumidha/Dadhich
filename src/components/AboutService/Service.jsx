import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
// import TestimonialSlider4 from "../component/TestimonialSlider-4";

function Service() {
  const [open, setOpen] = useState("p2");
  return (
    <>
      {/* <!-- Service --> */}
      <motion.section className="content-inner" id="service"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5 }}
      >
        <div className="container">
          <motion.div className="section-head style-3 text-center mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          >
            <h2 className="title">Our Speciallization <br /></h2>
            <div className="dlab-separator style-2 bg-primary"></div>
          </motion.div>
          <div className="row">
            <motion.div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div
                className={`${open === "p1"
                    ? "icon-bx-wraper style-5 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-5 box-hover text-center m-b30"
                  }`}
                onMouseOver={() => setOpen("p1")}
              >
                <div className="icon-bx">
                  <span className="icon-cell">
                    <i className="flaticon-office"></i>
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
            </motion.div>
            <motion.div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div
                className={`${open === "p2"
                    ? "icon-bx-wraper style-5 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-5 box-hover text-center m-b30"
                  }`}
                onMouseOver={() => setOpen("p2")}
              >
                <div className="icon-bx">
                  <span className="icon-cell">
                    <i className="flaticon-coding"></i>
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
                  <Link to="/services-3">
                    <a className="btn btn-outline-primary service_btn">
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div
                className={`${open === "p3"
                    ? "icon-bx-wraper style-5 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-5 box-hover text-center m-b30"
                  }`}
                onMouseOver={() => setOpen("p3")}
              >
                <div className="icon-bx">
                  <span className="icon-cell">
                    <i className="flaticon-laptop"></i>
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
                  <Link to="/services-3">
                    <a className="btn btn-outline-primary service_btn">
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
          {/* <TestimonialSlider4/> */}
        </div>
      </motion.section>
    </>
  );
}

export default Service;
