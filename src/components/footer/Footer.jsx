import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="logo">
                <img width={170} src="/images/logo (1).png" alt="" />
                <p>
                  Aliquam orci a nullam tempor sapien gravida donec enim ipsum
                  porta justo velna an auctor undo congue magna laoreet augue
                  sapien
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="middle">
                <div className="row">
                  <div className="col-lg-5">
                    <h5>Quick Links</h5>
                    <ul class="list-unstyled">
                      <li>
                        <a href="/about">About eTreeks</a>
                      </li>
                      <li>
                        <a href="/categories-list">Courses Catalog</a>
                      </li>
                      <li>
                        <a href="/reviews">Our Testimonials</a>
                      </li>
                      <li>
                        <a href="/pricing">Premium Learning</a>
                      </li>
                      <li>
                        <a href="/blog-listing">From the Blog</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-7">
                    <h5 class="h5-md">Popular Categories</h5>
                    <ul class="list-unstyled">
                      <li>
                        <a href="/demo-1#">Business English</a>
                      </li>
                      <li>
                        <a href="/demo-1#">Software Development</a>
                      </li>
                      <li>
                        <a href="/demo-1#">Finance &amp; Accounting</a>
                      </li>
                      <li>
                        <a href="/demo-1#">Health and Fitness</a>
                      </li>
                      <li>
                        <a href="/demo-1#">Office Productivity</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div class="right">
                <h5>Stay in Touch</h5>
                <form class="newsletter-form">
                  <div class="input-group">
                    <input
                      type="email"
                      autocomplete="off"
                      className="form-control"
                      placeholder="Your Email Address"
                      required=""
                    />
                    <span class="input-group-btn">
                      <button type="submit" class="btn btn-rose tra-rose-hover">
                        Subscribe
                      </button>
                    </span>
                  </div>
                  <label class="form-notification"></label>
                </form>
              </div>
            </div>
          </div>
          <div class="bottom-footer">
            <div class="row">
              <div class="col-lg-8">
                <ul class="d-flex bottom-footer-list list-unstyled">
                  <li>
                    <p>© Copyright eTreeks 2022</p>
                  </li>
                  <li>
                    <p>
                      <a href="tel:123456789">508.746.9892</a>
                    </p>
                  </li>
                  <li>
                    <p class="last-li">
                      <a href="mailto:yourdomain@mail.com">hello@domain.com</a>
                    </p>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 text-right">
                <ul class="foo-socials text-center clearfix list-unstyled">
                  <li>
                    <a class="ico-facebook" href="/demo-1#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a class="ico-twitter" href="/demo-1#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a class="ico-google-plus" href="/demo-1#">
                      <i class="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    <a class="ico-tumblr" href="/demo-1#">
                      <i class="fab fa-tumblr"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
