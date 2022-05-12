import React from "react";
import "./onedu.scss";

const OnEdu = () => {
  return (
    <section id="Edu">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-6">
            <div className="leftSide">
              <img src="/images/image-01.png" alt="" />
            </div>
          </div>
          <div className="col-md-7 col-lg-6">
            <div className="txt-block mb-40">
              <h3 className="h3-sm">
                Transform your life through online education
              </h3>
              <p>
                An enim nullam tempor sapien gravida donec porta and blandit
                ipsum enim justo integer velna vitae auctor integer congue magna
                and purus pretium risus ligula rutrum luctus ultrice
              </p>
              <ul className="txt-list mb-15">
                <li>Nullam rutrum eget nunc varius etiam mollis risus undo</li>
                <li>
                  Integer congue magna at pretium purus pretium ligula at rutrum
                  risus luctus dolor auctor ipsum blandit purus
                </li>
                <li>Risus at congue etiam aliquam sapien egestas posuere</li>
                <li>
                  At pretium purus integer congue magna pretium ligula at ipsum
                  blandit purus rutrum risus luctus dolor auctor
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnEdu;
