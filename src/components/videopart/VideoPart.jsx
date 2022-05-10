import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./videopart.scss";
import { Autoplay } from "swiper";

const VideoPart = () => {
  return (
    <>
      <section id="VideoPart">
        <div className="bg-scroll">
          <div className="video-content">
            <div className="container">
              <div class="col-lg-8 offset-lg-2 video-txt text-center">
                <h3>
                  Find the right instructor for you from over 10,000 teachers
                </h3>
                <p>Feugiat primis ligula risus auctor laoreet augue egestas</p>
              </div>
            </div>
          </div>
          <div class="video-link">
            <div class="container">
              <div class="row">
                <div class="col-md-12 video-link text-center">
                  <div class="play-btn text-center">
                    <a target="_blank" className="video-popup" href="https://youtu.be/Y6MlVop80y0">
                      <span></span>
                    </a>
                    <img
                      class="img-fluid"
                      src="/images/video-3-img.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="video-brands">
            <p>Trusted by companies of all sizes:</p>
            <Swiper
              className="Slide"
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={5}
              autoplay
            >
              <SwiperSlide className="Slideimg">
                <img src="/images/brand-1.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/brand-4.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/brand-5.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/brand-6.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/brand-7.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/brand-5.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoPart;
