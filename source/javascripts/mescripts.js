$(document).ready(function() {

  $(".navbar-lrhg-item").hover(
    function(){ $(".banner-content h2").addClass('reveal') },
    function(){ $(".banner-content h2").removeClass('reveal') }
  )

/*Smooth the animation to get the anchor tag links*/
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
    });
  });
});



