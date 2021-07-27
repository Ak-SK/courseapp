import React from "react";

const FilterCategory = () => {
  return (
    <>
      <div class="filter filter1">
        <button type="button" class="collapsible">
          Category
        </button>
        <div class="content">
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value="ias" />
              IAS
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value="ies" />
              IES
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value="rrb" />
              RRB
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value="law" />
              LAW
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value="gate" />
              GATE
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value="csir" />
              CSIR
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value="iit-jee" />
              IIT-JEE
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value="neet" />
              NEET
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterCategory;
