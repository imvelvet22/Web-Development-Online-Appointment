import React from 'react';
import css from './Hero.module.css';
import HeroImg from '../../assets/HeroImg.png';
import { IoHeartHalf } from 'react-icons/io5';
import { HiOutlineArrowSmallRight } from 'react-icons/hi2';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../header/Footer';
import { motion } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();
  const isServicesRoute = window.location.pathname === '/services';

  // Redirect to the home page if the services route is active
  React.useEffect(() => {
    if (isServicesRoute) {
      navigate('/');
    }
  }, [navigate, isServicesRoute]);

  const transition = { duration: 3, type: 'spring' };

  // Render the Hero component only if not on the services route
  if (isServicesRoute) {
    return null;
  }

  return (
    <div className={css.container}>
      {/* Left side */}
      <div className={css.h_sides}>
        <span className={css.text1}>Captivating Beauty</span>

        <div className={css.text2}>
          <span>Love Your Self</span>
          <span className={css.text1}>Let Your Salon Tell Your Story</span>
        </div>
      </div>

      {/* Middle side */}
      <div className={css.wrapper}>
        {/* Blue circle */}
        <motion.div
          initial={{ bottom: '2rem' }}
          whileInView={{ bottom: '0rem' }}
          transition={transition}
          className={css.blueCircle}
        ></motion.div>

        <motion.img
          transition={transition}
          initial={{ bottom: '2rem' }}
          whileInView={{ bottom: '0rem' }}
          src={HeroImg}
          alt=""
          width={600}
        />
      </div>

      {/* Right side */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>You deserve this Trend</span>
          <span>treat yourself</span>
          <span>treat yourself</span>
          <span>treat yourself</span>
        </div>

        <div className={css.customers}>
          <span>Book Now!!!</span>
          <span>Run Before It Runs Out</span>
          <span>Experience Five Star Salon</span>
          <span>
            <Footer />
          </span>
        </div>

        <div className={css.cart2try}>
          <IoHeartHalf />

          <div className={css.signuptry}>
            <span>
              <Link to="/appointment">Book Appointment</Link>
            </span>

            <div>
              <HiOutlineArrowSmallRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
