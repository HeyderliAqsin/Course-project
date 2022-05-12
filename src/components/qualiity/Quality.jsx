import React from "react";
import "./quality.scss";

const Quality = () => {
  return (
    <>
      <section id="Quality">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 text-center">
              <div className="services">
                <h3 className="h3-md">Get Quality Education with eTreeks</h3>
                <p className="p-md">
                  Integer congue magna at pretium purus pretium ligula at rutrum
                  luctus risus eros dolor auctor ipsum blandit luctus purus
                  vehicula magna a tempor laoreet
                </p>
                <a className="btn btn-md btn-rose" href="/demo-1#">
                  Start Learning Now!
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row">
                <div className="col-lg-2 sbox">
                <img width={110} src="/images/online-learning.png" alt="" />
                  <h5 className="h5-xs">Trending Courses</h5>
                </div>
                <div className="col-lg-2 sbox">
                <img width={110} src="/images/online-learning.png" alt="" />
                  <h5 className="h5-xs">Trending Courses</h5>
                </div>
                <div className="col-lg-2 sbox">
                <img width={110} src="/images/online-learning.png" alt="" />
                  <h5 className="h5-xs">Trending Courses</h5>
                </div>
                <div className="col-lg-2 sbox">
                <img width={110} src="/images/online-learning.png" alt="" />
                  <h5 className="h5-xs">Trending Courses</h5>
                </div>
                <div className="col-lg-2 sbox">
                <img width={110} src="/images/online-learning.png" alt="" />
                  <h5 className="h5-xs">Trending Courses</h5>
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
