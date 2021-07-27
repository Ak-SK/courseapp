import React from "react";
const CourseOverview = () => {
  return (
    <>
      <div class="demo_video">
        <video width="960" height="540" controls>
          <source src="vedio/sample-mp4-file.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="course_overview">
        <p class="title">Overview</p>
        <p class="para">Course Description</p>
        <p class="description_1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <p class="description_2">
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
      {/* <!------------------- What you'll learn -----------------> */}
      <div class="check_list">
        <p>What you'll learn</p>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <ul class="list_left">
              <li>
                <i class="fas fa-check"></i>Become a UX designer.
              </li>
              <li>
                <i class="fas fa-check"></i>You will be able to add UX designer
                to your CV
              </li>
              <li>
                <i class="fas fa-check"></i>Become a UI designer.
              </li>
              <li>
                <i class="fas fa-check"></i>Build & test a full website design.
              </li>
              <li>
                <i class="fas fa-check"></i>Build & test a full mobile app.
              </li>
            </ul>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <ul class="list_right">
              <li>
                <i class="fas fa-check"></i>Become a UX designer.
              </li>
              <li>
                <i class="fas fa-check"></i>You will be able to add UX designer
                to your CV
              </li>
              <li>
                <i class="fas fa-check"></i>Become a UI designer.
              </li>
              <li>
                <i class="fas fa-check"></i>Build & test a full website design.
              </li>
              <li>
                <i class="fas fa-check"></i>Build & test a full mobile app.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!----------------Requirements-------------------------> */}
      <div class="course_requirements">
        <p>Requirements</p>
        <ul class="req_list">
          <li>
            <i class="fas fa-circle"></i>You will need a copy of Adobe XD 2019
            or above. A free trial can be downloaded from Adobe.
          </li>
          <li>
            <i class="fas fa-circle"></i>No previous design experience is
            needed.
          </li>
          <li>
            <i class="fas fa-circle"></i>No previous Adobe XD skills are needed.
          </li>
        </ul>
      </div>
    </>
  );
};
export default CourseOverview;
