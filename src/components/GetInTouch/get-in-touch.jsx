// import Link from "next/link";
import emailjs from 'emailjs-com';
import { Link } from "react-router-dom";
function GetInTouch3() {
  
  const [formData, setFormData] = useState({
    dzName: "",
    dzEmail: "",
    countrycode: "",
    dzOtherPhone: "",
    dzOtherProjectTitle: "",
    lookingFor: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  function sendEmail() {
    emailjs.init('XTxFCKzsCuNFAGr-c');
    emailjs
      .send("service_912yeux", "template_n5xtppd", {
        from_name: formData.dzName,
        to_name: "Raj Singh",
        message: formData.
      })
      .then((result) => {
        window.location.reload();
        console.log(result.text);
        alert("done");
      })
      .catch((error) => {
        console.log(error.text);
      });
  }

  return (
    <>
      {/* <!-- Contact Form --> */}
      <section className="content-inner" id="contact">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="dlab-media">
                <img src="images/about/img8.png" className="move-1" alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <form
                className="dlab-form style-1 dzForm"
                method="POST"
                action="script/contact.php"
              >
                <div className="section-head style-3">
                  <h2 className="title m-t10">Get In Touch With Us</h2>
                  <div className="dlab-separator style-2 bg-primary"></div>
                </div>
                <div className=".dlab-social-icon contact_dlab">
                  <h5
                    style={{ "margin-bottom": "40px", "margin-right": "10px" }}
                  >
                    Reach Us On -
                  </h5>
                  <a
                    class="fa fa-whatsapp con_whatsapp"
                    href="https://twitter.com/login?lang=en"
                  ></a>
                  <a
                    class="fa fa-skype con_whatsapp"
                    href="https://twitter.com/login?lang=en"
                  ></a>
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
                <div className="row">
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
                        className="form-control code "
                        placeholder="+91"
                        style={{ "border-top-right-radius": "0 !important;  " }}
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
                        class="form-control phno"
                        placeholder="Phone No."
                        style={{
                          "border-bottom-left-radius": "0 !important;  ",
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
                        name='dzlookingfor'
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
                        name='message'
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetInTouch3;
