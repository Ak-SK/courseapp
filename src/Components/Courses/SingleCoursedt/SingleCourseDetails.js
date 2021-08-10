import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseOverview from "./CourseOverview";
import CourseContent from "./CourseContent";
import StudentFeedbackList from "./StudentFeedback";
import StudentFeedbackForm from "./StudentFeedbackForm";
import CourseReview from "./CourseReview";
import CoursePriceBox from "./CoursePriceBox";
import CourseFeatures from "./CourseFeatures";
import CourseHeading from "./CourseHeading";
import CarouselView from "../../../Reusable/CarouselView";
import "../../../styles.css";
import CoursesContext from "../../../Context/courses-context";

const SingleCourseDetials = () => {
  // const params = useParams();
  const ctx = useContext(CoursesContext);
  // console.log(params.courseId, ctx.course.CName);

  return (
    <>
      <CourseHeading ctx={ctx} />
      <div className="crs_sl">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 col-lg-8 col-xl-9">
              <CourseOverview ctx={ctx} />
              <CourseContent />
              <div className="course_review">
                <CourseReview />
                <StudentFeedbackList />
              </div>
              {/* <StudentFeedbackForm /> */}
            </div>
            <div className="col-sm-4 col-lg-4 col-xl-3">
              <CoursePriceBox />
              <CourseFeatures />
            </div>
          </div>
        </div>
      </div>
      <section className="rltd_crs">
        <CarouselView />
      </section>
    </>
  );
};
export default SingleCourseDetials;
