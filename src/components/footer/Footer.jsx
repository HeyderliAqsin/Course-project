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
                    <h5 className="h5-md">Popular Categories</h5>
                    <ul className="list-unstyled">
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
              <div className="right">
                <h5>Stay in Touch</h5>
                <form className="newsletter-form">
                  <div className="input-group">
                    <input
                      type="email"
                      autocomplete="off"
                      className="form-control"
                      placeholder="Your Email Address"
                      required=""
                    />
                    <span className="input-group-btn">
                      <button type="submit" className="btn btn-rose tra-rose-hover">
                        Subscribe
                      </button>
                    </span>
                  </div>
                  <label className="form-notification"></label>
                </form>
              </div>
            </div>
          </div>
          <div className="bottom-footer">
            <div className="row">
              <div className="col-lg-8">
                <ul className="d-flex bottom-footer-list list-unstyled">
                  <li>
                    <p>© Copyright eTreeks 2022</p>
                  </li>
                  <li>
                    <p>
                      <a href="tel:123456789">508.746.9892</a>
                    </p>
                  </li>
                  <li>
                    <p className="last-li">
                      <a href="mailto:yourdomain@mail.com">hello@domain.com</a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 text-right">
                <ul className="foo-socials text-center clearfix list-unstyled">
                  <li>
                    <a className="ico-facebook" href="/demo-1#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a className="ico-twitter" href="/demo-1#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a className="ico-google-plus" href="/demo-1#">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    <a className="ico-tumblr" href="/demo-1#">
                      <i className="fab fa-tumblr"></i>
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
