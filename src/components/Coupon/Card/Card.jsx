import React from "react";
import s from "./card.module.css";

const Card = ({ title , link , category ,image}) => {

return(
    <div className={`${s.card}`}>
        <div className={s.image}></div>
        <div className={s.heading_container}>
            <div><h5>{title}</h5></div>
            <div><a href={link}><button className="btn btn-corner gradient btn-block btn-primary">Live Preview</button></a></div>
        </div>
    </div>
)

};

export default Card;
