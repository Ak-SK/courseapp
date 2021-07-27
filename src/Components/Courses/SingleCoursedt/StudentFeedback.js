import React from "react";
const StudentFeedbackList = () => {
  return (
    <>
      <div class="review">
        <h3>Review</h3>
        {/* <!---------------- Row 1-----------------> */}
        <div class="review-card">
          <div class="row">
            <div class="col-sm-1 col-md-1">
              <img class="img" src="/images/1.jpg" />
            </div>
            <div class="col-sm-11 col-md-11">
              <p class="r-name">
                Naruto Uzumaki
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </p>
              <p class="r-date">6 months ago</p>
              <p class="r-para">
                This is the second Photoshop course I have completed with
                Cristian. Worth every penny and recommend it highly. To get the
                most out of this course, its best to to take the Beginner to
                Advanced course first.
              </p>
            </div>
          </div>
        </div>

        {/* <!------------------ Row 2-----------------> */}
        <div class="review-card">
          <div class="row">
            <div class="col-md-1">
              <img class="img" src="/images/2.jpg" />
            </div>
            <div class="col-md-11">
              <p class="r-name">
                Uchicha Sasuke
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </p>
              <p class="r-date">15 days ago</p>
              <p class="r-para">
                This is the second Photoshop course I have completed with
                Cristian. Worth every penny and recommend it highly. To get the
                most out of this course, its best to to take the Beginner to
                Advanced course first.
              </p>
            </div>
          </div>
        </div>

        {/* <!-------------------- Row 3-----------------> */}
        <div class="review-card">
          <div class="row">
            <div class="col-md-1">
              <img class="img" src="/images/3.jpg" />
            </div>
            <div class="col-md-11">
              <p class="r-name">
                Haruno Sakura
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </p>
              <p class="r-date">2 months ago</p>
              <p class="r-para">
                This is the second Photoshop course I have completed with
                Cristian. Worth every penny and recommend it highly. To get the
                most out of this course, its best to to take the Beginner to
                Advanced course first.
              </p>
            </div>
          </div>
        </div>
        {/* <!--------------------/ /------------------------> */}
        <form action="courses.html" method="get">
          <button type="submit" class="review_btn">
            View More Review
          </button>
        </form>
      </div>
    </>
  );
};
export default StudentFeedbackList;
