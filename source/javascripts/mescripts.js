$(document).ready(function() {

  $(".imgover").hover(
    function(){ $(this).addClass('img-m-over') },
    function(){ $(this).removeClass('img-m-over') }
 )

   $(".img").hover(
    function(){ $(this).addClass('img-m-over') },
    function(){ $(this).removeClass('img-m-over') }
 );

   var cible = $('.a-wrapper-titles ul li');
      cible.on('click', function(){
      $(this).next('.a-container').toggleClass('hider');
      console.log('toto');
    });

});
