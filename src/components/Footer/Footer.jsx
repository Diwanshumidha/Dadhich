import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer
        className="site-footer style-3"
        id="footer"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/ScmfTd5/bg1.jpg'), var(--gradient-sec)",
          backgroundSize: "cover, 200%",
        }}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-5 col-lg-12 col-md-4 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="widget widget_about">
                  <div className="footer-logo">
                    <Link href="/">
                      <a>
                        <img src="images/logo-white.png" alt="" />
                      </a>
                    </Link>
                  </div>
                  <p>
                    Join us on a transformative journey where your digital
                    dreams become awe-inspiring realities.
                    <br />
                    <br />
                    Let's craft a digital masterpiece together.
                  </p>
                  <div className="dlab-social-icon">
                    <ul>
                      <li>
                        <a
                          className="fa fa-whatsapp"
                          href="https://wa.me/+918696219723"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-skype"
                          href="https://join.skype.com/invite/sNPTbGeKymg2"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-linkedin"
                          href="https://www.linkedin.com/company/dadhich-technologies/"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-twitter"
                          href="https://twitter.com/DadhichTech"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-instagram"
                          href="https://instagram.com/dadhichtechnologies"
                        ></a>
                      </li>
                      {/* <li>
												<a className="fa fa-envelope gradient text-white" href="mailto:max.Info@DadhichTechnologies.com"></a>
												 <span>Info@DadhichTechnologies.com</span> 
											</li> */}
                      <li>
                        <a
                          className="fa fa-envelope gradient text-white"
                          href="mailto:max.Info@DadhichTechnologies.com"
                        ></a>
                        {/* <span>Info@DadhichTechnologies.com</span> */}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="widget widget_services style-1">
                  <h5 className="footer-title">Our links</h5>
                  <ul>
                    <li>
                      <Link to="#">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/service">
                        <a>Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/ContactUs">
                        <a>Contact Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        <a>Blog</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="widget widget_services style-1">
							<h5 className="footer-title">Our Services</h5>
							<ul>
								<li><Link href="#"><a>Strategy & Research</a></Link></li>
								<li><Link href="#"><a>Web Development</a></Link></li>
								<li><Link href="#"><a>Web Solution</a></Link></li>
								<li><Link href="#"><a>Digital Marketing</a></Link></li>
								<li><Link href="#"><a>App Design </a></Link></li>
							</ul>
						</div>
                    </div> */}
              <div
                className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.8s"
              >
                <div className="widget widget_services style-1">
                  <h5 className="footer-title">Other links</h5>
                  <ul>
                    <li>
                      <Link to="#">
                        <a>FAQ</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Portfolio">
                        <a>Portfolio</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Privacy">
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Term">
                        <a>Terms & Conditions</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Ecom">
                        <a>E-Commerce</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-4  col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="1.0s"
              >
                <div className="widget widget_getintuch">
                  <h5 className="footer-title">Contact Us</h5>
                  <ul>
                    <li>
                      <i class="fa fa-phone gradient"></i>
                      <span>+91 8696219723</span>
                    </li>
                    <li>
                      <i className="fa fa-envelope gradient"></i>
                      <span>Info@DadhichTechnologies.com</span>
                    </li>
                    <li>
                      <i className="fa fa-map-marker gradient"></i>
                      <span>155, Mata Ka Than, Jodhpur, India 342001</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 text-center">
                <span className="copyright-text">
                  Copyright © 2022{" "}
                  <a href="https://dadhichtechnologies.com/" target="_blank">
                    Dadhich Technologies
                  </a>
                  . All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer End --> */}
    </>
  );
}

export default Footer;
