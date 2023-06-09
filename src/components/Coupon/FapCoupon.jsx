import AccordionCoupn from "./AccordianCoupon";

function FaqCoupon() {
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
                          <AccordionCoupn/>
                      </div>
                  </div>
              </div>
          </section>
              
      </div>
      {/* <Footer3/> */}
      </>
    )
  }
  
  export default FaqCoupon;