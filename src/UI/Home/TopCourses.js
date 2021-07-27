import React from "react";
import CourseCard from "../../Reusable/CourseCard";

const TopCourses = (props) => {
  return (
    <section class="course_sect">
      <div class="container-fluid">
        <h3>Browse Our Top Courses</h3>
        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
        <div class="course_filter_tab">
          <ul class="list-inline">
            <li class="list-inline-item">
              <button class="filter-button">All</button>
            </li>
            <li class="list-inline-item">
              <button class="filter-button">IAS</button>
            </li>
            <li class="list-inline-item">
              <button class="filter-button">IES</button>
            </li>
            <li class="list-inline-item">
              <button class="filter-button">GATE</button>
            </li>
            <li class="list-inline-item">
              <button class="filter-button">NEET</button>
            </li>
            <li class="list-inline-item">
              <button class="filter-button">RRB</button>
            </li>
          </ul>
        </div>
        <div class="content row"></div>
      </div>
    </section>
  );
};

export default TopCourses;
