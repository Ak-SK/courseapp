import React from "react";
const CourseReview = () => {
  return (
    <>
      <h3>Students Feedback</h3>
      <div class="row">
        {/* <!--------------------Progress Bar---------------------------------> */}
        <div class="col-sm-8 col-md-8 col-lg-9">
          <ul class="progressbar">
            <li>Stars 5</li>
            <div class="progress">
              <div class="progress-bar" style={{ width: "90%" }}></div>
            </div>
          </ul>
          <ul class="progressbar">
            <li>Stars 4</li>
            <div class="progress">
              <div class="progress-bar" style={{ width: "65%" }}></div>
            </div>
          </ul>
          <ul class="progressbar">
            <li>Stars 3</li>
            <div class="progress">
              <div class="progress-bar" style={{ width: "10%" }}></div>
            </div>
          </ul>
          <ul class="progressbar">
            <li>Stars 2</li>
            <div class="progress">
              <div class="progress-bar" style={{ width: "5%" }}></div>
            </div>
          </ul>
          <ul class="progressbar">
            <li>Stars 1</li>
            <div class="progress">
              <div class="progress-bar" style={{ width: "4%" }}></div>
            </div>
          </ul>
        </div>
        <div class="col-sm-4 col-md-4 col-lg-3">
          <p class="rating_value">4.5</p>
          <p class="rating">
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </p>
          <p class="ft">Course Rating</p>
        </div>
      </div>
    </>
  );
};
export default CourseReview;
