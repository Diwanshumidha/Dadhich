import React from "react";
import { Carousel } from 'react-responsive';
import s from "./EcomUserFeatures.module.css";
// import img_logo from "../../public/svg/svgexport-12.svg";
import img_logo from "../../../public/svg/svgexport-12.svg";

import { useState } from "react";
// import {address,business,camera,costumer,discount,filter,history,login,loyalty,mobile,news,question,related,returns,review,secure,shoping,track,Wishlists,process}
// from './index';


const adminfeatures = [
  {
    name: "Product Management",
    link: "",
  },
  {
    name: "Order Management",
    link: "/images/featureslogo/icon2",
  },
  {
    name: "Inventory Management",
    link: "/images/featureslogo/icon3",
  },
  {
    name: "Customer Management",
    link: "/images/featureslogo/icon4",
  },
  {
    name: "Analytics and Reporting",
    link: "/images/featureslogo/icon5",
  },
  {
    name: "Sales and Promotions",
    link: "/images/featureslogo/icon6",
  },
  {
    name: "Content Management System (CMS)",
    link: "/images/featureslogo/icon7",
  },
  {
    name: "Shipping and Fulfillment",
    link: "/images/featureslogo/icon8",
  },
  {
    name: "Payment Gateway Integration",
    link: "/images/featureslogo/icon9",
  },
  {
    name: "User Role and Permissions",
    link: "/images/featureslogo/icon10",
  },
  {
    name: "Dashboard and Analytics",
    link: "/images/featureslogo/icon11",
  },
  {
    name: "Tax Management",
    link: "/images/featureslogo/icon12",
  },
  {
    name: "Multichannel Integration",
    link: "/images/featureslogo/icon13",
  },
  {
    name: "Customer Support Management",
    link: "/images/featureslogo/icon14",
  },
  {
    name: "Returns and Refunds Management",
    link: "/images/featureslogo/icon15",
  },
  {
    name: "Marketing and SEO Tools",
    link: "/images/featureslogo/icon16",
  },
  {
    name: "Product Reviews Management",
    link: "/images/featureslogo/icon17",
  },
  {
    name: "Internationalization and Localization",
    link: "/images/featureslogo/icon18",
  },
  {
    name: "Site Performance and Security",
    link: "/images/featureslogo/icon19",
  },
  {
    name: "Third-Party Integrations",
    link: "/images/featureslogo/icon20",
  },
];


const userfeatures = [
  {
    name: "Product Search",
    link: "address",
  },
  {
    name: "Advanced Filtering",
    link: "filter",
  },
  {
    name: "Product Images",
    link: "/images/featureslogo/icon23",
  },
  {
    name: "Product Descriptions",
    link: "/images/featureslogo/icon24",
  },
  {
    name: "Product Reviews and Ratings",
    link: "/images/featureslogo/icon25",
  },
  {
    name: "Shopping Cart",
    link: "/images/featureslogo/icon26",
  },
  {
    name: "Secure Checkout",
    link: "/images/featureslogo/icon27",
  },
  {
    name: "Order Tracking",
    link: "/images/featureslogo/icon28",
  },
  {
    name: "User Accounts",
    link: "/images/featureslogo/icon29",
  },
  {
    name: "Wishlists",
    link: "/images/featureslogo/icon30",
  },
  {
    name: "Discounts and Promotions",
    link: "/images/featureslogo/icon31",
  },
  {
    name: "Related Products",
    link: "/images/featureslogo/icon32",
  },
  {
    name: "Social Media Integration",
    link: "/images/featureslogo/icon33",
  },
  {
    name: "Customer Support",
    link: "/images/featureslogo/icon34",
  },
  {
    name: "Returns and Refunds",
    link: "/images/featureslogo/icon35",
  },
  {
    name: "Order History",
    link: "/images/featureslogo/icon36",
  },
  {
    name: "Account Security",
    link: "/images/featureslogo/icon37",
  },
  {
    name: "Mobile Responsiveness",
    link: "/images/featureslogo/icon38",
  },
  {
    name: "Newsletter Subscription",
    link: "/images/featureslogo/icon39",
  },
  {
    name: "Loyalty Programs",
    link: "/images/featureslogo/icon40",
  },
];


const EUserFeature = () => {
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
                    ids={adminfeatures.findIndex((element) => element === item)}
                    img_logo={item.link}  key={item.link}
                  />
                );
              })
            : dispayedadmin.map((item) => (
                <Card
                  name={item.name}
                  ids={userfeatures.findIndex((element) => element === item)}
                  img_logo={item.link} key={item.link}
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
    <div className={`${s.card} ${ids}`} id={ids} >
      {/* <Image src={img_logo} width={60} height={60}></Image> */}
      <Carousel>
          <img rc={img_logo} width={60} height={60} alt="Image logo" />
        </Carousel>
      <h4>{name}</h4>
    </div>
  );
};

export default EUserFeature;










