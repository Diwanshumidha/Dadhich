import Accordion_sm from "./accordion_sm";
import Footer3 from "../../layout/footer-3";
import Header3 from "../../layout/header-3";
// import Link from 'next/link';
import { Link } from "react-router-dom";

function FAQ3() {
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
        <section className="content-inner">
          <div className="container">
            <div className="align-items-center faq_heading">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="row align-items-center">
              <div
                className="col-lg-12 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <Accordion_sm />
              </div>
              {/* <div className="col-lg-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<img src="images/about/img1.png" className="move-4" alt=""/>
					</div> */}
            </div>
          </div>
        </section>
      </div>
      {/* <Footer3/> */}
    </>
  );
}

export default FAQ3;
