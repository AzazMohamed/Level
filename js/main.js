$(function () {
  $("#inputCheckIn").datepicker();
  $("#inputCheckOut").datepicker();
  $(".carousel").carousel();
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 2,
  // slidesPerGroup: 2,
  fill: "column",
  slidesPerColumn: 1,
  // spaceBetwenn: 50,
});

// Video Buttons
let btns = Array.from(document.querySelectorAll("section.video .overlay > i"));
let video = document.querySelector("section.video video");

btns.forEach((btn) => {
  btn.addEventListener("click", (btnClicked) => {
    btnClicked.target.classList.contains("video-controls-play")
      ? video.play()
      : video.pause();
    btns.forEach((b) => {
      b.classList.toggle("hide");
    });
  });
});
