

// Question1

$(document).ready(function() {
   
    $('.small-images img').click(function() {
      var src = $(this).attr('src');
      $('.main-image').attr('src', src);
    });
  });

//////////////////////////////////////////////
// Question2

$(document).ready(function() {
    var slideIndex = 0;
    var totalSlides = $('.slider-images img').length;
  
   
    showSlide(slideIndex);
  
 
    $('.next-button').click(function() {
      slideIndex++;
      if (slideIndex >= totalSlides) {
        slideIndex = 0;
      }
      showSlide(slideIndex);
    });
  
   
    $('.prev-button').click(function() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
      }
      showSlide(slideIndex);
    });
  
    
    function showSlide(index) {
      $('.slider-images').css('transform', 'translateX(' + (-index * 100) + '%)');
    }
  });

///////////////////////////////////////////////////////////////
// Question3
$(document).ready(function(){
    $('#slider>li:gt(0)').hide();
     setInterval(function() {
        $('#slider > li:first')
          .fadeOut(1000)
          .next()
          .fadeIn(1000)
          .end()
          .appendTo('#slider');
      }, 2000);

   });