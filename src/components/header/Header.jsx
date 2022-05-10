import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header>
        <section className="head">
          <div className="container">
            <div className="header d-flex justify-content-between align-items-center">
              <div className="logo">
                <Link to="/">
                  <img width={170} src="/images/logo (1).png" alt="" />
                </Link>
              </div>
              <nav>
                <ul className="d-flex list-unstyled align-items-center m-0">
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link className="dropdown" to="/pages">
                      Pages{" "}
                      <i style={{ fontSize: 12 }} class="fas fa-sort-down"></i>
                      <ul className="list-unstyled">
                        <li><a href="/">About Us Page</a></li>
                        <li><a href="/">Categories List</a></li>
                        <li><a href="/">Category Detail</a></li>
                        <li><a href="/">Course Details</a></li>
                        <li><Link to="/teacherlist">Teacher Listing</Link></li>
                        <li><a href="/">Teacher Profile</a></li>
                      </ul>
                    </Link>
                  </li>
                  <li>
                    <Link to="/categories">Categories</Link>
                  </li>
                  <li>
                    <Link to="/megamenu">Mega Menu</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contacts">Contacts</Link>
                  </li>
                  <Dropdown>
                    <Dropdown.Toggle
                      style={{ background: "#fff", border: "none" }}
                      id="dropdown-basic"
                    >
                      <span
                        style={{ borderRadius: "100px" }}
                        className="flag-icon flag-icon-gb m-2"
                      ></span>
                      <span style={{ color: "#171819" }}>EN</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        <span
                          style={{ borderRadius: "100px" }}
                          className="flag-icon flag-icon-az m-2"
                        ></span>
                        Azərbaycan dili
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">
                        <span
                          style={{ borderRadius: "100px" }}
                          className="flag-icon flag-icon-tr m-2"
                        ></span>
                        Türk dili
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <span
                          style={{ borderRadius: "100px" }}
                          className="flag-icon flag-icon-de m-2"
                        ></span>
                        Deutch
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        <span
                          style={{ borderRadius: "100px" }}
                          className="flag-icon flag-icon-ru m-2"
                        ></span>
                        Русский
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
