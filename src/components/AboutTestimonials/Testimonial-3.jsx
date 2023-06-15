import { motion } from "framer-motion";
import TestimonialSlider3 from "./TestimonialSlider-3";


function Testimonial3() {
  return (
    <>
      <motion.section className="content-inner-1 bg-gray bg_tree"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5 }}
      >
        <div className="container">
          <motion.div className="section-head style-3 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          >
            <h2 className="title white">What Our Clients Say’s <br/></h2>
            <div className="dlab-separator style-2 bg-primary"></div>
          </motion.div>
          <TestimonialSlider3 />
        </div>
      </motion.section>
    </>
  );
}

export default Testimonial3;
