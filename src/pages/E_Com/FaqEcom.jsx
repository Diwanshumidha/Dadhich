
import { Link } from "react-router-dom";
import AccordionEcom from "./AccordianEcom";
import { motion } from "framer-motion";

function FaqEcom() {
  return (
    <>
      {/* <Header3/> */}
      <div className="page-content bg-white">
        {/* <div className="dlab-bnr-inr style-1 bg-primary" style={{"backgroundImage":"url(images/banner/bnr2.png), var(--gradient-sec)","backgroundSize":"cover, 200%"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Faq</h1>
					<nav aria-label="breadcrumb" className="breadcrumb-row style-1">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">Faq</li>
						</ul>
					</nav>
				</div>
			</div>
		</div> */}
        {/* <!-- Banner End --> */}

        {/* <!-- Faq --> */}
        <motion.section className="content-inner"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        >
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
                <AccordionEcom/>
              </div>
              
            </div>
          </div>
        </motion.section>
      </div>
      {/* <Footer3/> */}
    </>
  );
}

export default FaqEcom;
