import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '../../assets/styles/editors.css';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"



// import Swiper core and required modules
import SwiperCore, {
  EffectFade,Navigation,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectFade,Navigation,Pagination]);


export default function Swiper1(links) {
  
  
  return (
    <>
   
    <Swiper spaceBetween={3} effect={'fade'} navigation={true} pagination={{
  "clickable": true
}} className="mySwiper">
 <div className="card">
  <SwiperSlide><img src={links.links.image1} alt="#"/></SwiperSlide><SwiperSlide><img src={links.links.image2} alt="#"/></SwiperSlide><SwiperSlide><img src={links.links.image3} alt="#" /></SwiperSlide><SwiperSlide><img src={links.links.image4} alt="#"/></SwiperSlide>
  </div>
  </Swiper>
  
    </>
  )
}

