import Counter3 from "../Counter/counter3";
import { motion } from "framer-motion";

// import Counter3 from "./counter3";
function AboutUs3() {
  return (
    <>
      {/* <!-- About Us --> */}
      <motion.section className="content-inner " id="about"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5 }}
      >
        <div className="container">
          <div className="row">
            <motion.div className="col-lg-6 m-b30"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            >
              <div className="dz-media">
                <img src="images/about/img6.png" className="move-2" alt="" />
              </div>
            </motion.div>
            <div className="col-lg-6">
              <motion.div className="section-head style-3 mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              >
                <motion.h2 className="title" 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                >Why Our Agency <br/></motion.h2>
                <div className="dlab-separator style-2 bg-primary"></div>
              </motion.div>
              <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}>
                Welcome to{" "}
                <span className="dadhich_text">Dadhich Technologies</span>, we
                are the architects of extraordinary digital experiences. With a
                perfect fusion of creativity, innovation, and technical
                expertise, we weave intricate codes into stunning websites that
                transcend expectations. From sleek designs to seamless
                functionality, we tailor every pixel to reflect your unique
                brand identity.
              </motion.p>
              <motion.p className="m-b30"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}>
                Join us on a transformative journey where your digital dreams
                become awe-inspiring realities. Let's craft a digital
                masterpiece together.
              </motion.p>
              {/* <Counter3 /> */}
              <Counter3 />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default AboutUs3;
