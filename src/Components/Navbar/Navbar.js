import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import $ from "jquery";

const Overlay = (props) => {
  return (
    <div className="overlay">
      <div className="header">
        <img className="img-fluid" src="/images/4.jpg" alt="userprofile" />
        <p>
          <span className="usern" id="username">
            {/* {props.userDetail.name} */}
          </span>
          <br />
          <small id="usermail">{/* {props.userDetail.email} */}</small>
        </p>
      </div>
      <ul className="list">
        <li className="list-item">
          <a className="list-link" href="user-dashboard.html">
            My Profile
          </a>
          <i className="far fa-id-badge"></i>
        </li>
        <li className="list-item">
          <a className="list-link" href="user-dashboard.html">
            My Courses
          </a>
          <i className="fas fa-tv"></i>
        </li>
        <li className="list-item">
          <a className="list-link" href="user-order.html">
            Purchase History
          </a>
          <i className="fas fa-history"></i>
        </li>
        <li className="list-item">
          <a className="list-link" href="help.html">
            Help
          </a>
          <i className="far fa-question-circle"></i>
        </li>
        <li className="list-item">
          <a className="list-link" href="login.html" onClick={props.logout}>
            Logout
          </a>
          <i className="fas fa-sign-out-alt"></i>
        </li>
      </ul>
    </div>
  );
};

// const navigateToAllCourses = (props) => {
//   props.history.push(`${props.match.url}/courses`);
// };

const Navbar = (props) => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    $(document).ready(function () {
      $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
          $(".fixed-top").css("background-color", "#fff");
          $("#navigation").css("box-shadow", "0px 0px 30px rgb(0 0 0 / 10%)");
          $(".navbar_img").css(
            "background-image",
            "url(/images/logo_black.png)"
          );
          $(".navbar-brand").css(
            "border-right",
            "1px solid rgba(0, 0, 0, 0.2)"
          );
          $(".nav-link").css("color", "#000");
          $("#usericon").css("color", "#000");
        } else {
          $(".fixed-top").css("background-color", "");
          $("#navigation").css("box-shadow", "");
          $(".navbar_img").css("background-image", "");
          $(".navbar-brand").css("border-right", "");
          $(".nav-link").css("color", "");
          $("#usericon").css("color", "");
        }
        if ($(window).scrollTop() > 100) {
          $(".nav-link").hover(
            function () {
              $(this).css("color", "#2441e7");
            },
            function () {
              $(this).css("color", "#000");
            }
          );
        } else {
          $(".nav-link").hover(
            function () {
              $(this).css("color", "");
            },
            function () {
              $(this).css("color", "");
            }
          );
        }
      });

      // Mobile Device
      // $("nav.navbar div.collapse ul.navbar-nav li.dropdown").hover(
      //   function () {
      //     $(this).find(".dropdown-menu").slideToggle(300);
      //   },
      //   function () {
      //     $(this).find(".dropdown-menu").slideToggle(100);
      //   }
      // );
    });
  }

  const [isOverlay, setIsOverlay] = useState(false);
  // console.log(props.userDetails.name, "navbar");
  // let user = JSON.parse(localStorage.getItem("userDetail"));

  // useEffect(() => {
  //   // user.current = JSON.parse(localStorage.getItem("userDetail"));
  //   console.log("Navbar", props.userDetail);
  //   console.log("Navbar", user);
  // }, []);

  const overlayHandler = () => {
    setIsOverlay((prevState) => {
      // console.log(userDetail, "overlay");
      return !prevState;
    });
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-dark fixed-top"
        id="navigation"
      >
        <a className="navbar-brand" href="#l">
          <div className="navbar_img"></div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                action="push"
                className="nav-link"
                to={`${props.match.url}/home`}
                style={{ paddingLeft: "0px" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              {/* <Link
                className="nav-link dropdown-toggle"
                id="navbardrop"
                data-toggle="dropdown"
              >
                Courses
              </Link> */}
              <a
                className="nav-link dropdown-toggle"
                href="#courses"
                id="navbardrop"
                data-toggle="dropdown"
              >
                Courses
              </a>
              {/* <!-- Dropdown Menu--> */}
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="courses.html">
                    FREE COURSES<i className="fas fa-chevron-right"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="dropdown-item" href="courses.html">
                        Course 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="courses.html">
                        Course 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="courses.html">
                        Course 3
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="courses.html">
                        Course 4
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="courses">
                    IAS<i className="fas fa-chevron-right"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="dropdown-item" href="courses.html">
                        Sub Item1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="courses.html">
                        Sub Item1.1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="courses.html">
                        Sub Item1.2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="courses.html">
                        Sub Item1.3
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="courses.html">
                        Sub Item1.4
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="courses.html">
                        View More
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="courses.html">
                    IES<i className="fas fa-chevron-right"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="dropdown-item" href="courses.html">
                        Sub Item2
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="courses.html">
                    NEET
                    <i
                      className="fas fa-chevron-right"
                      style={{ float: "right" }}
                    ></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="dropdown-item" href="courses.html">
                        Sub Item3
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="courses.html">
                        Sub Item3
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="courses.html">
                    GATE
                    <i
                      className="fas fa-chevron-right"
                      style={{ textalign: "right" }}
                    ></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="dropdown-item" href="courses.html">
                        Sub Item4
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="courses.html">
                        Sub Item4
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="courses.html">
                        Sub Item4
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  {/* <a
                    className="dropdown-item"
                    href={`${props.match.url}/courses`}
                    style={{ paddingLeft: "0px" }}
                  >
                    View All
                  </a> */}
                  <Link
                    action="push"
                    className="dropdown-item"
                    to={`${props.match.url}/courses`}
                    style={{ paddingLeft: "0px" }}
                  >
                    View All
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                // id="navigationitem2"
                href="#institution"
                id="navbardrop"
                data-toggle="dropdown"
              >
                Institutes
              </a>
              {/* <!-- Dropdown Menu--> */}
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="institution.html">
                    IAS<i className="fas fa-chevron-right"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="dropdown-item" href="#institution.html">
                        Sub Item
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#institution.html">
                        Sub Item
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="institution.html">
                    IES<i className="fas fa-chevron-right"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="dropdown-item" href="institution.html">
                        Sub Item2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="institution.html">
                        Sub Item2
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="institution.html">
                    NEET
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="institution.html">
                    GATE
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="institution.html">
                    RRB
                  </a>
                </li>
                <li>
                  {/* <a
                    className="dropdown-item"
                    href={`${props.match.url}/institution`}
                  >
                    View All
                  </a> */}
                  <Link
                    action="push"
                    className="dropdown-item"
                    to={`${props.match.url}/institution`}
                  >
                    View All
                  </Link>
                </li>
              </ul>
            </li>
            {/* <!-- Dropdown --> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#exam"
                // id="navbardrop"
                data-toggle="dropdown"
              >
                Exams
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#I">
                    IAS<i className="fas fa-chevron-right"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="dropdown-item" href="#s">
                        Sub Item
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#s">
                        Sub Item
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="#l">
                    IES<i className="fas fa-chevron-right"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="dropdown-item" href="#l">
                        Sub Item
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#l">
                        Sub Item
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#l">
                        Sub Item
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#l">
                        Sub Item
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="#l">
                    NEET<i className="fas fa-chevron-right"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="dropdown-item" href="#l">
                        Sub Item
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#l">
                        Sub Item
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="#l">
                    GATE<i className="fas fa-chevron-right"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="dropdown-item" href="#l">
                        Sub Item
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#l">
                        Sub Item
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="#l">
                    RRB<i className="fas fa-chevron-right"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a className="dropdown-item" href="#l">
                        Sub Item
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#l">
                        Sub Item
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    action="push"
                    className="dropdown-item"
                    to="/dashboard/exams"
                  >
                    View All
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                action="push"
                className="nav-link"
                to={`${props.match.url}/aboutus`}
              >
                Aboutus
              </Link>
            </li>
            <li className="nav-item">
              <Link
                action="push"
                className="nav-link"
                to={`${props.match.url}/contactus`}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <i className="far fa-user" id="usericon"></i>
              <Link action="push" className="nav-link" to={`/`}>
                Login&nbsp;/&nbsp;Register
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tooltip"
                data-placement="bottom"
                title="View Cart !"
                href="#f"
              >
                <i className="fas fa-shopping-cart"></i>
              </a>
            </li>
            <li className="prfl_img">
              <button type="button" className="btn" onClick={overlayHandler}>
                <img
                  className="img-fluid"
                  src="/images/4.jpg"
                  alt="userprofile"
                />
              </button>
              {isOverlay && (
                <Overlay logout={props.logout} userDetail={props.userDetail} />
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default React.memo(Navbar);
