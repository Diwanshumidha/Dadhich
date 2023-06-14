import s from "./EcomUserFeatures.module.css";
import { motion } from "framer-motion";

import { useState } from "react";
import {addtocart, address, business, camera, costumer, discount, filter, history, login, loyalty, mobile, news, product, question, related, returns, review, secure, shopping, track, wishlist,productsearch,ProductManagement } from '../../../public/featureslogo/User'
// import {address,business,camera,costumer,discount,filter,history,login,loyalty,mobile,news,question,related,returns,review,secure,shoping,track,Wishlists,process}
// from './index';


const adminfeatures = [
  {
    name: "Product Management",
    link: ProductManagement,
  },
  {
    name: "Order Management",
    link: business,
  },
  {
    name: "Inventory Management",
    link: "../../../public/featureslogo/Admin/inventory-management.png",
  },
  {
    name: "Customer Management",
    link: "../../../public/featureslogo/Admin/costumerManagement.png",
  },
  {
    name: "Analytics and Reporting",
    link: "../../../public/featureslogo/Admin/aalystic.png",
  },
  {
    name: "Sales and Promotions",
    link: "../../../public/featureslogo/Admin/saleIncrease.png",
  },
  {
    name: "Content Management System (CMS)",
    link: "../../../public/featureslogo/Admin/content-management.png",
  },
  {
    name: "Shipping and Fulfillment",
    link: "../../../public/featureslogo/Admin/shipping.png",
  },
  {
    name: "Payment Gateway Integration",
    link: "../../../public/featureslogo/Admin/",
  },
  {
    name: "User Role and Permissions",
    link: "../../../public/featureslogo/Admin/",
  },
  {
    name: "Dashboard and Analytics",
    link: "../../../public/featureslogo/Admin/",
  },
  {
    name: "Tax Management",
    link: "../../../public/featureslogo/Admin/",
  },
  {
    name: "Multichannel Integration",
    link: "../../../public/featureslogo/Admin/",
  },
  {
    name: "Customer Support Management",
    link: "../../../public/featureslogo/Admin/",
  },
  {
    name: "Returns and Refunds Management",
    link: "../../../public/featureslogo/Admin/",
  },
  {
    name: "Marketing and SEO Tools",
    link: "../../../public/featureslogo/Admin/",
  },
  {
    name: "Product Reviews Management",
    link: "../../../public/featureslogo/Admin/",
  },
  {
    name: "Internationalization and Localization",
    link: "../../../public/featureslogo/Admin/",
  },
  {
    name: "Site Performance and Security",
    link: "../../../public/featureslogo/Admin/",
  },
  {
    name: "Third-Party Integrations",
    link: "../../../public/featureslogo/Admin/",
  },
];



const userfeatures = [
  {
    name: "Product Search",
    link: filter,
  },
  {
    name: "Advanced Filtering",
    link: filter,
  },
  {
    name: "Product Images",
    link: product,
  },
  {
    name: "Product Descriptions",
    link: camera,
  },
  {
    name: "Product Reviews and Ratings",
    link: review,
  },
  {
    name: "Shopping Cart",
    link: shopping,
  },
  {
    name: "Secure Checkout",
    link: secure,
  },
  {
    name: "Order Tracking",
    link: track,
  },
  {
    name: "User Accounts",
    link: login,
  },
  {
    name: "Wishlists",
    link: wishlist,
  },
  {
    name: "Discounts and Promotions",
    link: discount,
  },
  {
    name: "Related Products",
    link: related,
  },
  {
    name: "Social Media Integration",
    link: news,
  },
  {
    name: "Customer Support",
    link: costumer,
  },
  {
    name: "Returns and Refunds",
    link: returns,
  },
  {
    name: "Order History",
    link: history,
  },
  {
    name: "Account Security",
    link: secure,
  },
  {
    name: "Mobile Responsiveness",
    link: mobile,
  },
  {
    name: "Newsletter Subscription",
    link: business,
  },
  {
    name: "Loyalty Programs",
    link: loyalty,
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
    <motion.section className={s.section}
    initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
    >
      <div className={`${s.container} container`}>
        <motion.h2 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        >Top Features</motion.h2>
        <motion.div className={`radio_inputs ${s.toggle}`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        >
          <label className="radio" htmlFor="rad1">
            <input type="radio" name="radio" id="rad1" checked={checked === 'user'} onChange={() => handleChange('user')}/>
            <span className="name" >User</span>
          </label>
          <label className="radio" htmlFor="rad2">
            <input type="radio" name="radio" id="rad2" checked={checked === 'admin'} onChange={() => handleChange('admin')} />
            <span className="name" >Admin</span>
          </label>
        </motion.div>

        <motion.div className={s.card_container}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}>
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
        </motion.div>
        <button onClick={handleExpandClick}>{!expanded?'More Features':'Show Less'}</button>
      </div>
    </motion.section>
  );
};

const Card = ({ name, ids , img_logo:image_link }) => {
  return (
    <div className={`${s.card} ${ids}`} id={ids} >
      {/* <Image src={img_logo} width={60} height={60}></Image> */}
      {console.log(image_link)}
          <img src={image_link} width={60} height={60} alt="Image logo" />
          
      <h4>{name}</h4>
    </div>
  );
};

export default EUserFeature;





