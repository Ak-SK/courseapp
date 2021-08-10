import React from "react";
const Testimonal = (props) => {
  console.log(props.ctx.course);
  return (
    <>
      <section
        className="navbar_sect"
        // style={{ backgroundImage: "url(/images/bg4.jpg)" }}
        style={{ backgroundImage: `url(${props.ctx.course.CIUrl})` }}
      >
        <div className="course_details">
          <div className="container-fluid">
            <div className="inner_container">
              <p className="course_header">
                <img className="header_img" src="/images/4.jpg" alt="..." />
                <span className="instructor_name">Tony Stark</span>
                <span className="upload_date">
                  Last updated&nbsp;<span className="date">02/11/2019</span>
                </span>
              </p>
              <p className="course_title">
                {/* Designing a Online Course Website for education purpose */}
                {props.ctx.course.CName}
              </p>
              <p className="course_body">
                <span className="course_tag">Best Seller</span>
                <span className="course_rating">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="rating_value">4.5</span>
                  <span className="rating_count">(1,432 Ratings)</span>
                </span>
              </p>
              <p className="course_footer">
                <a className="students_count" href="#">
                  <i className="far fa-user"></i>&ensp;40&nbsp;
                  <span>students enrolled&emsp;</span>
                </a>
                <a className="review_count" href="#">
                  <i className="far fa-comment-alt"></i>&ensp;25&nbsp;
                  <span>Reviews</span>
                </a>
                <span className="flt_rt">
                  <i onClick="myFunction(this)" className="far fa-heart">
                    <span style={{ fontWeight: "normal !important" }}>
                      &ensp;Add to Wishlist
                    </span>
                  </i>
                  <button type="submit" className="share" value="">
                    <i className="fas fa-share-alt"></i>&ensp;Share
                  </button>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonal;
