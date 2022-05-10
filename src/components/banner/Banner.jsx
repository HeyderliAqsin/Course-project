import React from "react";
import "./banner.scss";

const Banner = () => {
  return (
    <>
      <section id="Banner">
        <div className="container">
          <div class="banner-holder">
            <div class="row d-flex align-items-center">
              <div class="col-lg-8">
                <div class="banner-img">
                  <img
                    className="img-fluid"
                    src="/images/banner-3-img.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="banner-txt">
                  <h4>
                    Learn something new every day with<span>eTreeks</span>
                  </h4>
                  <a class="btn btn-rose" href="/courses-list">
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
