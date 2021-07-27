import React from "react";
import { Link } from "react-router-dom";
const CourseCard = (props) => {
  return (
    <>
      {/* <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 filter"> */}
      {/* <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4"> */}
      <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div class="card">
          <div class="thumb">
            <img
              class="card-img"
              src={props.course.TNUrl}
              alt={props.course.CName}
            />
            <div class="fav">
              <span>
                <i onClick="myFunction(this)" class="far fa-bookmark"></i>
              </span>
            </div>
            <div class="img_overlay">
              <div class="tag">Best Seller</div>
              <div class="center">
                <span>Preview Course</span>
              </div>
            </div>
            {/* <a href="#c" class="stretched-link"></a> */}
            <Link
              to={`${props.match.url}/courses/${props.course.CrsId}`}
              class="stretched-link"
            ></Link>
          </div>
          <div class="card-body">
            <p>
              Faculty: {props.course.CouFaculties}
              <span>
                <a class="view_more" href="#courses">
                  {props.course.MCategory}
                </a>
              </span>
            </p>
            <h3 class="card-title">{props.course.CName}</h3>
            <p class="card-text">
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </p>
            <hr />
            <p class="card_footer">
              <a class="sdt" href="#">
                <i class="far fa-user"></i>121
              </a>
              <a class="price" href="#">
                <i class="fas fa-rupee-sign"></i>875.25
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CourseCard;
