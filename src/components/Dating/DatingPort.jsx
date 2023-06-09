import React from "react";
import s from "../Coupon/css/Portfolio.module.css";
import Header from "../Header/Header";
import Card from "../Coupon/Card/Card";
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

const DuplicatePort = ({ hidden }) => {
  hidden ? hidden : hidden = false
  return (
    <>
      <Header/>
    
      <div className={s.d_portfolio}>
        <div className={s.d_heading}>
          {/* <span>Our Creative Work</span> */}
          {/* <h1 className={p.yes}>Portfolio</h1> */}
          {/* <span>
          Now, We show you our some latest and finest projects of our company.
          These all peerless projects boom in online marketing with highly rated
          features. Let's see these outstanding projects.
        </span> */}
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
      {/* <Footer3 /> */}
    </>
  );
};

export default DuplicatePort;
