import React from "react";

import s from "../Coupon/css/CouponFeatures.module.css";
import img_logo from "/public/svg/svgexport-12.svg";
import { useState } from "react";


const userfeatures = [
    {
      name: "User Registration",
      link: "address",
    },
    {
      name: "Search Filters",
      link: "filter",
    },
    {
      name: "Matching Algorithm",
      link: "/images/featureslogo/icon23",
    },
    {
      name: "Exclusive Offers",
      link: "/images/featureslogo/icon24",
    },
    {
      name: "Messaging System",
      link: "/images/featureslogo/icon25",
    },
    {
      name: "Video Chat",
      link: "/images/featureslogo/icon26",
    },
    {
      name: "Photo Verification",
      link: "/images/featureslogo/icon27",
    },
    {
      name: "Privacy Settings",
      link: "/images/featureslogo/icon28",
    },
    {
      name: "Favorites List",
      link: "/images/featureslogo/icon29",
    },
    {
      name: "Online Status",
      link: "/images/featureslogo/icon30",
    },
    {
      name: "Profile Visits",
      link: "/images/featureslogo/icon31",
    },
    {
      name: "Location-Based Matching",
      link: "/images/featureslogo/icon32",
    },
    {
      name: "SUser Verification",
      link: "/images/featureslogo/icon33",
    },
    {
      name: "Store Pages",
      link: "/images/featureslogo/icon34",
    },
    {
      name: "Relationship Insights",
      link: "/images/featureslogo/icon35",
    },
    {
      name: "Notifications",
      link: "/images/featureslogo/icon36",
    },
    {
      name: "Online and Offline Events",
      link: "/images/featureslogo/icon37",
    },
    {
      name: "Profile Boost",
      link: "/images/featureslogo/icon38",
    },
    {
      name: "Language Preferences",
      link: "/images/featureslogo/icon39",
    },
    {
      name: "Social Media Integration",
      link: "/images/featureslogo/icon40",
    },
    {
      name: "Success Stories",
      link: "/images/featureslogo/icon40",
    },
    {
      name: "User Feedback",
      link: "/images/featureslogo/icon40",
    },
    {
      name: "Account Deactivation",
      link: "/images/featureslogo/icon40",
    },
  ];



const adminfeatures = [
  {
    name: "User Management",
    link: "",
  },
  {
    name: "Profile Moderation ",
    link: "/images/featureslogo/icon2",
  },
  {
    name: "Membership Management",
    link: "/images/featureslogo/icon3",
  },
  {
    name: "Content Moderation",
    link: "/images/featureslogo/icon4",
  },
  {
    name: "Security and Privacy Settings",
    link: "/images/featureslogo/icon5",
  },
  {
    name: "Analytics and Insights",
    link: "/images/featureslogo/icon6",
  },
  {
    name: "Matching Algorithm Management",
    link: "/images/featureslogo/icon7",
  },
  {
    name: "Communication Monitoring",
    link: "/images/featureslogo/icon8",
  },
  {
    name: "Customer Support",
    link: "/images/featureslogo/icon9",
  },
  {
    name: "Admin Dashboard",
    link: "/images/featureslogo/icon10",
  },
  {
    name: "Revenue Management",
    link: "/images/featureslogo/icon11",
  },
  {
    name: "Reporting and Analytics",
    link: "/images/featureslogo/icon12",
  },
  {
    name: "Feedback and Review Management",
    link: "/images/featureslogo/icon13",
  },
  {
    name: "User Blocking and Moderation",
    link: "/images/featureslogo/icon14",
  },
  {
    name: "System Configuration",
    link: "/images/featureslogo/icon15",
  },
  {
    name: "Payment Gateway Integration",
    link: "/images/featureslogo/icon16",
  },
  {
    name: "Email and Notification Management",
    link: "/images/featureslogo/icon17",
  },
  {
    name: "Data Backup and Security",
    link: "/images/featureslogo/icon18",
  },
  {
    name: "Add Management",
    link: "/images/featureslogo/icon19",
  },
  {
    name: "Fraud Detection",
    link: "/images/featureslogo/icon20",
  },
  {
    name: "System Updates and Maintenance",
    link: "/images/featureslogo/icon20",
  },
  {
    name: "SEO Optimization",
    link: "/images/featureslogo/icon20",
  },
  {
    name: "User Feedback Analysis",
    link: "/images/featureslogo/icon20",
  },
  {
    name: "Localization and Language Management",
    link: "/images/featureslogo/icon20",
  },
  
];





const DatingFeatures = () => {
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
      <img src={img_logo} width={60} height={60}/>
      <h4>{name}</h4>
    </div>
  );
};

export default DatingFeatures;
