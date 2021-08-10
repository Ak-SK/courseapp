import React from "react";
const CoursePriceBox = () => {
  return (
    <>
      <div className="price_box">
        <div className="price">
          <span>Price</span> <i className="fas fa-rupee-sign"></i>49.00{" "}
          <small>
            <i className="fas fa-rupee-sign"></i>69.00
          </small>
        </div>
        <a href="#" className="cart_btn">
          Add To Cart
        </a>
        <a href="#" className="purchase_btn">
          Buy Now
        </a>
        <h5 className="subtitle">Includes</h5>
        <ul className="quere_list">
          <li>
            <a href="#">
              <span>
                <i className="fas fa-play"></i>
              </span>
              &ensp;11 hours on-demand video
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <i className="fas fa-file-download"></i>
              </span>
              &ensp;69 downloadable resources
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <i className="fas fa-key"></i>
              </span>
              &ensp;Full lifetime access
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <i className="fas fa-laptop"></i>
              </span>
              &ensp;Access on Mobile & Laptop
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <i className="far fa-clipboard"></i>
              </span>
              &ensp;Assesments
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <i className="fas fa-certificate"></i>
              </span>
              &ensp;Certificate of Completion
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default CoursePriceBox;
