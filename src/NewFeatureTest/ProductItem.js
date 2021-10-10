import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function ProductItem({ hit, components }) {
  useEffect(() => {
    console.log("hit", hit, components);
  }, []);
  let ui = null;
  // if (hit !== undefined && hit.status === "Verified") {
  if (hit !== undefined) {
    ui = (
      <a href="https://www.google.com" className="aa-ItemLink">
        <div className="aa-ItemContent">
          <div className="aa-ItemTitle">
            {/* <components.Highlight hit={hit} attribute={hit.courseName} /> */}
            <img
              style={{ width: "50px", height: "50px", display: "inline-block" }}
              src={`https://secure--storage.s3.ap-south-1.amazonaws.com/${hit.thumbnail}`}
              alt={hit.courseName}
            />
            <h5 style={{ display: "inline-block" }}>{hit.courseName}</h5>
          </div>
        </div>
      </a>
    );
  }
  return ui;
}
