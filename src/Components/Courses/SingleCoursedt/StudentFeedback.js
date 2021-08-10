import React from "react";
const StudentFeedbackList = () => {
  return (
    <>
      <div className="review">
        <h3>Review</h3>
        {/* <!---------------- Row 1-----------------> */}
        <div className="review-card">
          <div className="row">
            <div className="col-sm-1 col-md-1">
              <img className="img" src="/images/1.jpg" />
            </div>
            <div className="col-sm-11 col-md-11">
              <p className="r-name">
                Naruto Uzumaki
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </p>
              <p className="r-date">6 months ago</p>
              <p className="r-para">
                This is the second Photoshop course I have completed with
                Cristian. Worth every penny and recommend it highly. To get the
                most out of this course, its best to to take the Beginner to
                Advanced course first.
              </p>
            </div>
          </div>
        </div>

        {/* <!------------------ Row 2-----------------> */}
        <div className="review-card">
          <div className="row">
            <div className="col-md-1">
              <img className="img" src="/images/2.jpg" />
            </div>
            <div className="col-md-11">
              <p className="r-name">
                Uchicha Sasuke
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </p>
              <p className="r-date">15 days ago</p>
              <p className="r-para">
                This is the second Photoshop course I have completed with
                Cristian. Worth every penny and recommend it highly. To get the
                most out of this course, its best to to take the Beginner to
                Advanced course first.
              </p>
            </div>
          </div>
        </div>

        {/* <!-------------------- Row 3-----------------> */}
        <div className="review-card">
          <div className="row">
            <div className="col-md-1">
              <img className="img" src="/images/3.jpg" />
            </div>
            <div className="col-md-11">
              <p className="r-name">
                Haruno Sakura
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </p>
              <p className="r-date">2 months ago</p>
              <p className="r-para">
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
          <button type="submit" className="review_btn">
            View More Review
          </button>
        </form>
      </div>
    </>
  );
};
export default StudentFeedbackList;
