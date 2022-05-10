import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./bestcourses.scss";
import { Navigation, Autoplay } from "swiper";

const BestCourses = () => {
  return (
    <section id="BestCourses">
      <div className="container">
        <div className="top-text d-flex justify-content-between align-items-center">
          <div className="txt">
            <h3>Best Courses of All-Time</h3>
            <p>
              Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
              primis libero tempus, blandit posuere and ligula varius magna a
              porta
            </p>
          </div>
          <div class="title-btn">
            <a class="btn" href="/courses-list">
              View All Courses
            </a>
          </div>
        </div>
        <Swiper
          className="Slide"
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          autoplay
        >
          <SwiperSlide>
            <div className="category-item">
              <div className="photo">
                <img
                  className="img-fluid"
                  src="/images/course-1-img.jpg"
                  alt=""
                />
              </div>
              <div class="cbox">
                <p class="course-tags">
                  <span>Languages</span>
                  <span>English</span>
                </p>
                <h5>Beginner Level English - Foundations</h5>
                <div className="course-rating clearfix">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span>4.5 (26 Ratings)</span>
                </div>
                <span class="course-price">
                  <span class="old-price">$149.99</span>
                  $138.99
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category-item">
              <div className="photo">
                <img
                  className="img-fluid"
                  src="/images/course-8-img.jpg"
                  alt=""
                />
              </div>
              <div class="cbox">
                <p class="course-tags">
                  <span>Languages</span>
                  <span>English</span>
                </p>
                <h5>Beginner Level English - Foundations</h5>
                <div className="course-rating clearfix">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span>4.5 (26 Ratings)</span>
                </div>
                <span class="course-price">
                  <span class="old-price">$149.99</span>
                  $138.99
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category-item">
              <div className="photo">
                <img
                  className="img-fluid"
                  src="/images/course-2-img.jpg"
                  alt=""
                />
              </div>
              <div class="cbox">
                <p class="course-tags">
                  <span>Languages</span>
                  <span>English</span>
                </p>
                <h5>Beginner Level English - Foundations</h5>
                <div className="course-rating clearfix">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span>4.5 (26 Ratings)</span>
                </div>
                <span class="course-price">
                  <span class="old-price">$149.99</span>
                  $138.99
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category-item">
              <div className="photo">
                <img
                  className="img-fluid"
                  src="/images/course-6-img.jpg"
                  alt=""
                />
              </div>
              <div class="cbox">
                <p class="course-tags">
                  <span>Languages</span>
                  <span>English</span>
                </p>
                <h5>Beginner Level English - Foundations</h5>
                <div className="course-rating clearfix">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span>4.5 (26 Ratings)</span>
                </div>
                <span class="course-price">
                  <span class="old-price">$149.99</span>
                  $138.99
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category-item">
              <div className="photo">
                <img
                  className="img-fluid"
                  src="/images/course-2-img.jpg"
                  alt=""
                />
              </div>
              <div class="cbox">
                <p class="course-tags">
                  <span>Languages</span>
                  <span>English</span>
                </p>
                <h5>Beginner Level English - Foundations</h5>
                <div className="course-rating clearfix">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span>4.5 (26 Ratings)</span>
                </div>
                <span class="course-price">
                  <span class="old-price">$149.99</span>
                  $138.99
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category-item">
              <div className="photo">
                <img
                  className="img-fluid"
                  src="/images/course-2-img.jpg"
                  alt=""
                />
              </div>
              <div class="cbox">
                <p class="course-tags">
                  <span>Languages</span>
                  <span>English</span>
                </p>
                <h5>Beginner Level English - Foundations</h5>
                <div className="course-rating clearfix">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span>4.5 (26 Ratings)</span>
                </div>
                <span class="course-price">
                  <span class="old-price">$149.99</span>
                  $138.99
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category-item">
              <div className="photo">
                <img
                  className="img-fluid"
                  src="/images/course-6-img.jpg"
                  alt=""
                />
              </div>
              <div class="cbox">
                <p class="course-tags">
                  <span>Languages</span>
                  <span>English</span>
                </p>
                <h5>Beginner Level English - Foundations</h5>
                <div className="course-rating clearfix">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span>4.5 (26 Ratings)</span>
                </div>
                <span class="course-price">
                  <span class="old-price">$149.99</span>
                  $138.99
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default BestCourses;
