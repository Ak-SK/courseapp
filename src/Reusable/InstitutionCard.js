import React from "react";
const InstitutionCard = () => {
  return (
    <>
      <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div class="card">
          <img class="card-img" src="/images/inst5.jpg" alt="Card" />
          <a href="single.html" class="stretched-link"></a>
          <div class="card-body text-center">
            <h3 class="card-title">Institute Name</h3>
            <p class="card-text">
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </p>
            <p class="inst_place">Chennai</p>
            <hr />
            <p class="card_footer">
              <a class="sdt" href="#l">
                56,178 students
              </a>
              <a class="cor" href="courses.html">
                22 courses
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default InstitutionCard;
