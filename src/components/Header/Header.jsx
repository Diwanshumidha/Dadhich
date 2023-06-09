import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function Header() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState("home");

  /* for class fixed  */
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  
  return (
    <>
      {/* <!-- Header --> */}
      <header className="site-header header-transparent mo-left">
        {/* <!-- Main Header --> */}
        <div
          className={`sticky-header main-bar-wraper navbar-expand-lg ${
            scroll ? "is-fixed" : ""
          }`}
        >
          <div className="main-bar clearfix   "> 
            <div className="container clearfix">
              {/* <!-- Website Logo --> */}
              <div className="logo-header mostion logo-dark ">
                <Link to="/">
                  <a>
                    <img 
                      className="custom-logo"
                      src={scroll?"images/logo_dark.svg":"images/logo_white.svg"}/>
                  </a>
                </Link>
              </div>
              {/* <!-- Nav Toggle Button --> */}
              <button
                className={`navbar-toggler collapsed navicon justify-content-end ${
                  show ? "open" : ""
                }`}
                onClick={() => setShow(!show)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              {/* <!-- Extra Nav --> */}
              <div className="extra-nav">
                <div className="extra-cell">
                  <Link to="/ContactUs">
                    <a className="btn btn-corner gradient btn-primary">
                      <div className="fa fa-angle-right m-r10"></div>
                     <b style={{color:'white'}}>Get A Quote</b> 
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className={`header-nav navbar-collapse collapse justify-content-end ${
                  show ? "show" : ""
                }`}
                id="navbarNavDropdown"
              >
                <div className="logo-header">
                  <Link to="/">
                    <a>
                      <img src="images/logo_dark.svg" alt="" />
                    </a>
                  </Link>
                </div>
                <ul className="nav navbar-nav navbar">
                  <li>
                    <Link to="/">
                      <a>Home</a>
                    </Link>
                  </li>

                  <li className={`${open === "services" ? "open" : ""}`}>
                    <a onClick={() => setOpen("services")}>
                      <span className="animate ahmad">Services</span>
                      <i className="fa fa-chevron-down">
                      </i>
                    </a>
                    <ul className="sub-menu">
                      {/* <li>
                        <Link to="/Business">
                          <a>Business Web Development</a>
                        </Link>
                      </li> */}
                      <li>
                      
                        <Link to="/ecom">
                          
                          <a>E-commerce Website</a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/CouponDeal">
                          <a>Coupon & Deal Website</a>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Dating">
                          <a>Dating & Matrimonial Website</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/Portfolio">
                      <a>Portfolio</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/AboutUs">
                      <a>About Us</a>
                    </Link>
                  </li>

                  {/* <li>
                    <Link to="/blog">
                      <a>Blog</a>
                    </Link>
                  </li> */}
                </ul>
                <div className="dlab-social-icon">
                  <ul>
                    <Link to="/#">
                      <a className="fa fa-facebook"></a>
                    </Link>
                    <Link to="/#">
                      <a className="fa fa-twitter"></a>
                    </Link>
                    <Link to="/#">
                      <a className="fa fa-linkedin"></a>
                    </Link>
                    <Link to="/#">
                      <a className="fa fa-instagram"></a>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Main Header End --> */}
      </header>
      {/* <!-- Header End --> */}
    </>
  );
}

export default Header;



