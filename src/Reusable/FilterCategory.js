import React from "react";

const FilterCategory = () => {
  return (
    <>
      <div className="filter filter1">
        <button type="button" className="collapsible">
          Category
        </button>
        <div className="content">
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" value="ias" />
              IAS
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" value="ies" />
              IES
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" value="rrb" />
              RRB
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" value="law" />
              LAW
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                value="gate"
              />
              GATE
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                value="csir"
              />
              CSIR
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                value="iit-jee"
              />
              IIT-JEE
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                value="neet"
              />
              NEET
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterCategory;
