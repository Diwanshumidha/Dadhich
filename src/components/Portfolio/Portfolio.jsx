import React from "react";
import s from "../Coupon/css/Portfolio.module.css";
import Card from "../Coupon/Card/Card";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import p from './Port.module.css';


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

const Portfolio = ({ hidden }) => {
  hidden ? hidden : hidden = false
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
      <div className={s.d_portfolio}>
        <div className={s.d_heading}>
          {/* <span>Our Creative Work</span> */}
          {/* <h1 className={p.yes}>Portfolio</h1> */}
          
          {
            !hidden ?
              <div className={`${s.filter_button} container`}>
                {buttons.map((name) => (
                  <button id={name}>{name}</button>
                ))}
              </div>
              : <></>

          }
          <div className={s.portfolio}>
            <div className={`${s.card_container}`}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              {/* <Link href="/about"><a><Card/></a></Link> */}

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
