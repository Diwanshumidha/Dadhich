


import React from 'react';
import s from './Process.module.css';
import img7 from '../../../public/svg/svgexport-13.svg';
import img6 from '../../../public/svg/svgexport-12.svg';
import img5 from '../../../public/svg/svgexport-11.svg';
import img4 from '../../../public/svg/svgexport-10.svg';
import img3 from '../../../public/svg/svgexport-9.svg';
import img2 from '../../../public/svg/svgexport-8.svg';
import img1 from '../../../public/svg/svgexport-7.svg';
import { Carousel } from 'react-responsive';

const Process = () => {
  return (
    <div className={s.portfolio}>
      <div className={s.heading}>
        <span>Process</span>
        <h2>Our Development Process</h2>

        <div className={s.card_container1}>
          <Card name='Analysis &amp; scoping sessions' count='1' imagelink={img1} cls='ana' />
          <Card name='Prototyping &amp; specification' count='2' imagelink={img2} cls='pro' />
          <Card name='UI Design' count='3' imagelink={img3} cls='ui'/>
          <Card name='Development' count='4' imagelink={img4} cls='dev'/>
          <Card name='QA(Release Beta)' count='5' imagelink={img5} cls='qa' />
          <Card name='Launch' count='6' imagelink={img6} cls='lau'/>
          <Card name='Support &amp; Maintenance' count='7' imagelink={img7} cls='sup' />
        </div>
      </div>
    </div>
  );
}



const Card = ({ name, count, imagelink, cls }) => {
  return (
    <div className={`${s.process_card} ${cls}`} data-aos="zoom-in-down">
      <div className={s.icon}>
        <p>{count}</p>
        <Carousel>
          <img src={imagelink} alt="Picture of the author" />
        </Carousel>
      </div>
      <div className={s.content}>
        <h4>{name}</h4>
      </div>
    </div>
  );
}



export default Process;

