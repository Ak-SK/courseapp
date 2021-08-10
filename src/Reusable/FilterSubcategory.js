import React from "react";

const FilterSubcategory = () => {
  return (
    <>
      <div className="filter filter2">
        <button type="button" className="collapsible">
          Sub Category
        </button>
        <div className="content">
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                value="mains"
              />
              MAINS
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
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
