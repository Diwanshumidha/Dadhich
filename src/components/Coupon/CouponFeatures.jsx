import React from "react";
import { Carousel } from 'react-responsive';
import s from "../Coupon/css/CouponFeatures.module.css";
import img_logo from "../../../public/svg/svgexport-12.svg";
import { useState } from "react";


const userfeatures = [
  {
    name: "Search Functionality",
    link: "address",
  },
  {
    name: "Deal Categories",
    link: "filter",
  },
  {
    name: "Featured Deals",
    link: "/images/featureslogo/icon23",
  },
  {
    name: "Exclusive Offers",
    link: "/images/featureslogo/icon24",
  },
  {
    name: "Coupon Codes",
    link: "/images/featureslogo/icon25",
  },
  {
    name: "Printable Coupons",
    link: "/images/featureslogo/icon26",
  },
  {
    name: "Email Subscriptions",
    link: "/images/featureslogo/icon27",
  },
  {
    name: "User Accounts",
    link: "/images/featureslogo/icon28",
  },
  {
    name: "Social Media Integration",
    link: "/images/featureslogo/icon29",
  },
  {
    name: "User Reviews and Ratings",
    link: "/images/featureslogo/icon30",
  },
  {
    name: "Expiration Dates",
    link: "/images/featureslogo/icon31",
  },
  {
    name: "Deal Alerts",
    link: "/images/featureslogo/icon32",
  },
  {
    name: "Savings Calculators",
    link: "/images/featureslogo/icon33",
  },
  {
    name: "Store Pages",
    link: "/images/featureslogo/icon34",
  },
  {
    name: "Mobile Optimization",
    link: "/images/featureslogo/icon35",
  },
  {
    name: "Location-Based Deals",
    link: "/images/featureslogo/icon36",
  },
  {
    name: "Coupon Printing",
    link: "/images/featureslogo/icon37",
  },
  {
    name: "Deal Exclusivity",
    link: "/images/featureslogo/icon38",
  },
  {
    name: "Deal Voting and Ranking",
    link: "/images/featureslogo/icon39",
  },
  {
    name: "Price Comparison",
    link: "/images/featureslogo/icon40",
  },
  {
    name: "Cashback Offers",
    link: "/images/featureslogo/icon40",
  },
  {
    name: "Daily Deals",
    link: "/images/featureslogo/icon40",
  },
  {
    name: "Automatic Deal Updates",
    link: "/images/featureslogo/icon40",
  },
  {
    name: "Deal Sharing",
    link: "/images/featureslogo/icon40",
  },
  {
    name: "Wishlist and Save for Later",
    link: "/images/featureslogo/icon40",
  },
  {
    name: "Browser Extensions",
    link: "/images/featureslogo/icon40",
  },
  {
    name: "Personalized Recommendation",
    link: "/images/featureslogo/icon40",
  },
  {
    name: "Multi-Language Support",
    link: "/images/featureslogo/icon40",
  },
];

const adminfeatures = [
  {
    name: "Auto Coupon Import",
    link: "",
  },
  {
    name: "Frontend Deal Submission ",
    link: "/images/featureslogo/icon2",
  },
  {
    name: "User Management",
    link: "/images/featureslogo/icon3",
  },
  {
    name: "Coupon/Deal Management",
    link: "/images/featureslogo/icon4",
  },
  {
    name: "Category Management",
    link: "/images/featureslogo/icon5",
  },
  {
    name: "Store Management",
    link: "/images/featureslogo/icon6",
  },
  {
    name: "Featured Deals Management",
    link: "/images/featureslogo/icon7",
  },
  {
    name: "Expiry Management",
    link: "/images/featureslogo/icon8",
  },
  {
    name: "Deal Approval",
    link: "/images/featureslogo/icon9",
  },
  {
    name: "User Feedback Management",
    link: "/images/featureslogo/icon10",
  },
  {
    name: "Analytics and Reporting",
    link: "/images/featureslogo/icon11",
  },
  {
    name: "Advertising and Promotion",
    link: "/images/featureslogo/icon12",
  },
  {
    name: "Newsletter Management",
    link: "/images/featureslogo/icon13",
  },
  {
    name: "Search Engine Optimization (SEO)",
    link: "/images/featureslogo/icon14",
  },
  {
    name: "Social Media Integration",
    link: "/images/featureslogo/icon15",
  },
  {
    name: "Coupon Printing Management",
    link: "/images/featureslogo/icon16",
  },
  {
    name: "User Communication",
    link: "/images/featureslogo/icon17",
  },
  {
    name: "Affiliate Management",
    link: "/images/featureslogo/icon18",
  },
  {
    name: "Content Management System (CMS)",
    link: "/images/featureslogo/icon19",
  },
  {
    name: "Deal Scheduling",
    link: "/images/featureslogo/icon20",
  },
  {
    name: "Discount Rules and Restrictions",
    link: "/images/featureslogo/icon20",
  },
  {
    name: "User Activity Tracking",
    link: "/images/featureslogo/icon20",
  },
  {
    name: "Backup and Restore",
    link: "/images/featureslogo/icon20",
  },
  {
    name: "Security and Access Control",
    link: "/images/featureslogo/icon20",
  },
  {
    name: "Payment Integration",
    link: "/images/featureslogo/icon20",
  },
  {
    name: "Performance Optimization",
    link: "/images/featureslogo/icon20",
  },
  {
    name: "Help and Documentation",
    link: "/images/featureslogo/icon20",
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
            <input type="radio" name="radio" id="rad1" checked={checked === 'user'} onChange={() => handleChange('user')} />
            <span className="name" >User</span>
          </label>
          <label className="radio" htmlFor="rad2">
            <input type="radio" name="radio" id="rad2" checked={checked === 'admin'} onChange={() => handleChange('admin')} />
            <span className="name" >Admin</span>
          </label>
        </div>

        <div className={s.card_container}>
          {checked === 'user'
            ? dispayeduser.map((item) => {
              return (
                <Card
                  name={item.name}
                  ids={adminfeatures.findIndex((element) => element === item)}
                  img_logo={item.link}
                />
              );
            })
            : dispayedadmin.map((item) => (
              <Card
                name={item.name}
                ids={userfeatures.findIndex((element) => element === item)}
                img_logo={item.link}
              />
            ))}
        </div>
        <button onClick={handleExpandClick}>More Features</button>
      </div>
    </section>
  );
};

const Card = ({ name, ids }) => {
  return (
    <div className={`${s.card} ${ids}`} id={ids}>
      {/* <Image src={img_logo} width={60} height={60}></Image> */}
      <Carousel>
        <img src={img_logo} alt="Image logo" width={60} height={60} />
      </Carousel>
      <h4>{name}</h4>
    </div>
  );
};

export default CouponFeatures;
