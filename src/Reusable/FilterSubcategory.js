import React from "react";

const FilterSubcategory = () => {
  return (
    <>
      <div class="filter filter2">
        <button type="button" class="collapsible">
          Sub Category
        </button>
        <div class="content">
          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" value="mains" />
              MAINS
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input
                type="checkbox"
                class="form-check-input"
                value="preliminary"
              />
              PRELIMINARY
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSubcategory;
