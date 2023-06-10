import Counter3 from "../Counter/counter3";

// import Counter3 from "./counter3";
function AboutUs3() {
  return (
    <>
      {/* <!-- About Us --> */}
      <section className="content-inner " id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-b30">
              <div className="dz-media">
                <img src="images/about/img6.png" className="move-2" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-head style-3 mb-4">
                <h2 className="title">Why Our Agency</h2>
                <div className="dlab-separator style-2 bg-primary"></div>
              </div>
              <p>
                Welcome to{" "}
                <span className="dadhich_text">Dadhich Technologies</span>, we
                are the architects of extraordinary digital experiences. With a
                perfect fusion of creativity, innovation, and technical
                expertise, we weave intricate codes into stunning websites that
                transcend expectations. From sleek designs to seamless
                functionality, we tailor every pixel to reflect your unique
                brand identity.
              </p>
              <p className="m-b30">
                Join us on a transformative journey where your digital dreams
                become awe-inspiring realities. Let's craft a digital
                masterpiece together.
              </p>
              {/* <Counter3 /> */}
              <Counter3 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs3;
