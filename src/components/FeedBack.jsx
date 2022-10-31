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
              I am back-end developer, and I requred an interactive and fully responive website for a project luckily I knew him. And he made amazing front-end where I was easily able to plug-in my back-end system.
            </center>
            <div class="m-title">Rupen</div>
            <div class="brow">Back-end Devloper</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="review">
            <div class="fc">
              <img
                src="https://raw.githubusercontent.com/Devrajsinh03/KPD-portfolio-up/main/src/assets/devraj.jpeg"
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
              KPD is an amazing web-developer. He helped me to create an amazing porfolio website, which helped me land me a job.
            </center>
            <div class="m-title">Devrajsinh</div>
            <div class="brow">SDE</div>
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
              Great work I would say, it was an amazing experience working with for making a blogging website for my youtube channel. 
            </center>
            <div class="m-title">Nency</div>
            <div class="brow">Hello Guyzzz</div>
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
              He made me an great E-commerce website for my battery business. Being a Baniya I would say it was worth spending money here.
            </center>
            <div class="m-title">Jash Sheth</div>
            <div class="brow">Baniya/CMNG</div>
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
              Thanks to Priyansh, now I have an amazing website for my NGO which helps boys to find their Happiness. On it they can do what they love.
            </center>
            <div class="m-title">Hemant</div>
            <div class="brow">Sugar Daddy</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="review">
            <div class="fc">
              <img
                src="https://raw.githubusercontent.com/Devrajsinh03/KPD-portfolio-up/main/src/assets/dev.jpg"
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
              I work for a freelancing agency, our client wanted a website according to the UI the provided. And Priyansh helped us building that website.
            </center>
            <div class="m-title">Dev</div>
            <div class="brow">playchokro</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
