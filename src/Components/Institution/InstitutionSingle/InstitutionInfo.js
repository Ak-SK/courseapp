import React from "react";

const InstitutionInfo = () => {
  return (
    <section class="info">
      <div class="container-fluid p20">
        <h1>Institution Details</h1>
        <div class="row m-0">
          <div class="col-sm-12 col-md-10 col-lg-8 col-xl-9 bb">
            <h3 class="incharge">Owner info</h3>
            <p>Naruto Uzumaki, Uchicha Sasuke, Haruno Sakura</p>
            <h3>Address</h3>
            <p class="address">
              329 Queensberry Street, North Melbourne <br /> VIC 3051,
              Australia.
              <br /> 123 456 7890
              <br /> support@smartedu.com
            </p>
            <h3>About Us</h3>
            <p>
              <span>&emsp;</span> ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium laudantium, totam rem aperiam, eaque
              ipsa quae ab illo inventore veritatis,et quasi architecto beatae
              vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste
              natus error sit voluptatem accusantium laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis,et quasi
              architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis,et
              quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div class="col-sm-12 col-md-2 col-lg-4 col-xl-3 bb">
            <h3 class="style2">Courses Handled</h3>
            <ul class="list">
              <li class="list-item">
                <i class="fas fa-check"></i>IAS
              </li>
              <li class="list-item">
                <i class="fas fa-check"></i>RRB
              </li>
              <li class="list-item">
                <i class="fas fa-check"></i>IES
              </li>
              <li class="list-item">
                <i class="fas fa-check"></i>GATE
              </li>
            </ul>
            <h3 class="style2">No of Courses</h3>
            <p class="style2">65</p>
            <h3 class="style2">No of Faculties</h3>
            <p class="style2">25</p>
            <h3 class="style2">No of Students Enrolled</h3>
            <p class="style2">240</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionInfo;
