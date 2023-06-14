import React from "react";
// import { Carousel } from 'react-responsive';
import s from "../Coupon/css/CouponFeatures.module.css";
// import img_logo from "../../../public/svg/svgexport-12.svg";
import { useState } from "react";

import { addtocart,alert,browser,calculator,cashback,compare,coupon,daily,deal,email,excusive,expired,feature,language,location,offer,optimization,personalization,printer,profile,reviews,search,share,socialmedia,store,update,vote,vaucher } from "./Features/User";
import { addvertise,affiliat,analytics,approved,calender,cashless,category,communication,creater,feedback,help,lifestyle,management,newsletter,performance,restore,secure,seo,ui } from "./Features/User";


const userfeatures = [
  {
    name: "Search Functionality",
    link: search,
  },
  {
    name: "Deal Categories",
    link: deal,
  },
  {
    name: "Featured Deals",
    link: feature,
  },
  {
    name: "Exclusive Offers",
    link: excusive,
  },
  {
    name: "Coupon Codes",
    link: coupon,
  },
  {
    name: "Printable Coupons",
    link: coupon,
  },
  {
    name: "Email Subscriptions",
    link: email,
  },
  {
    name: "User Accounts",
    link: profile,
  },
  {
    name: "Social Media Integration",
    link: socialmedia,
  },
  {
    name: "User Reviews and Ratings",
    link: reviews,
  },
  {
    name: "Expiration Dates",
    link: expired,
  },
  {
    name: "Deal Alerts",
    link: deal,
  },
  {
    name: "Savings Calculators",
    link: calculator,
  },
  {
    name: "Store Pages",
    link: store,
  },
  {
    name: "Mobile Optimization",
    link: optimization,
  },
  {
    name: "Location-Based Deals",
    link: location,
  },
  {
    name: "Coupon Printing",
    link: coupon,
  },
  {
    name: "Deal Exclusivity",
    link: excusive,
  },
  {
    name: "Deal Voting and Ranking",
    link: vote,
  },
  {
    name: "Price Comparison",
    link: compare,
  },
  {
    name: "Cashback Offers",
    link: cashback,
  },
  {
    name: "Daily Deals",
    link: daily,
  },
  {
    name: "Automatic Deal Updates",
    link: update,
  },
  {
    name: "Deal Sharing",
    link: share,
  },
  {
    name: "Wishlist and Save for Later",
    link: addtocart,
  },
  {
    name: "Browser Extensions",
    link: browser,
  },
  {
    name: "Personalized Recommendation",
    link: personalization,
  },
  {
    name: "Multi-Language Support",
    link: language,
  },
];

const adminfeatures = [
  {
    name: "Auto Coupon Import",
    link: coupon,
  },
  {
    name: "Frontend Deal Submission ",
    link: deal,
  },
  {
    name: "User Management",
    link: management,
  },
  {
    name: "Coupon/Deal Management",
    link: deal,
  },
  {
    name: "Category Management",
    link: category,
  },
  {
    name: "Store Management",
    link: store,
  },
  {
    name: "Featured Deals Management",
    link: feature,
  },
  {
    name: "Expiry Management",
    link: expired,
  },
  {
    name: "Deal Approval",
    link: approved,
  },
  {
    name: "User Feedback Management",
    link: feedback,
  },
  {
    name: "Analytics and Reporting",
    link: analytics,
  },
  {
    name: "Advertising and Promotion",
    link: addvertise,
  },
  {
    name: "Newsletter Management",
    link: newsletter,
  },
  {
    name: "Search Engine Optimization (SEO)",
    link: seo,
  },
  {
    name: "Social Media Integration",
    link: search,
  },
  {
    name: "Coupon Printing Management",
    link: printer,
  },
  {
    name: "User Communication",
    link: communication,
  },
  {
    name: "Affiliate Management",
    link: affiliat,
  },
  {
    name: "Content Management System (CMS)",
    link: management,
  },
  {
    name: "Deal Scheduling",
    link: calender,
  },
  {
    name: "Discount Rules and Restrictions",
    link: offer,
  },
  {
    name: "User Activity Tracking",
    link: lifestyle,
  },
  {
    name: "Backup and Restore",
    link: restore,
  },
  {
    name: "Security and Access Control",
    link: secure,
  },
  {
    name: "Payment Integration",
    link: cashless,
  },
  {
    name: "Performance Optimization",
    link: performance,
  },
  {
    name: "Help and Documentation",
    link: help,
  },
];





const CouponFeatures = () => {
  const [checked, setchecked] = useState('user');
  const handleChange = (type) => {
    setchecked(type);
  };

  // const [items, setItems] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dispayedadmin = expanded ? adminfeatures : adminfeatures.slice(0, 8);
  const dispayeduser = expanded ? userfeatures : userfeatures.slice(0, 8);

  // console.log(dispayedadmin);

  return (
    <section className={s.section}>
      <div className={`${s.container} container`}>
        <h2>Top Features</h2>
        <div className={`radio_inputs ${s.toggle}`}>
          <label className="radio" htmlFor="rad1">
            <input type="radio" name="radio" id="rad1" checked={checked === 'user'} onChange={() => handleChange('user')}/>
            <span className="name" >User</span>
          </label>
          <label className="radio" htmlFor="rad2">
            <input type="radio" name="radio" id="rad2" checked={checked === 'admin'} onChange={() => handleChange('admin')} />
            <span className="name" >Admin</span>
          </label>
        </div>

        <div className={s.card_container}>
          {checked === 'user'
            ? dispayeduser.map((item ) => {
                return (
                  <Card
                    name={item.name}
                    ids={userfeatures.findIndex((element) => element === item)}
                    img_logo={item.link}  
                  />
                );
              })
            : dispayedadmin.map((item) => (
                <Card
                  name={item.name}
                  ids={adminfeatures .findIndex((element) => element === item)}
                  img_logo={item.link} 
                />
              ))}
        </div>
        <button onClick={handleExpandClick}>{!expanded?'More Features':'Show Less'}</button>
      </div>
    </section>
  );
};

const Card = ({ name, ids , img_logo:image_link }) => {
  return (
    <div className={`${s.card} ${ids}`} id={ids} >
      {/* <Image src={img_logo} width={60} height={60}></Image> */}
      {/* {console.log(image_link)} */}
          <img src={image_link} width={60} height={60} alt="Image logo" />
          
      <h4>{name}</h4>
    </div>
  );
};

export default CouponFeatures;
