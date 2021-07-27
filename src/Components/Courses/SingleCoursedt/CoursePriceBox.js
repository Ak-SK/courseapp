import React from "react";
const CoursePriceBox = () => {
  return (
    <>
      <div class="price_box">
        <div class="price">
          <span>Price</span> <i class="fas fa-rupee-sign"></i>49.00{" "}
          <small>
            <i class="fas fa-rupee-sign"></i>69.00
          </small>
        </div>
        <a href="#" class="cart_btn">
          Add To Cart
        </a>
        <a href="#" class="purchase_btn">
          Buy Now
        </a>
        <h5 class="subtitle">Includes</h5>
        <ul class="quere_list">
          <li>
            <a href="#">
              <span>
                <i class="fas fa-play"></i>
              </span>
              &ensp;11 hours on-demand video
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <i class="fas fa-file-download"></i>
              </span>
              &ensp;69 downloadable resources
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <i class="fas fa-key"></i>
              </span>
              &ensp;Full lifetime access
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <i class="fas fa-laptop"></i>
              </span>
              &ensp;Access on Mobile & Laptop
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <i class="far fa-clipboard"></i>
              </span>
              &ensp;Assesments
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <i class="fas fa-certificate"></i>
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
