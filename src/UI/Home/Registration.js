import React from "react";
import { Link } from "react-router-dom";
const Registration = () => {
  return (
    <>
      <section className="reg_sect">
        <div className="container-fluid">
          <div className="inner_container">
            <p>STARTING ONLINE LEARNING</p>
            <h3>
              ENHANCE YOUR SKILLS WITH BEST
              <br />
              ONLINE COURSES
            </h3>
            <form action="#blankpage" method="get">
              <Link className="reg_btn" to="/login">
                Get Started Now
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Registration;
