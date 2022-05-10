import React from "react";
import "./middletext.scss";

const MiddleText = () => {
  return (
    <section id="MiddleText">
      <div class="container">
        <div class="row">
            <div class="review">
              <div class="quote-ico">
                <img src="/images/left-quote.png" alt="" />
              </div>
              <p>
                An enim nullam tempor sapien gravida donec eTreeks - enim ipsum
                porta justo integer at odio velna and vitae auctor integer
                congue magna at pretium purus pretium ligula rutrum luctus risus
                ultrice luctus blandit congue magna. Sagittis congue augue
                egestas volutpat egestas magna consequat posuere nunc, eu
                porttitor neque
              </p>
              <div class="review-author">
                <div className="tst-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <h5 >Jennifer S.</h5>
                <span>Online Student (Public Relations)</span>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default MiddleText;
