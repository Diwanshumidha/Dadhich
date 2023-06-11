import { Link } from "react-router-dom";
import {AiOutlineSwapRight ,AiFillMail } from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'
import { BsTelephoneFill } from "react-icons/bs";


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
                        <img src="images/logo_white.svg" style={{width:'190px' , height:'31px'}} alt="" />
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
                        <div style={{display:'flex',alignItems:'baseline',gap:'5px'}}>
                        <AiOutlineSwapRight/>
                        <a style={{padding:'0px'}}>Home</a>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">
                      <div style={{display:'flex',alignItems:'baseline',gap:'5px'}}>
                        <AiOutlineSwapRight/>
                        <a style={{padding:'0px'}}>About Us</a>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/service">
                      <div style={{display:'flex',alignItems:'baseline',gap:'5px'}}>
                        <AiOutlineSwapRight/>
                        <a style={{padding:'0px'}}>Services</a>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/ContactUs">
                      <div style={{display:'flex',alignItems:'baseline',gap:'5px'}}>
                        <AiOutlineSwapRight/>
                        <a style={{padding:'0px'}}>Contact Us</a>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        <div style={{display:'flex',alignItems:'baseline',gap:'5px'}}>
                        <AiOutlineSwapRight/>
                        <a style={{padding:'0px'}}>Blog</a>
                        </div>
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
                      <div style={{display:'flex',alignItems:'baseline',gap:'5px'}}>
                        <AiOutlineSwapRight/>
                        <a style={{padding:'0px'}}>Faq</a>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Portfolio">
                      <div style={{display:'flex',alignItems:'baseline',gap:'5px'}}>
                        <AiOutlineSwapRight/>
                        <a style={{padding:'0px'}}>Portfolio</a>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Privacy">
                      <div style={{display:'flex',alignItems:'baseline',gap:'5px'}}>
                        <AiOutlineSwapRight/>
                        <a style={{padding:'0px'}}>Privacy Policy</a>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Term">
                      <div style={{display:'flex',alignItems:'baseline',gap:'5px'}}>
                        <AiOutlineSwapRight/>
                        <a style={{padding:'0px'}}>Terms & Condition</a>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Ecom">
                      <div style={{display:'flex',alignItems:'baseline',gap:'5px'}}>
                        <AiOutlineSwapRight/>
                        <a style={{padding:'0px'}}>E-commerce</a>
                        </div>
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
                      <i className="fa fa-phone gradient">
                        <BsTelephoneFill/>
                      </i>
                      <span>+91 8696219723</span>
                    </li>
                    <li>
                      <i className="fa fa-envelope gradient">
                        <AiFillMail/>
                      </i>
                      <span>Info@DadhichTechnologies.com</span>
                    </li>
                    <li>
                      <i className="fa fa-map-marker gradient">
                        <ImLocation/>
                      </i>
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
                  <a href="https://dadhichtechnologies.com/">
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
