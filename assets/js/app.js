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

  $(".single-service").click(function () {
    $(this).find('.single-service-right p').slideToggle();
    $(this).toggleClass("add-class");
  });
});
