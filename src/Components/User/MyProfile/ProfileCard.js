import React from "react";

const ProfileCard = () => {
  return (
    <>
      <div class="col-sm-6 col-md-6 col-lg-3">
        <div class="details-box">
          <div class="details">
            <p class="title">Certifications</p>
            <p class="counter value" data-target="1">
              0
            </p>
          </div>
          <div class="icon">
            <i class="fas fa-certificate"></i>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-3">
        <div class="details-box">
          <div class="details">
            <p class="title">Courses</p>
            <p class="counter value" data-target="11">
              0
            </p>
          </div>
          <div class="icon style1">
            <i class="fas fa-tv"></i>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-md-6 col-lg-3">
        <div class="details-box">
          <div class="details">
            <p class="title">Reviews</p>
            <p class="counter value" data-target="02">
              0
            </p>
          </div>
          <div class="icon style2">
            <i class="far fa-star"></i>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-md-6 col-lg-3">
        <div class="details-box">
          <div class="details">
            <p class="title">Bookmarks</p>
            <p class="counter value" data-target="98">
              0
            </p>
          </div>
          <div class="icon style3">
            <i class="far fa-heart"></i>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-md-6 col-lg-3">
        <div class="details-box">
          <div class="details">
            <p class="title">Ongoing</p>
            <p class="counter value" data-target="4">
              0
            </p>
          </div>
          <div class="icon style4">
            <i class="far fa-pause-circle"></i>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-md-6 col-lg-3">
        <div class="details-box">
          <div class="details">
            <p class="title">Completed</p>
            <p class="counter value" data-target="26">
              0
            </p>
          </div>
          <div class="icon style5">
            <i class="far fa-check-circle"></i>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-md-6 col-lg-3">
        <div class="details-box">
          <div class="details">
            <p class="title">Orders</p>
            <p class="counter value" data-target="06">
              0
            </p>
          </div>
          <div class="icon style6">
            <i class="fas fa-clipboard-check"></i>
          </div>
        </div>
      </div>

      <div class="col-sm-6 col-md-6 col-lg-3">
        <div class="details-box">
          <div class="details">
            <p class="title">Others</p>
            <p class="counter value" data-target="99">
              0
            </p>
          </div>
          <div class="icon style7">
            <i class="fas fa-ribbon"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
