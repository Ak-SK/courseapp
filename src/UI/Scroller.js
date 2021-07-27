import React from "react";
const Testimonal = () => {
  //Get the button
  var mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onScroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
      <section class="scroller_icon">
        <button onClick={topFunction} id="myBtn" title="Go to top">
          <i class="fas fa-long-arrow-alt-up"></i>
        </button>
      </section>
    </>
  );
};
export default Testimonal;
