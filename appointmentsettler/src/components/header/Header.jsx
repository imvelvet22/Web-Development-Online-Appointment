import React from 'react';
import css from './Header.module.css';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span>Hiraya</span>
      </div>

      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>About</li>
            <li>New</li>
            <li>Services</li>
            <li>Promo</li>
            <li>ETC</li>
          </ul>
        </div>
        <input type="text" className={css.search} />
        
      </div>
    </div>
  );
}

export default Header;
