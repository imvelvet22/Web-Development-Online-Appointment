import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';


const Slider = () => {
  return (
    <div className="s-container">
        <Swiper>
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>1</SwiperSlide>
        </Swiper>
    </div>
  );
};

export default Slider;
