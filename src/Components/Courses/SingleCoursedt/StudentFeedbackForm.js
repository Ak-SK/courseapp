import React from "react";
const StudentFeedbackForm = () => {
  return (
    <>
      <div class="review-box">
        <h3>Add Reviews & Rate</h3>
        <p>
          What is it like to Course?&emsp;&emsp;
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </p>
        <form class="form-group" action="#" method="post">
          <label for="title" style={{ cursor: "pointer" }}>
            Review Title
          </label>
          <br />
          <input class="text_box" type="text" id="title" />
          <br />
          <label for="content" style={{ cursor: "pointer" }}>
            Review Content
          </label>
          <br />
          <textarea class="text_box ht148" type="text" id="content"></textarea>
          <br />
          <button type="submit" class="review_btn">
            Submit Review&ensp;&#8594;
          </button>
        </form>
      </div>
    </>
  );
};
export default StudentFeedbackForm;
