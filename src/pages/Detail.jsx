import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../api/API";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Detail.scss";

const Detail = () => {
  const { id} = useParams();
  const [singleCourse, setSingleCourse] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/api/Course/${id}`)
      .then((c) => c.json())
      .then((c) => setSingleCourse(c));
    setLoading(false);
    return () => {};
  }, [id]);

  return (
    <section id="Detail">
      <div id="breadcrumb" class="division">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="/demo-1">Home</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="/undefined">Back to Blog</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Egestas volute...
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="course-detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="course-txt">
                <h3>WordPress for Beginners: Create a Website Step by Step</h3>
                <p>
                  Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                  porta justo. Velna vitae auctor congue magna nihil impedit
                  ligula risus mauris donec magnis
                </p>
                <p class="course-short-data">
                  Created by: Kally Brooks • Last updated: 2/2020 • Languages:
                  English, German + 7 more
                </p>
                <div class="course-rating clearfix">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                  <span>4.84 (468 Ratings) • 14,425 Students Enrolled</span>
                </div>
                <div class="what-you-learn">
                  <h5>What you'll learn</h5>
                  <div class="row">
                    <div class="col-lg-6">
                      <ul class="txt-list">
                        <li>Nullam rutrum eget nunc varius</li>
                        <li>
                          Integer congue magna at pretium purus pretium ligula
                          undo rutrum
                        </li>
                        <li>
                          Risus at congue etiam aliquam sapien an egestas
                          posuere blandit
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-6">
                      <ul class="txt-list">
                        <li>Pretium ligula at rutrum dolor auctor</li>
                        <li>
                          Ligula at rutrum risus integer congue magna at pretium
                          purus pretium
                        </li>
                        <li>
                          Congue etiam aliquam egestas sapien undo posuere
                          auctor magna
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        {loading && <p>Loading...</p>}
        {singleCourse != null ? (
            <div className="col-lg-4">
              <div class="course-data">
                <img
                  class="img-fluid"
                  src={singleCourse.photoUrl}
                  alt={singleCourse.name}
                />
                <div class="course-data-price text-center">
                  $ {singleCourse.price}<span class="old-price">$124.99</span>
                  <p class="p-sm">16 days left at this price!</p>
                </div>
                <div class="course-data-links">
                  <a
                    class="btn btn-md btn-rose tra-grey-hover"
                    href="/course-details#"
                  >
                    Start Course Now
                  </a>
                  <a
                    class="btn btn-md btn-grey rose-hover"
                    href="/course-details#"
                  >
                    Add To List
                  </a>
                </div>
                <div class="course-data-list">
                  <span>This course includes:</span>
                  <p>
                    <i class="fas fa-graduation-cap"></i>English, German,
                    Italian and 7 more
                  </p>
                  <p>
                    <i class="far fa-play-circle"></i> 3 hours on-demand video
                  </p>
                  <p>
                    <i class="fas fa-file-archive"></i> 12 downloadable
                    resources
                  </p>
                  <p>
                    <i class="far fa-bookmark"></i> Full lifetime access
                  </p>
                  <p>
                    <i class="fas fa-mobile-alt"></i>Access on mobile and TV
                  </p>
                  <p>
                    <i class="far fa-id-card"></i>Certificate of Completion
                  </p>
                </div>
              </div>
            </div>
        ):(
          <div className="col-lg-4">
          <Skeleton width={"20%"} count={1} />
          <Skeleton width={"40%"} count={2} />
          <Skeleton width={"15%"} count={1} />
          <Skeleton width={"80%"} count={4} />
          <Skeleton width={"15%"} count={1} />
        </div>
        )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
