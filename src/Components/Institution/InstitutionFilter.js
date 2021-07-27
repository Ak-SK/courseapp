import React from "react";
import FilterCategory from "../../Reusable/FilterCategory";
import FilterSubcategory from "../../Reusable/FilterSubcategory";

const InstitutionFilter = (props) => {
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
  //
  return (
    <div class="col-md-4 col-lg-3 col-xl-3">
      <div class="scroll_sect">
        {/* Filter based on Category */}
        <FilterCategory />

        {/* Filter based on Sub-Category */}
        <FilterSubcategory />

        {/* Filter based on Price */}
        <div class="filter filter3">
          <button type="button" class="collapsible">
            Price
          </button>
          <div class="content">
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" value="free" />
                Free
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" value="paid" />
                Paid
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="English"
                />
                Very Low (0-250)
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" value="Tamil" />
                Low (250-500)
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="English"
                />
                Medium (500-1000)
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" value="Tamil" />
                High (1000-2500)
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" value="Tamil" />
                Very High (More than 2500)
              </label>
            </div>
          </div>
        </div>

        {/* Filter based on Language */}
        <div class="filter filter4">
          <button type="button" class="collapsible">
            Language
          </button>
          <div class="content">
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="English"
                />
                English
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" value="Tamil" />
                Tamil
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" value="Hindi" />
                Hindi
              </label>
            </div>
          </div>
        </div>

        {/* Filter based on Rating */}
        <div class="filter filter5">
          <button type="button" class="collapsible">
            Rating
          </button>
          <div class="content">
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="Show All"
                />
                Show All
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="1 Star & Above"
                />
                1 Star & Above
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="2 Star & Above"
                />
                2 Star & Above
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="3 Star & Above"
                />
                3 Star & Above
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="4 Star & Above"
                />
                4 Star & Above
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="5 Star"
                />
                5 Star
              </label>
            </div>
          </div>
        </div>
        <div class="apply-filter">
          <button type="submit" class="btn" style={{ marginRight: "10px" }}>
            Apply
          </button>
          <button type="submit" class="btn">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstitutionFilter;
