$(document).ready(function () {
  $(".menu-icon").click(function () {
    $(".menu").show();
    $(".menu-icon").hide();
  });
  $(".menu-icon").click(function () {
    $(".close-menu").show();
  });
  $(".close-menu").click(function () {
    $(".menu-icon").show();
    $(".close-menu").hide();
    $(".menu").slideUp();
  });

  $(".service1").click(function () {
    $(".service-text1").slideToggle();
    $(".single-service:nth-child(1)").toggleClass("add-class");
  });
  $(".service2").click(function () {
    $(".service-text2").slideToggle();
    $(".single-service:nth-child(2)").toggleClass("add-class");
  });

  $(".service4").click(function () {
    $(".service-text4").slideToggle();
    $(".single-service:nth-child(4)").toggleClass("add-class");
  });

  $(".service3").click(function () {
    $(".service-text3").slideToggle();
    $(".single-service:nth-child(3)").toggleClass("add-class");
  });
});
