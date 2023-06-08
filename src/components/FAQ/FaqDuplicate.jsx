import Accordion_sm from "../element/accordion_sm";
import Footer3 from "../layout/footer-3";
import Header3 from "../layout/header-3";
import { Link } from "react-router-dom";
import AccordonDuplicate from "./AccordonDuplicate";


function FaqDuplicate() {
  return (
    <>
	{/* <Header3/> */}
      <div className="page-content bg-white">
		{/* <!-- Banner End --> */}
		
		{/* <!-- Faq --> */}
		<section className="content-inner">
			<div className="container">
				<div className="align-items-center faq_heading">
					<h2>Frequently Asked Questions</h2>
				</div>
				<div className="row align-items-center">
					<div className="col-lg-12 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<AccordonDuplicate/>
					</div>
				</div>
			</div>
		</section>
			
	</div>
	{/* <Footer3/> */}
    </>
  )
}

export default FaqDuplicate;