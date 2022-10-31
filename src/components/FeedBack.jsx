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
                src="https://raw.githubusercontent.com/Devrajsinh03/KPD-portfolio-up/new_pics/src/assets/rupen.jpg"
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
            <div class="brow">Youtuber</div>
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
            <div class="brow">Pyhton programmer</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="review">
            <div class="fc">
              <img
                src="https://raw.githubusercontent.com/Devrajsinh03/KPD-portfolio-up/new_pics/src/assets/hemant.jpg"
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
            <div class="brow">Client</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="review">
            <div class="fc">
              <img
                src="https://raw.githubusercontent.com/Devrajsinh03/KPD-portfolio-up/new_pics/src/assets/dev.jpg"
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
              It is an amazing experience working with Priyansh on web development projects. I feel amazed looking at his skills and creativity.
            </center>
            <div class="m-title">Dev Joshi</div>
            <div class="brow">Client</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="review">
            <div class="fc">
              <img
                src="https://raw.githubusercontent.com/Devrajsinh03/KPD-portfolio-up/new_pics/src/assets/uttam.jpg"
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
            Priyansh is a helpful, motivated, professional front-end developer.
I was new to front-end development when working with him, but he was very patient with me.He is a superb front-end developer who always delivers clean and quick code.His strongest point is front-end/interface development and he's nicknamed the javascript king.
            </center>
            <div class="m-title">Uttam Buva</div>
            <div class="brow">UI/UX designer</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
