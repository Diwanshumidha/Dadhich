
import Header from "../components/Header/Header";
import { useEffect, useState } from 'react';
import GetInTouch from "./GetInTouch";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";


function ContactUs() {
  const [open, setOpen] = useState("home");
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr style-1 bg-primary"
          style={{
            backgroundImage: "url(images/banner/bnr2.png), var(--gradient-sec)",
            backgroundSize: "cover, 200%",
          }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Contact Us</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row style-1">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      <a>Home</a>
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        <GetInTouch/>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
