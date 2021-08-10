import React, { useContext } from "react";
import CoursesContext from "../Context/courses-context";
// import { Link } from "react-router-dom";
const CourseCard = (props) => {
  const ctx = useContext(CoursesContext);

  const courseUpdate = (course) => {
    ctx.setCourse(course);
    props.history.push(`${props.match.url}/courses/${props.course.CrsId}`);
  };

  return (
    <>
      {/* <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 filter"> */}
      {/* <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4"> */}
      <div className="item col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div className="card">
          <div className="thumb">
            <img
              className="card-img"
              src={props.course.TNUrl}
              alt={props.course.CName}
            />
            <div className="fav">
              <span>
                <i onClick="myFunction(this)" className="far fa-bookmark"></i>
              </span>
            </div>
            <div className="img_overlay">
              <div className="tag">Best Seller</div>
              <div className="center">
                <span>Preview Course</span>
              </div>
            </div>
            {/* <a href="#c" className="stretched-link"></a> */}
            {/* <Link
              to={`${props.match.url}/courses/${props.course.CrsId}`}
              className="stretched-link"
            ></Link> */}
            <div
              onClick={() => courseUpdate(props.course)}
              className="stretched-link"
            ></div>
          </div>
          <div className="card-body">
            <p>
              Faculty: {props.course.CouFaculties}
              <span>
                <a className="view_more" href="#courses">
                  {props.course.MCategory}
                </a>
              </span>
            </p>
            <h3 className="card-title">{props.course.CName}</h3>
            <p className="card-text">
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </p>
            <hr />
            <p className="card_footer">
              <a className="sdt" href="#">
                <i className="far fa-user"></i>121
              </a>
              <a className="price" href="#">
                <i className="fas fa-rupee-sign"></i>875.25
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CourseCard;
