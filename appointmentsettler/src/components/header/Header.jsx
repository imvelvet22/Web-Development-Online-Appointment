import React, { useState, useEffect } from 'react';
import css from './Header.module.css';
import Logo from '../../assets/logo.png';
import { CgSearchLoading } from "react-icons/cg";
import { Link } from 'react-router-dom';
import MenuIcon from './MenuIcon'; // Import the MenuIcon component

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 700;

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span>Good Things Here</span>
      </div>

      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li><Link to="/about" >Home</Link></li>
            <li>
               <Link to="/services" >Services</Link>
             </li>
            <li><Link to="/appointment" >Appointment</Link></li>
          </ul>
        </div>
        <input type="text" className={css.search} placeholder="Search"/>
        <CgSearchLoading className={css.cart}/>
        {isMobile ? <MenuIcon /> : null} {/* Render the MenuIcon component only if it's not a mobile screen */}
      </div>

    </div>
  );
}

export default Header;