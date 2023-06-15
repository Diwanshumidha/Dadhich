import Counterup from "./Counterup";
import { motion } from "framer-motion";

function Counter3() {
  return (
    <>
      {/* <!-- Counters 3 --> */}
      <motion.div className="row" 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5 }}
      >
        <div
          className="col-sm-4 m-b30 wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <motion.div className="dlab-content-bx style-2 text-center" 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          >
            <div className="icon-content">
              <h2 className="counter m-b0">
                <Counterup count={127} />+ <br/>
              </h2>
              <span className="title">Satisfied Clients</span>
            </div>
          </motion.div>
        </div>
        <div
          className="col-sm-4 m-b30 wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.4s"
        >
          <motion.div className="dlab-content-bx style-2 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          >
            <div className="icon-content">
              <h2 className="counter m-b0">
                <Counterup count={320} />+ <br/>
              </h2>
              <span className="title">Project Lunched</span>
            </div>
          </motion.div>
        </div>
        <div
          className="col-sm-4 m-b30 wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <motion.div className="dlab-content-bx style-2 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          >
            <div className="icon-content">
              <h2 className="counter m-b0">
                <Counterup count={5} /><br/>
              </h2>
              <span className="title">Years Completed</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Counter3;
