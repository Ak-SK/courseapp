import React from "react";
import InstitutionInfo from "./InstitutionInfo";

const SingleInstitutionDetails = () => {
  return (
    <>
      <section
        class="navbar_sect"
        style={{ backgroundImage: "url(/images/bg6.jpg)" }}
      >
        <div class="institution-single">
          <div class="container-fluid">
            <div class="inner_container">
              <h1 id="iname">Institution Name</h1>
              <p>
                <a href="index.html">Home</a>&ensp;/&ensp;Institution Profile
              </p>
            </div>
          </div>
        </div>
      </section>
      <InstitutionInfo />
    </>
  );
};

export default SingleInstitutionDetails;
