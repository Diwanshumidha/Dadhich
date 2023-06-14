import { motion } from "framer-motion";
function Newsletter3() {
  return (
    <>
      {/* <!-- Newsletter --> */}
      <motion.section
        className="content-inner-3 wow fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.6s"
        style={{
          backgroundImage:
            "url(images/background/bg12.png), var(--gradient-sec)",
          backgroundSize: "cover, 200%",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="container">
          <div className="row align-items-center subscribe-wraper-1">
            <motion.div className="col-lg-7 col-md-6" style={{marginBottom:'1rem !important'}}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            >
              <h2 className="text-white title m-b30" >
                Subscribe To Our Newsletter For Latest Update Of New Products
              </h2>
            </motion.div>
            <motion.div className="saifi col-lg-5 col-md-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            >
              <div className="dlab-subscribe style-3 max-w500">
                <form
                  className="dzSubscribe"
                  action="script/mailchamp.php"
                  method="post"
                >
                  <div className="dzSubscribeMsg"></div>
                  <div className="form-group m-b30">
                    <div className="input-group mb-0">
                      <input
                        name="dzEmail"
                        required="required"
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                      />
                      <div className="input-group-addon">
                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          className=" sartaj btn btn-corner gradient shadow btn-primary"
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Newsletter3;
