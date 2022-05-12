import React, { useEffect, useState } from "react";
import { BASE_URL } from "../api/API";
import "./teacherlist.scss";

const TeacherList = () => { 
  const [instructor, setInstructor] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getInstructorList = () => {
      fetch(`${BASE_URL}/api/Instructor`)
        .then((c) => c.json())
        .then((c) => {
          setInstructor(c);
          setLoading(true);
        });
    };
    getInstructorList();
  }, []);
  return (
    <section id="TeacherList">
      <div className="container">
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Our Teachers
            </li>
          </ol>
        </nav>
        <div className="instructors">
          <div className="row">
            {!loading && <div className="container">Loading...</div>}
            {instructor && instructor.map((pro) => (
            <div className="col-lg-3">
              <div className="team-member">
                <div className="team-member-photo clearfix">
                  <img
                  style={{height:"400px",objectFit:"cover"}}
                  className="img-fluid"
                    src={pro.photoUrl}
                    alt="team-member-foto"
                  />
                  <div className="tm-social clearfix">
                    <ul className="text-center clearfix">
                      <li>
                        <a className="ico-facebook" href="/teachers-list#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a className="ico-twitter" href="/teachers-list#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a className="ico-linkedin" href="/teachers-list#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tm-meta">
                  <h5 className="h5-md">
                    <a href="/teacher-profile">{pro.name}</a>
                  </h5>
                  <span>{pro.profession}</span>
                  <div className="tm-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span className="tm-rating">{pro.rating}</span>
                  </div>
                  <p className="p-sm">{pro.review} Reviews</p>
                </div>
              </div>
            </div>
             ))}
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default TeacherList;
