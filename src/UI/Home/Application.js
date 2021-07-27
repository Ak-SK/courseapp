import React from "react";
const Application = () => {
  return (
    <>
      <section class="app_sect">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-8">
              <div class="app_links">
                <form action="#" method="get">
                  <h3>Download & Enjoy</h3>
                  <p>
                    Access your courses anywhere, anytime & prepare <br /> with
                    practice tests.
                  </p>
                  <button type="submit" class="btn btn_ios" value="">
                    <p class="btn_logo">
                      <i class="fab fa-apple"></i>
                    </p>
                    <p class="para">
                      App Store
                      <br />
                      <span>Available now on the</span>
                    </p>
                  </button>
                  <button type="submit" class="btn btn_android" value="">
                    <p class="btn_logo">
                      <i class="fab fa-google-play"></i>
                    </p>
                    <p class="para" style={{ marginRight: "43px" }}>
                      Google Play
                      <br />
                      <span>Get it on</span>
                    </p>
                  </button>
                </form>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="phn_image">
                <img
                  class="phn_img"
                  src="/images/phone_home.png"
                  alt="mobile"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Application;
