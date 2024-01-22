import React, { Component } from 'react';
import css from './Virtual.module.css';
import shade from '../../assets/shade.png';
import ReactCompareImage from 'react-compare-image';
import BeforeImage from '../../assets/Before.jpg'; // Adjust the path accordingly
import AfterImage from '../../assets/After.jpg'; // Adjust the path accordingly

const Virtual = () => {
  return (
    <div className={css.Virtual}>
      <div className={css.left}>
        <span>TRY IT NOW!</span>
        <span>Elevate Your Style, Illuminate Your Beauty</span>
        <span>You Deserve This ~~</span>
        <img src={shade} alt="" />
      </div>
      <div className={css.right}>
        <div className={css.wrapper}>
          <ReactCompareImage leftImage={BeforeImage} rightImage={AfterImage} />
        </div>
      </div>
    </div>
  );
};

export default Virtual;
