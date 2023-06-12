import React from "react";

import s from "../Coupon/css/CouponFeatures.module.css";
import img_logo from "/public/svg/svgexport-12.svg";
import { useState } from "react";

const userfeatures = [
  {
    name: "User Registration",
    link: "../../../public/featureslogo/DatingUser/user.png",
  },
  {
    name: "Search Filters",
    link: "../../../public/featureslogo/DatingUser/Searchfilter.png",
  },
  {
    name: "Matching Algorithm",
    link: "../../../public/featureslogo/DatingUser/MatchingAlgo.png",
  },
  {
    name: "Exclusive Offers",
    link: "../../../public/featureslogo/DatingUser/exclusiveOffer.png",
  },
  {
    name: "Messaging System",
    link: "../../../public/featureslogo/DatingUser/messagingSystem.png",
  },
  {
    name: "Video Chat",
    link: "../../../public/featureslogo/DatingUser/video-chat.png",
  },
  {
    name: "Photo Verification",
    link: "../../../public/featureslogo/DatingUser/photo-Verification.png",
  },
  {
    name: "Privacy Settings",
    link: "../../../public/featureslogo/DatingUser/PrivecyIcon.png",
  },
  {
    name: "Favorites List",
    link: "../../../pub../../../public/featureslogo/DatingUser",
  },
  {
    name: "Online Status",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "Profile Visits",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "Location-Based Matching",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "SUser Verification",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "Store Pages",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "Relationship Insights",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "Notifications",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "Online and Offline Events",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "Profile Boost",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "Language Preferences",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "Social Media Integration",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "Success Stories",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "User Feedback",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "Account Deactivation",
    link: "../../../public/featureslogo/DatingUser",
  },
];

const adminfeatures = [
  {
    name: "User Management",
    link: "../../../public/featureslogo/DatingAdmin/userManage.png",
  },
  {
    name: "Profile Moderation ",
    link: "../../../public/featureslogo/DatingAdmin/ProfileModeration.png",
  },
  {
    name: "Membership Management",
    link: "../../../public/featureslogo/DatingAdmin/membership.png",
  },
  {
    name: "Content Moderation",
    link: "../../../public/featureslogo/DatingAdmin/contentModeration.png",
  },
  {
    name: "Security and Privacy Settings",
    link: "../../../public/featureslogo/DatingAdmin/SecurityPrivacy.png",
  },
  {
    name: "Analytics and Insights",
    link: "../../../public/featureslogo/DatingAdmin/AnalyticsInsights.png",
  },
  {
    name: "Matching Algorithm Management",
    link: "../../../public/featureslogo/DatingAdmin/MatchingAlgo.png",
  },
  {
    name: "Communication Monitoring",
    link: "../../../public/featureslogo/DatingAdmin/communicationMonitoring.png",
  },
  {
    name: "Customer Support",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "Admin Dashboard",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "Revenue Management",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "Reporting and Analytics",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "Feedback and Review Management",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "User Blocking and Moderation",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "System Configuration",
    link:  "../../../public/featureslogo/DatingUser",
  },
  {
    name: "Payment Gateway Integration",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "Email and Notification Management",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "Data Backup and Security",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "Add Management",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "Fraud Detection",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "System Updates and Maintenance",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "SEO Optimization",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "User Feedback Analysis",
    link: "../../../public/featureslogo/DatingUser",
  },
  {
    name: "Localization and Language Management",
    link: "../../../public/featureslogo/DatingUser",
  },
];

const DatingFeatures = () => {
  const [checked, setchecked] = useState("user");
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
            ? dispayeduser.map((item) => {
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
                  ids={adminfeatures.findIndex((element) => element === item)}
                  img_logo={item.link}
                />
              ))}
        </div>
        <button onClick={handleExpandClick}>
          {!expanded ? "More Features" : "Show Less"}
        </button>
      </div>
    </section>
  );
};

const Card = ({ name, ids, img_logo: image_link }) => {
  return (
    <div className={`${s.card} ${ids}`} id={ids}>
      {/* <Image src={img_logo} width={60} height={60}></Image> */}
      {console.log(image_link)}
      <img src={image_link} width={60} height={60} alt="Image logo" />

      <h4>{name}</h4>
    </div>
  );
};

export default DatingFeatures;
