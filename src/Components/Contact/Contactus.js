import React from "react";
import "../../styles.css";
// import Navbar from "../Navbar/Navabar";
const Contactus = () => {
  return (
    <>
      {/* section down where it should come */}
      <section
        className="navbar_sect"
        style={{ backgroundImage: "url(/images/bg5.jpg)" }}
      >
        <div className="contact_sect">
          <div className="container-fluid">
            <div className="inner_container">
              <h1>CONTACT US</h1>
              <p>
                <a href="index.html">Home</a>&ensp;/&ensp;Contact Us
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="contact-sect">
        <div class="container-fluid">
          <div class="row m-0">
            <div class="col-sm-6 col-lg-4">
              <div class="contact_location">
                <div class="icon">
                  <img src="/images/cicon4.png" alt="Location Icon" />
                </div>
                <h4>Our Location</h4>
                <p>Collin Street West, Victor 8007, Australia.</p>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="contact_location">
                <div class="icon">
                  <img src="/images/cicon2.png" alt="Call Icon" />
                </div>
                <h4>Make a Call</h4>
                <p>
                  Mobile:(+91)77889 90000
                  <br />
                  Mobile:(+91)55 114 252525
                  <br />
                </p>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="contact_location">
                <div class="icon">
                  <img src="/images/cicon3.png" alt="Mail Icon" />
                </div>
                <h4>Write Some Words</h4>
                <p>smartedu@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="row p-20 m-0">
            <div class="map-grid col-md-6 col-lg-6 col-xl-6">
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    title="googlemap"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Chennai%20Airport&t=&z=9&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                  <a href="https://www.online-timer.net"></a>
                  <br />
                  <a href="https://www.embedgooglemap.net">
                    embedgooglemap.net
                  </a>
                </div>
              </div>
            </div>
            <div class="form-grid col-md-6 col-lg-6 col-xl-6">
              <h4>Send a Message</h4>
              <p>Ex quem dicta delicata usu, zril vocibus maiestatis in qui.</p>
              <form class="form-group" action="#" method="get">
                <label for="name">Full Name</label>
                <input type="text" class="ipbox" id="name" />
                <label for="mail">Your Email</label>
                <input type="text" class="ipbox" id="mail" />
                <label for="sub">Subject</label>
                <input type="text" class="ipbox" id="sub" />
                <label for="yourm">Your Message</label>
                <textarea rows="5" id="yourm"></textarea>
                <div class="button">
                  <input
                    type="submit"
                    class="submit_btn"
                    name=""
                    value="Submit"
                    onClick="login(document.getElementById('usem').value,document.getElementById('pass').value)"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contactus;
