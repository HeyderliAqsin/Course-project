import React from "react";
import "./quality.scss";

const Quality = () => {
  return (
    <>
      <section id="Quality">
        <div className="container">
          <div class="row">
            <div class="col-lg-10 offset-lg-1 text-center">
              <div class="services">
                <h3 class="h3-md">Get Quality Education with eTreeks</h3>
                <p class="p-md">
                  Integer congue magna at pretium purus pretium ligula at rutrum
                  luctus risus eros dolor auctor ipsum blandit luctus purus
                  vehicula magna a tempor laoreet
                </p>
                <a class="btn btn-md btn-rose" href="/demo-1#">
                  Start Learning Now!
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="row">
                <div class="col-lg-2 sbox">
                <img width={110} src="/images/online-learning.png" alt="" />
                  <h5 class="h5-xs">Trending Courses</h5>
                </div>
                <div class="col-lg-2 sbox">
                <img width={110} src="/images/online-learning.png" alt="" />
                  <h5 class="h5-xs">Trending Courses</h5>
                </div>
                <div class="col-lg-2 sbox">
                <img width={110} src="/images/online-learning.png" alt="" />
                  <h5 class="h5-xs">Trending Courses</h5>
                </div>
                <div class="col-lg-2 sbox">
                <img width={110} src="/images/online-learning.png" alt="" />
                  <h5 class="h5-xs">Trending Courses</h5>
                </div>
                <div class="col-lg-2 sbox">
                <img width={110} src="/images/online-learning.png" alt="" />
                  <h5 class="h5-xs">Trending Courses</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quality;
