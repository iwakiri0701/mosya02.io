$(function () {
  $(".nav_btn").click(function () {
    $(".nav_btn, #nav").toggleClass("active");
  });
});

$(".pickup_slick").slick({
  dots: false,
  infinite: true,
  speed: 300,
  swipe: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "5%",
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        centerPadding: "50px",
      },
    },
  ],
});

// ハンバーガーメニューボタンのクリックイベント
document.querySelector(".nav_btn").addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  document.querySelector("#nav").classList.toggle("open");
  document.querySelector("#mask").classList.toggle("open");
  this.classList.toggle("open");
});

$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll(".scroll_up");
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 100;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add("on");
      }
    }
  };
  window.addEventListener("load", scrollAnimationFunc);
  window.addEventListener("scroll", scrollAnimationFunc);
});
