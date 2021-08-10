import React from "react";
const CourseFeatures = () => {
  return (
    <>
      <div className="course-feature">
        <ul className="list-group">
          <h4 className="title">Course Features</h4>
          <li>
            Lectures <span className="float-right">6</span>
          </li>
          <li>
            Pdfs <span className="float-right">1</span>
          </li>
          <li>
            Duration <span className="float-right">3 hours</span>
          </li>
          <li>
            Skill level <span className="float-right">All level</span>
          </li>
          <li>
            Language <span className="float-right">English</span>
          </li>
          <li>
            Assessments <span className="float-right">Yes</span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default CourseFeatures;
