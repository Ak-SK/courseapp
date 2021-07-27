import React from "react";
const Testimonal = () => {
  return (
    <>
      <section
        class="navbar_sect"
        style={{ backgroundImage: "url(/images/bg4.jpg)" }}
      >
        <div class="course_details">
          <div class="container-fluid">
            <div class="inner_container">
              <p class="course_header">
                <img class="header_img" src="/images/4.jpg" alt="..." />
                <span class="instructor_name">Tony Stark</span>
                <span class="upload_date">
                  Last updated&nbsp;<span class="date">02/11/2019</span>
                </span>
              </p>
              <p class="course_title">
                Designing a Online Course Website for education purpose
              </p>
              <p class="course_body">
                <span class="course_tag">Best Seller</span>
                <span class="course_rating">
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="rating_value">4.5</span>
                  <span class="rating_count">(1,432 Ratings)</span>
                </span>
              </p>
              <p class="course_footer">
                <a class="students_count" href="#">
                  <i class="far fa-user"></i>&ensp;40&nbsp;
                  <span>students enrolled&emsp;</span>
                </a>
                <a class="review_count" href="#">
                  <i class="far fa-comment-alt"></i>&ensp;25&nbsp;
                  <span>Reviews</span>
                </a>
                <span class="flt_rt">
                  <i onClick="myFunction(this)" class="far fa-heart">
                    <span style={{ fontWeight: "normal !important" }}>
                      &ensp;Add to Wishlist
                    </span>
                  </i>
                  <button type="submit" class="share" value="">
                    <i class="fas fa-share-alt"></i>&ensp;Share
                  </button>
                </span>
              </p>
              {/* <script>
				function myFunction(x) {
					x.classList.toggle("fas");
				}
			</script> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonal;
