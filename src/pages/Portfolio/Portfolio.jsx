// import s from "../Coupon/css/Portfolio.module.css";
// import Card from "../Coupon/Card/Card";
// import Footer from "../Footer/Footer";
// import Header from "../Header/Header";
// import p from './Port.module.css';

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import D_Portfolio from '../../components/D_Portfolio/D_Portfolio'

const buttons = [
  "All Product",
  "Wordpress",
  "Html",
  "Dashboard",
  "React",
  "Laravel",
  "Angular",
  "Mobile App",
  "All Product",
  "Wordpress",
  "Html"
];

const Portfolio = ( ) => {
  return (
    <>
      <Header />
      <div
        className="dlab-bnr-inr style-1 bg-primary"
        style={{
          backgroundImage: "url(images/banner/bnr2.png), var(--gradient-sec)",
          backgroundSize: "cover, 200%",
        }}
      >
        <div className="container">
          <div className="dlab-bnr-inr-entry">
           
            <h1>Portfolio</h1>

          </div>
        </div>
      </div>
      <D_Portfolio category="all product" hidden={false}/>
      <Footer />
    </>
  );
};

export default Portfolio;