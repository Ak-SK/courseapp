import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseOverview from "./CourseOverview";
import CourseContent from "./CourseContent";
import StudentFeedbackList from "./StudentFeedback";
import StudentFeedbackForm from "./StudentFeedbackForm";
import CourseReview from "./CourseReview";
import CoursePriceBox from "./CoursePriceBox";
import CourseFeatures from "./CourseFeatures";
import CourseHeading from "./CourseHeading";
import "../../../styles.css";

const SingleCourseDetials = () => {
  const params = useParams();
  console.log(params.courseId);
  // useEffect(() => {
  //   console.log("dynamicCourseId", props.param);
  // });
  return (
    <>
      <CourseHeading />
      <div class="crs_sl">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-8 col-lg-8 col-xl-9">
              <CourseOverview />
              <CourseContent />
              <div class="course_review">
                <CourseReview />
                <StudentFeedbackList />
              </div>
              {/* <StudentFeedbackForm /> */}
            </div>
            <div class="col-sm-4 col-lg-4 col-xl-3">
              <CoursePriceBox />
              <CourseFeatures />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleCourseDetials;
