import React from "react";
import $ from "jquery";

const CourseContent = () => {
  $(document).ready(function () {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  });
  //
  return (
    <>
      <div className="course_contents">
        <p className="title">
          Course Content
          <span className="vds_no">
            8&nbsp;Lectures&emsp;Duration&nbsp;02:11:30
          </span>
        </p>
        {/* <!------------Panel----------------------------> */}
        <div className="panel">
          <button type="button" className="fas panel-title collapsible">
            Getting Started
          </button>
          {/* <!------------Panel Body-------------------> */}
          <div className="panel-body">
            <div className="vedio-details">
              <img className="logo" src="/images/p1.png" />
              <span className="vedio-title">1. Introduction to the Course</span>
              <span className="flt_rt">
                Preview<span className="vedio-length">02:53</span>
              </span>
            </div>
          </div>
        </div>
        {/* <!------------Panel---------¿-------------------> */}
        <div className="panel">
          <button type="button" className="fas panel-title collapsible">
            Brief
          </button>
          {/* <!------------Panel Body-------------------> */}
          <div className="panel-body">
            <div className="vedio-details">
              <img className="logo" src="/images/p1.png" />
              <span className="vedio-title">
                2. Your first design challenge{" "}
              </span>
              <span className="flt_rt">
                Preview<span className="vedio-length">12:53</span>
              </span>
            </div>
            <div className="vedio-details">
              <img className="logo" src="/images/p1.png" />
              <span className="vedio-title">
                3. How to solve the previous exercise{" "}
              </span>
              <span className="flt_rt">
                Preview<span className="vedio-length">24:01</span>
              </span>
            </div>
            <div className="vedio-details">
              <img className="logo" src="/images/p1.png" />
              <span className="vedio-title">
                4. Find out why smart objects are amazing{" "}
              </span>
              <span className="flt_rt">
                Preview<span className="vedio-length">30:02</span>
              </span>
            </div>
          </div>
        </div>
        {/* <!------------Panel----------------------------> */}
        <div className="panel">
          <button type="button" className="fas panel-title collapsible">
            The Conclusion
          </button>
          {/* <!------------Panel Body-------------------> */}
          <div className="panel-body">
            <div className="vedio-details">
              <img className="logo" src="/images/p1.png" />
              <span className="vedio-title">
                5. Title of the vedio given from institution side
              </span>
              <span className="flt_rt">
                Preview<span className="vedio-length">02:53</span>
              </span>
            </div>
            <div className="vedio-details">
              <img className="logo" src="/images/p1.png" />
              <span className="vedio-title">
                6. Title of the vedio given from institution side
              </span>
              <span className="flt_rt">
                Preview<span className="vedio-length">02:53</span>
              </span>
            </div>
            <div className="vedio-details">
              <img className="logo" src="/images/p1.png" />
              <span className="vedio-title">
                7. Title of the vedio given from institution side
              </span>
              <span className="flt_rt">
                Preview<span className="vedio-length">02:53</span>
              </span>
            </div>
            <div className="vedio-details">
              <img className="logo" src="/images/p1.png" />
              <span className="vedio-title">
                8. Title of the vedio given from institution side
              </span>
              <span className="flt_rt">
                Preview<span className="vedio-length">02:53</span>
              </span>
            </div>
          </div>
          {/* <!------------/ Panel Body /--------------------> */}
        </div>
        {/* <!------------/ Panel /---------------------------> */}
      </div>
    </>
  );
};
export default CourseContent;
