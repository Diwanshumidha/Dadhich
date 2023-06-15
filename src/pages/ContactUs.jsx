
import Header from "../components/Header/Header";
import { useEffect, useState } from 'react';
import GetInTouch from "./GetInTouch";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


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
          <motion.div className="container"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}>
            <div className="dlab-bnr-inr-entry">
              <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              >Contact Us</motion.h1>
              <motion.nav aria-label="breadcrumb" className="breadcrumb-row style-1"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              >
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      <a>Home</a>
                    </Link>
                  </li>
                </ul>
              </motion.nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </motion.div>
        </div>
        <GetInTouch/>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
