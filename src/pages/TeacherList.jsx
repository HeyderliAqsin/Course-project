import React, { useEffect, useState } from "react";
import { BASE_URL } from "../api/API";
import "./teacherlist.scss";

const TeacherList = () => {
  const [course, setCourses] = useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(() => {
    const getCourseList = () => {
      fetch(`${BASE_URL}/api/Course`)
        .then((c) => c.json())
        .then((c) => {
          setCourses(c);
          setLoading(true);
        });
    };
    getCourseList();
  }, []);
  return (
    <section id="TeacherList">
      <div className="container">
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/demo-1">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Our Teachers
            </li>
          </ol>
        </nav>
        <div className="instructors">
          <div className="row">
            <div className="col-lg-3">
              <div class="team-member">
                <div class="team-member-photo clearfix">
                  <img
                    class="img-fluid"
                    src="images/team-3.jpg"
                    alt="team-member-foto"
                  />
                  <div class="tm-social clearfix">
                    <ul class="text-center clearfix">
                      <li>
                        <a class="ico-facebook" href="/teachers-list#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a class="ico-twitter" href="/teachers-list#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a class="ico-linkedin" href="/teachers-list#">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="tm-meta">
                  <h5 class="h5-md">
                    <a href="/teacher-profile">Sam Richardson</a>
                  </h5>
                  <span>Head Of Department</span>
                  <div class="tm-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="tm-rating">4.89</span>
                  </div>
                  <p class="p-sm">31 Reviews</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div class="team-member">
                <div class="team-member-photo clearfix">
                  <img
                    class="img-fluid"
                    src="images/team-3.jpg"
                    alt="team-member-foto"
                  />
                  <div class="tm-social clearfix">
                    <ul class="text-center clearfix">
                      <li>
                        <a class="ico-facebook" href="/teachers-list#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a class="ico-twitter" href="/teachers-list#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a class="ico-linkedin" href="/teachers-list#">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="tm-meta">
                  <h5 class="h5-md">
                    <a href="/teacher-profile">Sam Richardson</a>
                  </h5>
                  <span>Head Of Department</span>
                  <div class="tm-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="tm-rating">4.89</span>
                  </div>
                  <p class="p-sm">31 Reviews</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div class="team-member">
                <div class="team-member-photo clearfix">
                  <img
                    class="img-fluid"
                    src="images/team-3.jpg"
                    alt="team-member-foto"
                  />
                  <div class="tm-social clearfix">
                    <ul class="text-center clearfix">
                      <li>
                        <a class="ico-facebook" href="/teachers-list#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a class="ico-twitter" href="/teachers-list#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a class="ico-linkedin" href="/teachers-list#">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="tm-meta">
                  <h5 class="h5-md">
                    <a href="/teacher-profile">Sam Richardson</a>
                  </h5>
                  <span>Head Of Department</span>
                  <div class="tm-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="tm-rating">4.89</span>
                  </div>
                  <p class="p-sm">31 Reviews</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div class="team-member">
                <div class="team-member-photo clearfix">
                  <img
                    class="img-fluid"
                    src="images/team-3.jpg"
                    alt="team-member-foto"
                  />
                  <div class="tm-social clearfix">
                    <ul class="text-center clearfix">
                      <li>
                        <a class="ico-facebook" href="/teachers-list#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a class="ico-twitter" href="/teachers-list#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a class="ico-linkedin" href="/teachers-list#">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="tm-meta">
                  <h5 class="h5-md">
                    <a href="/teacher-profile">Sam Richardson</a>
                  </h5>
                  <span>Head Of Department</span>
                  <div class="tm-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="tm-rating">4.89</span>
                  </div>
                  <p class="p-sm">31 Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherList;
