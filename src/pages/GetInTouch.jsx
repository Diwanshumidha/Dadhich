import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsSkype } from "react-icons/bs";
import { motion } from "framer-motion";
import { client } from "../../sanityclient";
import emailjs from 'emailjs-com';

function GetInTouch() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    sendToDatabase(data)
    sendEmail(data);

  };

  function sendEmail(formData) {
    emailjs.init('H1gzgXLZ1Z9NxvYEK');
    emailjs
      .send("service_z6xpptm", "template_sv8se54", {
        from_name: formData.dzName,
        to_name: "Raj Singh",
        message: formData.dzmessage
      })
      .then((result) => {
        console.log(result.text);
        alert("Our Team Will Contact you soon");
      })
      .catch((error) => {
        console.log(error.text);
      });
    console.log(formData);
  }

  const sendToDatabase = async (data) => {
    try {
      const { dzName, countrycode, dzphone, dzEmail, dztitle, dzmessage } = data;
  
      const contactData = {
        _type: 'Contact',
        name: dzName,
        phone: `${countrycode} ${dzphone}`,
        email: dzEmail,
        title: dztitle,
        message: dzmessage
      };
  
      await client.create(contactData);
      console.log('Data sent to Sanity database:', contactData);
    } catch (error) {
      console.error('Error while sending data to Sanity database:', error);
    }
  };
  

  return (
    <>
      {/* <!-- Contact Form --> */}
      <section className="content-inner" id="contact">
        <motion.div
          className="container"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="row align-items-center">
            <motion.div
              className="col-lg-6 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <div className="dlab-media">
                <img src="images/about/img8.png" className="move-1" alt="" />
              </div>
            </motion.div>
            <motion.div
              className="col-lg-6 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <form
                className="dlab-form style-1 dzForm"
                onSubmit={handleSubmit}
              >
                <div className="section-head style-3">
                  <h2 className="title m-t10">
                    Get In Touch With Us
                    <br />
                  </h2>
                  <div className="dlab-separator style-2 bg-primary"></div>
                </div>
                <div className=".dlab-social-icon contact_dlab">
                  <h5
                    style={{ marginBottom: "40px", marginRight: "10px" }}
                  >
                    Reach Us On -
                  </h5>
                  <a
                    className="fa fa-whatsapp con_whatsapp"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    href="https://wa.me/+918696219723"
                  >
                    <AiOutlineWhatsApp />
                  </a>
                  <a
                    className="fa fa-skype con_whatsapp"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    href="https://www.skype.com/dadhichtechnologies.com"
                  >
                    <BsSkype />
                  </a>
                </div>
                <div className="dzFormMsg"></div>
                <input
                  type="hidden"
                  className="form-control"
                  name="dzToDo"
                  value="Contact"
                />
                <input
                  type="hidden"
                  className="form-control"
                  name="reCaptchaEnable"
                  value="0"
                />
                <motion.div
                  className="row"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  <div className="col-sm-12">
                    <div className="input-group">
                      <input
                        name="dzName"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-group">
                      <input
                        name="dzEmail"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div
                    className="col-sm-12"
                    style={{
                      display: "flex",
                    }}
                  >
                    <div
                      className="input-group code_group"
                      style={{
                        width: "20%",
                      }}
                    >
                      <input
                        name="countrycode"
                        type="text"
                        required
                        className="form-control code"
                        placeholder="+91"
                        style={{
                          borderTopRightRadius: "0 !important",
                          minWidth: "max-content !important",
                        }}
                      />
                    </div>
                    <div
                      className="input-group phno_group"
                      style={{
                        width: "80%",
                      }}
                    >
                      <input
                        name="dzphone"
                        type="text"
                        required=""
                        className="form-control phno"
                        placeholder="Phone No."
                        style={{
                          borderBottomLeftRadius: "0 !important",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-group">
                      <input
                        name="dztitle"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Project Title"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-group">
                      <select
                        name="dzlooking"
                        className="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option selected>Looking For</option>
                        <option value="1">Landing Page</option>
                        <option value="2">Portfolio WebSite</option>
                        <option value="3">Coperate Website</option>
                        <option value="4">E-Commerce Website</option>
                        <option value="5">
                          Multi-Vender E-Commerce Website
                        </option>
                        <option value="6">Dating-Matrimonial Website</option>
                        <option value="7">Coupon & Deal Website</option>
                        <option value="8">Small Business Website</option>
                        <option value="9">Custom Web Development</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-group">
                      <textarea
                        name="dzmessage"
                        className="form-control"
                        required
                        placeholder="Explain Requirements"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <button
                      type="submit"
                      className="btn btn-corner gradient btn-block btn-primary"
                    >
                      Submit Now
                    </button>
                  </div>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default GetInTouch;
