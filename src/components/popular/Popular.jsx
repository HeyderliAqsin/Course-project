import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "./popular.scss";

const Popular = ({loading,data}) => {
  return (
    <section id="Popular">
      <div className="container">
        <div className="top-text d-flex justify-content-between align-items-center">
          <div className="txt">
            <h3>Most Popular Courses</h3>
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
        <div className="row">
        {!loading && (
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Skeleton  count={10} />
              <Skeleton width={"50%"} count={1} />
              <Skeleton width={"10%"} count={1} />
              <Skeleton width={"30%"} count={1} />
              <Skeleton width={"30%"} count={1} />
            </div>
            <div className="col-lg-3">
              <Skeleton count={10} />
              <Skeleton width={"50%"} count={1} />
              <Skeleton width={"10%"} count={1} />
              <Skeleton width={"30%"} count={1} />
              <Skeleton width={"30%"} count={1} />
            </div>
            <div className="col-lg-3">
              <Skeleton count={10} />
              <Skeleton width={"50%"} count={1} />
              <Skeleton width={"10%"} count={1} />
              <Skeleton width={"30%"} count={1} />
              <Skeleton width={"30%"} count={1} />
            </div>
            <div className="col-lg-3">
              <Skeleton count={10} />
              <Skeleton width={"50%"} count={1} />
              <Skeleton width={"10%"} count={1} />
              <Skeleton width={"30%"} count={1} />
              <Skeleton width={"30%"} count={1} />
            </div>
          </div>
        </div>
        )}
          {data && data.map((pro) => (
            <div className="col-lg-3 mb-4" key={pro.id}>
              <div className="category-item">
                <div className="photo">
                  <img
                  style={{height:"250px",objectFit:"cover"}}
                    className="img-fluid"
                    src={pro.photoUrl}
                    alt=""
                  />
                </div>
                <div className="cbox">
                  <p className="course-tags">
                    <Link to={`/about/${pro.id}`}>
                      <span>{pro.category.name}</span>
                      </Link>
                  </p>
                  <Link to={`/detail/${pro.id}`}>
                    <h5>{pro.name}</h5>
                  </Link>
                  <div className="course-rating clearfix">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span> ({pro.rating} Ratings)</span>
                  </div>
                  <span className="course-price">
                    <span className="old-price"> $140.99</span>
                    {pro.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
