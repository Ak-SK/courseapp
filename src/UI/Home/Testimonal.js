import React from "react";
const Testimonal = () => {
  // vars
  // var testim = document.getElementById("testim"),
  //   testimDots = Array.prototype.slice.call(
  //     document.getElementById("testim-dots").children
  //   ),
  //   testimContent = Array.prototype.slice.call(
  //     document.getElementById("testim-content").children
  //   ),
  //   testimLeftArrow = document.getElementById("left-arrow"),
  //   testimRightArrow = document.getElementById("right-arrow"),
  //   testimSpeed = 4500,
  //   currentSlide = 0,
  //   currentActive = 0,
  //   testimTimer,
  //   touchStartPos,
  //   touchEndPos,
  //   touchPosDiff,
  //   ignoreTouch = 30;
  // window.onload = function () {
  //   // Testim Script
  //   function playSlide(slide) {
  //     for (var k = 0; k < testimDots.length; k++) {
  //       testimContent[k].classList.remove("active");
  //       testimContent[k].classList.remove("inactive");
  //       testimDots[k].classList.remove("active");
  //     }

  //     if (slide < 0) {
  //       slide = currentSlide = testimContent.length - 1;
  //     }

  //     if (slide > testimContent.length - 1) {
  //       slide = currentSlide = 0;
  //     }

  //     if (currentActive !== currentSlide) {
  //       testimContent[currentActive].classList.add("inactive");
  //     }
  //     testimContent[slide].classList.add("active");
  //     testimDots[slide].classList.add("active");

  //     currentActive = currentSlide;

  //     clearTimeout(testimTimer);
  //     testimTimer = setTimeout(function () {
  //       playSlide((currentSlide += 1));
  //     }, testimSpeed);
  //   }

  //   testimLeftArrow.addEventListener("click", function () {
  //     playSlide((currentSlide -= 1));
  //   });

  //   testimRightArrow.addEventListener("click", function () {
  //     playSlide((currentSlide += 1));
  //   });

  //   for (var l = 0; l < testimDots.length; l++) {
  //     testimDots[l].addEventListener("click", function () {
  //       playSlide((currentSlide = testimDots.indexOf(this)));
  //     });
  //   }

  //   playSlide(currentSlide);

  //   // keyboard shortcuts
  //   document.addEventListener("keyup", function (e) {
  //     switch (e.keyCode) {
  //       case 37:
  //         testimLeftArrow.click();
  //         break;

  //       case 39:
  //         testimRightArrow.click();
  //         break;

  //       default:
  //         break;
  //     }
  //   });

  //   testim.addEventListener("touchstart", function (e) {
  //     touchStartPos = e.changedTouches[0].clientX;
  //   });

  //   testim.addEventListener("touchend", function (e) {
  //     touchEndPos = e.changedTouches[0].clientX;

  //     touchPosDiff = touchStartPos - touchEndPos;

  //     console.log(touchPosDiff);
  //     console.log(touchStartPos);
  //     console.log(touchEndPos);

  //     if (touchPosDiff > 0 + ignoreTouch) {
  //       testimLeftArrow.click();
  //     } else if (touchPosDiff < 0 - ignoreTouch) {
  //       testimRightArrow.click();
  //     } else {
  //       return;
  //     }
  //   });
  // };
  return (
    <>
      <section class="testim" id="testim">
        <div class="container">
          <div class="header">
            <h1>What People Say</h1>
          </div>
          <div class="background"></div>
          <div class="testim-cover">
            <div class="wrap">
              <span
                id="right-arrow"
                class="arrow right fa fa-chevron-right"
              ></span>
              <span
                id="left-arrow"
                class="arrow left fa fa-chevron-left "
              ></span>
              <ul id="testim-dots" class="dots">
                <li class="dot active"></li>
                <li class="dot"></li>
                <li class="dot"></li>
                <li class="dot"></li>
                <li class="dot"></li>
              </ul>
              <div id="testim-content" class="cont">
                <div class="active">
                  <div class="img">
                    <img src="/images/team5.jpg" alt="" />
                  </div>
                  <h2>Lorem P. Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>

                <div>
                  <div class="img">
                    <img src="/images/team6.jpg" alt="" />
                  </div>
                  <h2>Mr. Lorem Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>

                <div>
                  <div class="img">
                    <img src="/images/team7.jpg" alt="" />
                  </div>
                  <h2>Lorem Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>

                <div>
                  <div class="img">
                    <img src="/images/team8.jpg" alt="" />
                  </div>
                  <h2>Lorem De Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>

                <div>
                  <div class="img">
                    <img src="/images/team5.jpg" alt="" />
                  </div>
                  <h2>Ms. Lorem R. Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonal;
