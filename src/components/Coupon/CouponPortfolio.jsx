import React from "react";
import s from "./css/Portfolio.module.css";
import Card from "./Card/Card";
import { motion } from "framer-motion";


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

const CouponPortfolio = ({ hidden }) => {
  hidden ? hidden : hidden = false
  return (
    <>
      {/* <Header3 /> */}

      <div className={s.d_portfolio}>
        <div className={s.d_heading}>
          {/* <span>Our Creative Work</span> */}
          <motion.h1 className={s.yes}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >Portfolio</motion.h1>
          {/* <span>
          Now, We show you our some latest and finest projects of our company.
          These all peerless projects boom in online marketing with highly rated
          features. Let's see these outstanding projects.
          </span> */}
          {
            !hidden ?
              <motion.div className={`${s.filter_button} container`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                {buttons.map((name) => (
                  <button id={name}>{name}</button>
                ))}
              </motion.div>
              : <></>

          }
          <div className={s.portfolio}>
            <motion.div className={`${s.card_container}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              {/* <Link href="/about"><a><Card/></a></Link> */}

            </motion.div>
          </div>
        </div>
      </div>
      {/* <Footer3 /> */}
    </>
  );
};

export default CouponPortfolio;
