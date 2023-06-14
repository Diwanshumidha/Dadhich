// import Footer from "../Footer/Footer";
// import Accordion_sm from "../element/accordion_sm";
// import Footer3 from "../layout/footer-3";
// import Header3 from "../layout/header-3";
// import Link from 'next/link';
import { Link } from "react-router-dom";
import DatingAccordion from "./DatingAccordion";
import { motion } from "framer-motion";
// import AccordonDuplicate from "./AccordonDuplicate";
// import DatingAccordion from "./DatingAccordion";

function DatingFAQ() {
  return (
    <>
      {/* <Header3/> */}
      <div className="page-content bg-white">
        {/* <!-- Banner End --> */}

        {/* <!-- Faq --> */}
        <section className="content-inner">
          <div className="container">
            <motion.div className="align-items-center faq_heading"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            >
              <h2>Frequently Asked Questions</h2>
            </motion.div>
            <div className="row align-items-center">
              <div
                className="col-lg-12 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <DatingAccordion />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <Footer3/> */}
      {/* <Footer/> */}
    </>
  );
}

export default DatingFAQ;
