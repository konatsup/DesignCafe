$(function(){
  $('.fade-in').css('visibility','hidden');
  $(window).scroll(function(){
   var windowHeight = $(window).height(),
       topWindow = $(window).scrollTop();
   $('.fade-in').each(function(){
    var objectPosition = $(this).offset().top;
    if(topWindow > objectPosition - windowHeight + 200){
     $(this).addClass("fade-in-animation");
    }
   });
  });
});