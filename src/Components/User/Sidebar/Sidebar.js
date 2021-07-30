import React from "react";

const Sidebar = () => {
  return (
    <div class="sidebar col-md-3 col-lg-2 col-xl-2 p-0">
      <button type="button" class="btn">
        <i class="fas fa-bars"></i>
      </button>
      <div class="content">
        <h3>Dashboard</h3>
        <ul class="prfl_list p-0">
          <li class="active">
            <a class="list-link" href="user-dashboard.html">
              <i class="far fa-user"></i>My Profile
            </a>
          </li>
          <li>
            <a class="list-link" href="user-courses.html">
              <i class="fas fa-tv"></i>My Courses
            </a>
          </li>
          <li>
            <a class="list-link" href="user-bookmarks.html">
              <i class="far fa-heart"></i>My Bookmarks
            </a>
          </li>
          <li>
            <a class="list-link" href="user-cart.html">
              <i class="fas fa-shopping-cart"></i>My Cart
            </a>
          </li>
          <li>
            <a class="list-link" href="user-order.html">
              <i class="fas fa-receipt"></i>My Orders
            </a>
          </li>
        </ul>
        <h3>Account</h3>
        <ul class="prfl_list p-0">
          <li class="list-item">
            <a class="list-link" href="user-settings.html">
              <i class="fas fa-user-cog"></i>Settings
            </a>
          </li>
          <li class="list-item">
            <a class="list-link" href="login.html">
              <i class="fas fa-sign-out-alt"></i>Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
