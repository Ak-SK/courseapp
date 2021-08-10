import React from "react";

const CourseCard = () => {
  return (
    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
      <div class="card">
        <div class="thumb">
          <img class="card-img" src="/images/s6.jpg" alt="Card image" />
          <div class="fav">
            <span>
              <i
                class="far fa-minus-square"
                data-toggle="tooltip"
                data-placement="left"
                title="Remove"
              ></i>
            </span>
          </div>
          <div class="img_overlay">
            <div class="center">Preview Course</div>
          </div>
          <a href="courses_single.html" class="stretched-link"></a>
        </div>
        <div class="card-body">
          <p>
            Author's Name
            <span>
              <a class="view_more" href="#">
                view more
              </a>
            </span>
          </p>
          <h3 class="card-title">Title of the course goes here</h3>
          <p class="card-text">
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </p>
          <hr />
          <p class="card_footer">
            <a class="sdt" href="courses_single.html">
              <i class="far fa-user"></i>121
            </a>
            <a class="price" href="courses_single.html">
              <i class="fas fa-rupee-sign"></i>875.25
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
