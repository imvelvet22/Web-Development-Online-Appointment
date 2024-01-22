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
<<<<<<< HEAD
            
            <li>
               <Link to="/services" >Services</Link>
             </li>
            
            <li>Appointment</li>
=======
            <li>About</li>
            <li>New</li>
            <li>
               <Link to="/services" >Services</Link>
             </li>
            <li>Promo</li>
            <li><Link to="/slip" >ETC</Link></li>
>>>>>>> 64a198f75dfce5c3b64f9c58814105b9168b99ba
          </ul>
        </div>
        <input type="text" className={css.search} placeholder="Search"/>
        <CgSearchLoading className={css.cart}/>
      </div>

    </div>
    
   
  );
}

export default Header;