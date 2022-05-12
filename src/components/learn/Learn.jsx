import React from "react";
import "./learn.scss";

const Learn = () => {
  return (
    <>
      <section id="Learn">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
                  <div className="txt-block">
                    <h3 className="h3-sm">
                      Learn new personal &amp; professional skills online
                    </h3>
                    <p>
                      An enim nullam tempor sapien gravida donec porta and
                      blandit ipsum enim justo integer velna vitae auctor
                      integer congue magna and purus pretium risus ligula rutrum
                      luctus ultrice
                    </p>
                    <ul className="txt-list mb-15">
                      <li>
                        Nullam rutrum eget nunc varius etiam mollis risus undo
                      </li>
                      <li>
                        Integer congue magna at pretium purus pretium ligula at
                        rutrum risus luctus dolor auctor ipsum blandit purus
                      </li>
                      <li>
                        Risus at congue etiam aliquam sapien egestas posuere
                      </li>
                    </ul>
                    <a
                      className="btn btn-md btn-rose tra-black-hover"
                      href="/categories-list"
                    >
                      Start Learning Now
                    </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rightSide">
                <img className="img-fluid" src="/images/image-02.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Learn;
