import React from 'react';
import css from './Header.module.css';
import Logo from '../../assets/logo.png';
import { CgSearchLoading } from "react-icons/cg";
import { Link } from 'react-router-dom';
   



const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
         <img src={Logo} alt="" />
        <span>Hiraya Beauty</span>
      </div>

      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about" >About </Link></li>
            <li>
               <Link to="/services" >Services</Link>
             </li>

            <li><Link to="/appointment" >Appointment</Link></li>

          </ul>
        </div>
        <input type="text" className={css.search} placeholder="Search"/>
        <CgSearchLoading className={css.cart}/>
      </div>

    </div>
    
   
  );
}

export default Header;