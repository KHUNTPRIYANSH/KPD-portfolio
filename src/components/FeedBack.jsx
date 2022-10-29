import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

export default function FeedBack() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="review">
            <div class="fc">
              <img
                src="https://bslthemes.com/arter/wp-content/uploads/2020/09/testimonial-2-140x140.jpg"
                alt=""
              />
            </div>
            <div class="stars">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <center class="s-title">
              Sed ut perspiciatis unde omnis iste natus error voluptate
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa
              quae abillo
            </center>
            <div class="m-title">Liza Cox</div>
            <div class="brow">Web-Designer</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="review">
            <div class="fc">
              <img
                src="https://bslthemes.com/arter/wp-content/uploads/2020/09/testimonial-2-140x140.jpg"
                alt=""
              />
            </div>
            <div class="stars">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <center class="s-title">
              Sed ut perspiciatis unde omnis iste natus error voluptate
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa
              quae abillo
            </center>
            <div class="m-title">Liza Cox</div>
            <div class="brow">Web-Designer</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="review">
            <div class="fc">
              <img
                src="https://bslthemes.com/arter/wp-content/uploads/2020/09/testimonial-2-140x140.jpg"
                alt=""
              />
            </div>
            <div class="stars">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <center class="s-title">
              Sed ut perspiciatis unde omnis iste natus error voluptate
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa
              quae abillo
            </center>
            <div class="m-title">Liza Cox</div>
            <div class="brow">Web-Designer</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="review">
            <div class="fc">
              <img
                src="https://bslthemes.com/arter/wp-content/uploads/2020/09/testimonial-2-140x140.jpg"
                alt=""
              />
            </div>
            <div class="stars">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <center class="s-title">
              Sed ut perspiciatis unde omnis iste natus error voluptate
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa
              quae abillo
            </center>
            <div class="m-title">Liza Cox</div>
            <div class="brow">Web-Designer</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="review">
            <div class="fc">
              <img
                src="https://bslthemes.com/arter/wp-content/uploads/2020/09/testimonial-2-140x140.jpg"
                alt=""
              />
            </div>
            <div class="stars">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <center class="s-title">
              Sed ut perspiciatis unde omnis iste natus error voluptate
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa
              quae abillo
            </center>
            <div class="m-title">Liza Cox</div>
            <div class="brow">Web-Designer</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="review">
            <div class="fc">
              <img
                src="https://bslthemes.com/arter/wp-content/uploads/2020/09/testimonial-2-140x140.jpg"
                alt=""
              />
            </div>
            <div class="stars">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <center class="s-title">
              Sed ut perspiciatis unde omnis iste natus error voluptate
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa
              quae abillo
            </center>
            <div class="m-title">Liza Cox</div>
            <div class="brow">Web-Designer</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
