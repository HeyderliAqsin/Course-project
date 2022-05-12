import React from "react";
import "./banner.scss";

const Banner = () => {
  return (
    <>
      <section id="Banner">
        <div className="container">
          <div className="banner-holder">
            <div className="row d-flex align-items-center">
              <div className="col-lg-8">
                <div className="banner-img">
                  <img
                    className="img-fluid"
                    src="/images/banner-3-img.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="banner-txt">
                  <h4>
                    Learn something new every day with<span>eTreeks</span>
                  </h4>
                  <a className="btn btn-rose" href="/courses-list">
                    Find Out More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
