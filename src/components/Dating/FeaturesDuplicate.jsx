import React from "react";
// import s from "../Components/D_Features/D_Features.module.css";
import s from "./styles/CouponFeatures.module.css";
// import s from "../Coupon/css/Portfolio.module.css";
import img_logo from "/public/svg/svgexport-12.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const userfeatures = [
  {
    name: "Search Functionality",
    link: "address",
  },
  {
    name: "Deal Categories",
    link: "filter",
  },
  // ...rest of the user features
];

const adminfeatures = [
  {
    name: "Auto Coupon Import",
    link: "",
  },
  {
    name: "Frontend Deal Submission",
    link: "/images/featureslogo/icon2",
  },
  // ...rest of the admin features
];

const FeaturesDuplicate = () => {
  const [checked, setChecked] = useState("user");
  const handleChange = (type) => {
    setChecked(type);
  };

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const displayedAdmin = expanded ? adminfeatures : adminfeatures.slice(0, 8);
  const displayedUser = expanded ? userfeatures : userfeatures.slice(0, 8);

  return (
    <section className={s.section}>
      <div className={`${s.container} container`}>
        <h2>Top Features</h2>
        <div className={`radio_inputs ${s.toggle}`}>
          <label className="radio" htmlFor="rad1">
            <input
              type="radio"
              name="radio"
              id="rad1"
              checked={checked === "user"}
              onChange={() => handleChange("user")}
            />
            <span className="name">User</span>
          </label>
          <label className="radio" htmlFor="rad2">
            <input
              type="radio"
              name="radio"
              id="rad2"
              checked={checked === "admin"}
              onChange={() => handleChange("admin")}
            />
            <span className="name">Admin</span>
          </label>
        </div>

        <div className={s.card_container}>
          {checked === "user"
            ? displayedUser.map((item, index) => (
                <Card key={index} name={item.name} img_logo={item.link} />
              ))
            : displayedAdmin.map((item, index) => (
                <Card key={index} name={item.name} img_logo={item.link} />
              ))}
        </div>
        <button onClick={handleExpandClick}>More Features</button>
      </div>
    </section>
  );
};

const Card = ({ name, img_logo }) => {
  return (
    <div className={`${s.card}`} key={name}>
      {/* <Image src={img_logo} width={60} height={60} alt={name} /> */}
      <h4>{name}</h4>
    </div>
  );
};

export default FeaturesDuplicate;
