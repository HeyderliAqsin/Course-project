import React from "react";
import "./opportunity.scss";

const Opportunity = () => {
  return (
    <>
      <section id="Opportunity">
        <div className="container">
          <div className="top-txt">
            <h3>Best Learning Opportunities</h3>
            <p>
              Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
              primis libero tempus, blandit posuere and ligula varius magna a
              porta
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="box">
                <div className="photo">
                  <img width={70} src="/images/education.png" alt="" />
                </div>
                <div className="text">
                  <h5>Trending Course</h5>
                  <p>
                    Augue luctus egestas luctus neque purus an ipsum neque dolor
                    primis libero tempus at blandit massa
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <div className="photo">
                  <img width={70} src="/images/presentation.png" alt="" />
                </div>
                <div className="text">
                  <h5>Certified Teachers</h5>
                  <p>
                    Augue luctus egestas luctus neque purus an ipsum neque dolor
                    primis libero tempus at blandit massa
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <div className="photo">
                  <img width={70} src="/images/certificate.png" alt="" />
                </div>
                <div className="text">
                  <h5>Graduation Certificate</h5>
                  <p>
                    Augue luctus egestas luctus neque purus an ipsum neque dolor
                    primis libero tempus at blandit massa
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <div className="photo">
                  <img width={70} src="/images/elearning-1.png" alt="" />
                </div>
                <div className="text">
                  <h5>Online Course Facilities</h5>
                  <p>
                    Augue luctus egestas luctus neque purus an ipsum neque dolor
                    primis libero tempus at blandit massa
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <div className="photo">
                  <img width={70} src="/images/reading.png" alt="" />
                </div>
                <div className="text">
                  <h5>Free Books & Library</h5>
                  <p>
                    Augue luctus egestas luctus neque purus an ipsum neque dolor
                    primis libero tempus at blandit massa
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <div className="photo">
                  <img width={70} src="/images/bookshelf.png" alt="" />
                </div>
                <div className="text">
                  <h5>Free Study Materials</h5>
                  <p>
                    Augue luctus egestas luctus neque purus an ipsum neque dolor
                    primis libero tempus at blandit massa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Opportunity;
