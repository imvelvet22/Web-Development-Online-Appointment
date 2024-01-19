import React from 'react';
import css from './Hero.module.css';
import HeroImg from '../../assets/HeroImg.png'
import {FaHeartCirclePlus} from "react-icons/fa6";
import { IoIosArrowDropright } from "react-icons/io";

const Hero = () => {
  return (
    <div className={css.container}>

      {/* Left side */}
      <div className={css.h_sides}>
        <span>Flawless Hair</span>

        <div className={css.text2}>
          <span>Love your Hair</span>
          <span>Love your Hair</span>
        </div>
      </div>

      {/* Middle side */}
      <div className={css.wrapper}>
        	<div className={css.blueCircle}>
            <img src={HeroImg} alt="" width={600} />
            <div className={css.cart2}>
                <FaHeartCirclePlus/>

                <div className={css.signup}>
                    <span>Book Appointment</span>

                    <div>
                    <IoIosArrowDropright />
                    </div>


                </div>
            </div>

            </div>
      </div>
    </div>
  );
}

export default Hero;



/*import { FaHeartCirclePlus } from "react-icons/fa6";*/

/*import { IoIosArrowDropright } from "react-icons/io"; */
