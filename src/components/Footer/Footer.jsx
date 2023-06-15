import { Link } from "react-router-dom";
import {AiOutlineSwapRight ,AiFillMail } from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'
import { BsTelephoneFill } from "react-icons/bs";
import { BsInstagram,BsTwitter,BsLinkedin,BsSkype,BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";


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
                    Let's craft a digital masterpiece together.
                  </p>
                  <div className="dlab-social-icon">
                    <ul>
                      <li>
                        <a
                          className="linkedin fa fa-whatsapp"
                          href="https://wa.me/+918696219723"
                        ><BsWhatsapp className="fa fa-whatsapp" aria-hidden="true"></BsWhatsapp></a>
                      </li>
                      <li>
                        <a
                          className="linkedin fa fa-skype"
                          href="https://join.skype.com/invite/sNPTbGeKymg2"
                        ><BsSkype className="fa fa-skype" aria-hidden="true"></BsSkype></a>
                      </li>
                      <li>
                        <a
                          className="linkedin fa fa-linkedin"
                          href="https://www.linkedin.com/company/dadhich-technologies/"
                        ><BsLinkedin className="fa fa-linkedin" aria-hidden="true"></BsLinkedin></a>
                      </li>
                      <li>
                        <a
                          className="linkedin fa fa-twitter"
                          href="https://twitter.com/DadhichTech"
                        >
                          <BsTwitter className="fa fa-twitter" aria-hidden="true"></BsTwitter>
                        </a>
                      </li>
                      <li>
                        <a
                          className="linkedin fa fa-instagram"
                          href="https://instagram.com/dadhichtechnologies"
                        >
                        <BsInstagram className="fa fa-instagram" aria-hidden="true"></BsInstagram>
                        </a>
                      </li>
                      {/* <li>
												<a className="fa fa-envelope gradient text-white" href="mailto:max.Info@DadhichTechnologies.com"></a>
												 <span>Info@DadhichTechnologies.com</span> 
											</li> */}
											<li>
												<a className="linkedin" href="mailto:max.Info@DadhichTechnologies.com"><HiOutlineMail className="fa fa-envelope gradient text-white"></HiOutlineMail></a>
											</li>


										</ul>
									</div>
								</div>
							</div>
							<div className="col-xl-2 col-lg-3 col-md-4  col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
								<div className="widget widget_services style-1">
									<h5 className="footer-title">Our links</h5>
									<ul>
										<li><Link to="/"><a>Home</a></Link></li>
										<li><Link to="/AboutUs"><a>About Us</a></Link></li>
										<li><Link to="/Service"><a>Services</a></Link></li>
										<li><Link to="/ContactUs"><a>Contact Us</a></Link></li>
										<li><Link to="/blog"><a>Blog</a></Link></li>
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
                      <Link to="/Dating">
                      <div style={{display:'flex',alignItems:'baseline',gap:'5px'}}>
                        <AiOutlineSwapRight/>
                        <a style={{padding:'0px'}}>Dating & Matrimonial Website</a>
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
                        <a style={{padding:'0px'}}>E-commerce Development</a>
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
                  Copyright © 2021{" "}
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
