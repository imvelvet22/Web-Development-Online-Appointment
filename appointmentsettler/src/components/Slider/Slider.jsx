import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




import './Slider.css'
import { SliderProducts } from '../../data/products';



const Slider = () => {
  return (
    <div className="s-container">
<<<<<<< HEAD
      <Swiper
      navigation={true}
      className="mySwiper"
      loopFillGroupWithBlank={true}
      slidesPerView={3} spaceBetween={40} slidesPerGroup={1} loop={true}>
        {SliderProducts.map((slide, i) => (
          <SwiperSlide>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>
              <div>Book Now</div>
            </div>

            <img src={slide.img} alt="product" classname="img-p" />

            </SwiperSlide>
        ))}
      </Swiper>
=======
        <Swiper>
            {/* <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide> */}
        </Swiper>
>>>>>>> 64a198f75dfce5c3b64f9c58814105b9168b99ba
    </div>
  );
};

export default Slider;
