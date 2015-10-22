$(document).ready(function() {
  
  // Owl Carousel Settings
  $('.owl-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    lazyLoad:true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      900: {
        items: 1,
        nav: true,
        stagePadding: 100
      },
      1200: {
        items: 1,
        nav: true,
        stagePadding: 270
      }
    }
  });


  // Remove Carousel Prev/Next, Add Icons
  $(".owl-prev").text("").addClass("icon-left");
  $(".owl-next").text("").addClass("icon-right");

});














