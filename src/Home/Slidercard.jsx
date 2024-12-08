import React from 'react'
import Slider from "react-slick";
import Style from "./Slidercard.module.css"
import cardimg from "./asset 18.png"
import cardimg2 from "./asset 19.png"
import cardimg3 from "./asset 20.png"
const Slidercard = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
      return (
        <Slider {...settings}>
          <div className={Style.Slide}>
            <img src={cardimg} alt="" className={Style.slideimg}/>
          </div>
          <div>
          <img src={cardimg2} alt="" className={Style.slideimg}/>
          </div>
          <div>
          <img src={cardimg3} alt="" className={Style.slideimg}/>
          </div>
         
        </Slider>
      );
}

export default Slidercard
