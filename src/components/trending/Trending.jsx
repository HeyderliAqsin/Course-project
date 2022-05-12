import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./trending.scss";
import { Autoplay, Navigation } from "swiper";

const Trending = () => {
  return (
    <>
      <section id="Popular">
        <div className="container">
          <div className="top-text d-flex justify-content-between align-items-center">
            <div className="txt">
              <h3>Top Trending Categories</h3>
              <p>
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis libero tempus, blandit posuere and ligula varius magna a
                porta
              </p>
            </div>
            <div className="title-btn">
              <a className="btn" href="/courses-list">
                View All Categorie
              </a>
            </div>
          </div>
          <Swiper
            className="Slide"
            modules={[Navigation,Autoplay]}
            spaceBetween={50}
            slidesPerView={5}
            navigation
            autoplay
          >
            <SwiperSlide>
              <div className="box" style={{backgroundColor:"#ff4500"}}>
                <div className="box-icon">
                  <img width={100} src="/images/calculator.png" alt="" />
                </div>
                <div className="box-txt">
                  <h5>Languages</h5>
                  <p>137 Courses</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box" style={{backgroundColor:"#8DD17E"}}>
                <div className="box-icon">
                  <img width={100} src="/images/photo (1).png" alt="" />
                </div>
                <div className="box-txt">
                  <h5>Languages</h5>
                  <p>137 Courses</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box" style={{backgroundColor:"#FFB605"}}>
                <div className="box-icon">
                  <img width={100} src="/images/calculator.png" alt="" />
                </div>
                <div className="box-txt">
                  <h5>Languages</h5>
                  <p>137 Courses</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box" style={{backgroundColor:"#1BA1F0"}}>
                <div className="box-icon">
                  <img width={100} src="/images/photo (1).png" alt="" />
                </div>
                <div className="box-txt">
                  <h5>Languages</h5>
                  <p>137 Courses</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box" style={{backgroundColor:"#8A8CBD"}}>
                <div className="box-icon">
                  <img width={100} src="/images/calculator.png" alt="" />
                </div>
                <div className="box-txt">
                  <h5>Languages</h5>
                  <p>137 Courses</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box" style={{backgroundColor:"#ff4500"}}>
                <div className="box-icon">
                  <img width={100} src="/images/calculator.png" alt="" />
                </div>
                <div className="box-txt">
                  <h5>Languages</h5>
                  <p>137 Courses</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box" style={{backgroundColor:"#8DD17E"}}>
                <div className="box-icon">
                  <img width={100} src="/images/photo (1).png" alt="" />
                </div>
                <div className="box-txt">
                  <h5>Languages</h5>
                  <p>137 Courses</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Trending;
