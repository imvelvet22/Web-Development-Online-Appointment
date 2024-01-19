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
      <span className={css.text1}>Flawless Hair</span>

        <div className={css.text2}>
          <span>Love your Hair</span>
          <span className={css.text1}>Let your hair tell your story</span>

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
    {/* right side */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
            <span>You deserve this Trend</span>
            <span>treat your self</span>
            <span>treat your self</span>            
            <span>treat your self</span>

        </div>

        <div className={css.customers}>
            <span>Book Now!!!</span>
            <span>Run Before It Runs Out</span>
            <span>Experience Five Star Salon</span>

        </div>
        


        



      </div>
    </div>
  );
}

export default Hero;



/*import { FaHeartCirclePlus } from "react-icons/fa6";*/

/*import { IoIosArrowDropright } from "react-icons/io"; */
