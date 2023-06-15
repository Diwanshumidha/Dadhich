import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import s from "../Coupon/css/Portfolio.module.css"

function Slider_Home() {
  return (
    <>
      <div class="banner-three bg-primary" style={{
        backgroundImage:
          "url(images/background/bg5.png), url(images/background/bg6.png), var(--gradient-sec)",
      }}

      >
        <div class="container">
          <div class="banner-inner">
            <div class="row align-items-center">
              <div class="col-md-6">
                <motion.div class="banner-content text-white"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                >
                  <motion.h6 class="wow fadeInUp sub-title text-yellow" data-wow-delay="0.5s" data-wow-duration="3s"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5 }}>
                    TOP RATED WEB DEVELOPMENT AGENCY
                  </motion.h6>
                  <motion.h1 id={s.size} className="wow fadeInUp m-b20" data-wow-delay="1s" data-wow-duration="3s"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  >
                    Empowering Businesses With Innovative Web Development.
                  </motion.h1>
                  <motion.p class="wow fadeInUp m-b30" data-wow-delay="1.5s" data-wow-duration="3s"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5 }}>
                    Empower your business with our innovative web development solutions. From captivating designs to enhanced user experiences, we drive growth and elevate your online presence. Partner with us today for success.
                  </motion.p>
                  <motion.div class="button_container"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  >
                    <motion.a href="/GetInTouch" class="wow fadeInUp btn btn-corner gradient btn-primary" data-wow-delay="2s" data-wow-duration="3s"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    >
                      HIRE US
                    </motion.a>
                    <motion.a href="#portfolio" class="wow fadeInUp btn btn-corner hero_portfolio gradient btn-primary" data-wow-delay="2s" data-wow-duration="3s"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    >
                      PORTFOLIO
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
              <motion.div class="col-md-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              >
                <div class="dz-media wow fadeIn" data-wow-delay="1s" data-wow-duration="3s">
                  <img src="images/main-slider/slider3/pic1.png" class="move-1" alt="" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>




    </>
  );
}

export default Slider_Home;
