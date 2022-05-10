import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider.scss";

const Slider = () => {
  return (
    <>
    <Swiper className="Slide" modules={[]} spaceBetween={50} slidesPerView={1}>
      <SwiperSlide className="Slideimg">
        <img className="img-fluid" src="/images/slide-3.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="img-fluid" src="/images/slide-2.jpg" alt="" />
      </SwiperSlide>
      <div className="container">
        <div className="text">
          <h2 class="h1-sm">High quality courses from the leading experts</h2>
          <p class="p-lg">
            Feugiat primis ligula gravida auctor egestas augue viverra mauri
            tortor in iaculis placerat an eugiat mauris ipsum undo viverra
            tortor gravida purus lorem in tortor a viverr
          </p>
          <a href="#courses-4" class="btn btn-rose">
            View Popular Courses
          </a>
        </div>
      </div>
      <section id="bottom">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-md-4">
              <div class="abox-1 d-flex align-items-center">
                <img width={70} src="/images/online-learning.png" alt="" class="computer"/>
                <div class="abox-txt ms-4">
                  <h5 class="h5-md">2,769 online courses</h5>
                  <p class="p-md">Explore a variety of fresh topics</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="abox-1 d-flex align-items-center">
                <img width={60} src="/images/online-course.png" alt="" class="computer"/>
                <div class="abox-txt ms-4">
                  <h5 class="h5-md">2,769 online courses</h5>
                  <p class="p-md">Explore a variety of fresh topics</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="abox-1 d-flex align-items-center">
                <img width={60} src="/images/tap.png" alt="" class="computer"/>
                <div class="abox-txt ms-4">
                  <h5 class="h5-md">2,769 online courses</h5>
                  <p class="p-md">Explore a variety of fresh topics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Swiper>
    </>
  );
};

export default Slider;
