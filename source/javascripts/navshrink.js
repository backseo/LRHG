$(window).scroll(function() {
    if ($(document).scrollTop() > 80) {
      $('.navbar-lrhg').css("height", 70);
      $('.navbar-lrhg-brand img').css("height", 50);
      $('.dropdown-toggle').css("font-size", 20);
    }
    else {
      $('.navbar-lrhg').css("height", 120);
      $('.navbar-lrhg-brand img').css("height", 90);
      $('.dropdown-toggle').css("font-size", 30);
    }
  });
