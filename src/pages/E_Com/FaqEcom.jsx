
import { Link } from "react-router-dom";
import AccordionEcom from "./AccordianEcom";

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
                <AccordionEcom/>
              </div>
              
            </div>
          </div>
        </section>
      </div>
      {/* <Footer3/> */}
    </>
  );
}

export default FaqEcom;
