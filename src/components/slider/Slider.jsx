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
          <h2 className="h1-sm">High quality courses from the leading experts</h2>
          <p className="p-lg">
            Feugiat primis ligula gravida auctor egestas augue viverra mauri
            tortor in iaculis placerat an eugiat mauris ipsum undo viverra
            tortor gravida purus lorem in tortor a viverr
          </p>
          <a href="#courses-4" className="btn btn-rose">
            View Popular Courses
          </a>
        </div>
      </div>
      <section id="bottom">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-4">
              <div className="abox-1 d-flex align-items-center">
                <img width={70} src="/images/online-learning.png" alt="" class="computer"/>
                <div className="abox-txt ms-4">
                  <h5 className="h5-md">2,769 online courses</h5>
                  <p className="p-md">Explore a variety of fresh topics</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="abox-1 d-flex align-items-center">
                <img width={60} src="/images/online-course.png" alt="" className="computer"/>
                <div className="abox-txt ms-4">
                  <h5 className="h5-md">2,769 online courses</h5>
                  <p className="p-md">Explore a variety of fresh topics</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="abox-1 d-flex align-items-center">
                <img width={60} src="/images/tap.png" alt="" className="computer"/>
                <div className="abox-txt ms-4">
                  <h5 className="h5-md">2,769 online courses</h5>
                  <p className="p-md">Explore a variety of fresh topics</p>
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
