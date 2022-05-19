import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./bestcourses.scss";
import { Navigation, Autoplay } from "swiper";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { getDiscountCourses } from "../../Redux/Actions/CourseAction";

const BestCourses = () => {
  const discount = useSelector((state) => state.courseDiscount);
  const { courses } = discount;
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiscountCourses());
    setLoading(false);
  }, [dispatch]);

  return (
    <section id="BestCourses">
      <div className="container">
        <div className="top-text d-flex justify-content-between align-items-center">
          <div className="txt">
            <h3>Discounted Courses</h3>
            <p>
              Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
              primis libero tempus, blandit posuere and ligula varius magna a
              porta
            </p>
          </div>
          <div className="title-btn">
            <a className="btn" href="/courses-list">
              View All Courses
            </a>
          </div>
        </div>
        {loading && (
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <Skeleton count={1} width={300} height={250} />
                <Skeleton width={"50%"} count={1} />
                <Skeleton width={"10%"} count={1} />
                <Skeleton width={"30%"} count={1} />
                <Skeleton width={"30%"} count={1} />
              </div>
              <div className="col-lg-3">
                <Skeleton count={1} width={300} height={250} />
                <Skeleton width={"50%"} count={1} />
                <Skeleton width={"10%"} count={1} />
                <Skeleton width={"30%"} count={1} />
                <Skeleton width={"30%"} count={1} />
              </div>
              <div className="col-lg-3">
                <Skeleton count={1} width={300} height={250} />
                <Skeleton width={"50%"} count={1} />
                <Skeleton width={"10%"} count={1} />
                <Skeleton width={"30%"} count={1} />
                <Skeleton width={"30%"} count={1} />
              </div>
              <div className="col-lg-3">
                <Skeleton count={1} width={300} height={250} />
                <Skeleton width={"50%"} count={1} />
                <Skeleton width={"10%"} count={1} />
                <Skeleton width={"30%"} count={1} />
                <Skeleton width={"30%"} count={1} />
              </div>
            </div>
          </div>
        )}
        <Swiper
          className="Slide"
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          autoplay
        >
          {courses?.map((pro) => (
            <SwiperSlide>
              <div className="category-item" key={pro.id}>
                <div className="photo">
                  <img
                    style={{ height: "250px", objectFit: "cover" }}
                    className="img-fluid"
                    src={pro.photoUrl}
                    alt=""
                  />
                </div>
                <div className="cbox">
                  <p className="course-tags">
                    <span>{pro.categoryName}</span>
                  </p>
                  <h5>{pro.name}</h5>
                  <div className="course-rating clearfix">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span>({pro.rating} Ratings)</span>
                  </div>
                  <span className="course-price">
                    <span className="old-price">${pro.price}</span>$
                    {pro.discount}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestCourses;
