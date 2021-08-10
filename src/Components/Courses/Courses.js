import React, { useState, useEffect } from "react";

import CoursesFilter from "./CoursesFilter";
import CourseCard from "../../Reusable/CourseCard";
// import CoursesContext from "../../Context/courses-context";
import Spinner from "../../UI/Spinner/Spinner";
// import AWS from "../../Services/AWS";
import getCourses from "./CoursesDB";

// const docClient = new AWS.DynamoDB.DocumentClient();

const Courses = (props) => {
  // const ctx = useContext(CoursesContext);
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    // let data = getCoursesData();
    // console.log(data);
    // var params = {
    //   TableName: "Courses"
    // };
    getCourses((courses) => setCourses(courses.Items));
    // props.history.push(`${props.match.url}/courses`);
    // docClient.scan(params, function (err, data) {
    //   if (!err) {
    //     setCourses(data.Items);
    //   } else {
    //     console.log("Courses.js", err);
    //   }
    // });
  }, []);

  let coursesLists = null;
  if (courses === null) {
    coursesLists = <Spinner />;
  } else {
    coursesLists = courses.map((course, i) => (
      <CourseCard course={course} key={i} {...props} />
    ));
  }

  return (
    <>
      {/* courses banner image */}
      <section
        className="navbar_sect"
        style={{ backgroundImage: "url(/images/bg4.jpg)" }}
      >
        <div className="courses_section">
          <div className="container-fluid">
            <div className="inner_container">
              <h1>COURSES</h1>
              <p>
                <a href="index.html">Home</a>&ensp;/&ensp;Courses
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sect3_courses">
        <div className="container-fluid p-0">
          <div className="row" style={{ margin: "0" }}>
            <CoursesFilter />
            <div className="col-md-8 col-lg-9 col-xl-9 course-grid">
              <p className="row_head">
                <span className="noi">
                  85&ensp;<i>Results&emsp;</i>1,145&ensp;<i>Video Tutorials</i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for Institutes"
                  style={{ width: "30%" }}
                />
                <button
                  className="form-control-feedback"
                  type="submit"
                  value="search"
                >
                  <i className="fa fa-search"></i>
                </button>
              </p>
              <div className="row">{coursesLists}</div>
              <div className="mbp_pagination">
                <ul className="page_navigation">
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#a"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      <span>
                        <i className="fas fa-arrow-left"></i>
                      </span>
                      &ensp;Prev
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#a">
                      1
                    </a>
                  </li>
                  <li className="page-item" aria-current="page">
                    <a className="page-link" href="#s">
                      2 <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#9d">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#d">
                      ...
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#ds">
                      14
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#asd">
                      <span>
                        Next&ensp;<i className="fas fa-arrow-right"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Courses;
