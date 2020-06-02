$(document).ready(function () {
  $(".menu").click(function () {
    $(".essay").addClass("slide");
    $(".close").addClass("show");
    $(".menu").addClass("hide");
  });

  $(".close").click(function () {
    $(".essay").removeClass("slide");
    $(".close").removeClass("show");
    $(".menu").removeClass("hide");
    
  });
});