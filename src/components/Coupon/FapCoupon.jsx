import { motion } from "framer-motion";
import AccordionCoupn from "./AccordianCoupon";


function FaqCoupon() {
    return (
      <>
      {/* <Header3/> */}
        <div className="page-content bg-white">
          {/* <!-- Banner End --> */}
          
          {/* <!-- Faq --> */}
          <section className="content-inner">
              <motion.div className="container"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              >
                  <motion.div className="align-items-center faq_heading">
                      <h2>Frequently Asked Questions</h2>
                  </motion.div>
                  <div className="row align-items-center">
                      <div className="col-lg-12 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                          <AccordionCoupn/>
                      </div>
                  </div>
              </motion.div>
          </section>
              
      </div>
      {/* <Footer3/> */}
      </>
    )
  }
  
  export default FaqCoupon;