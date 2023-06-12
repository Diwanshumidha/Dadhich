import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Slider_Home from "../../components/Slider/Slider";
import Speciallization from "../../components/Speciallizatoin/Speciallization";
import OurFeatures from "../OurFeatures/OurFeatures";
import OurAgency from "../../components/AboutUs/AboutUs-3";
import D_Portfolio from "../../components/D_Portfolio/D_Portfolio";
import Newsletter from "../Newsletter/Newsletter-3";
import Testimonial3 from "../../components/AboutTestimonials/Testimonial-3";
function Index3() {
  return (
    <>
      <div className="home">
        <Header />
        <div className="page-content" id="top">
          <Slider_Home />
          <Speciallization />
          <OurAgency />
          <OurFeatures />
          <D_Portfolio category={'all product'} />
          
          <Newsletter />
          <Testimonial3 />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Index3;
