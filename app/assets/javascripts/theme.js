$(document).ready(function() {
  /***************************************************
      MAIN NAVIGATION
  ***************************************************/
  $('.navigation li').addClass('active').siblings().removeClass('active');

  $('#header .nav-collapse a, #intro a, .navigation li a').on('click',function(e){
      e.preventDefault();
      
      var anchor = $(this);

      //animate content scroll
      // $('html, body').stop().animate({
      //   scrollTop: $(anchor.attr('href')).offset().top
      // }, 900,'easeInOutExpo');

      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);

      
  }); 

  $('.btn-navbar').click( function() {
      $('html').toggleClass('expanded');
  });
  $('#nav').scrollspy();



  var links = $('.navigation').find('li');
  var button = $('.intro button');
    var section = $('section.nav-section');
    var mywindow = $(window);
    var htmlbody = $('html,body');

    

    // /**
    //  * Position of the intro text
    //  */
    function introPos()
    {
        $('#intro').css({'margin-top':( ($('.box:first').height() /2) - ($('#intro').height() /2) )});
    }

   
    
    introPos();

    $('#intro').fadeIn();

    $(window).scroll(function() {
      var self = this;
      if ($(this).scrollTop() > 100)
        {
            $('#back-top').fadeIn();
        }
        else
        {
            $('#back-top').fadeOut();
        }
    });

    $('#back-top').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
    
    
$.vegas('slideshow',
    {
        container: '#home',
        delay: 10000,
        backgrounds: [
            { src: 'assets/bg1.jpg', fade: 2000 },
            { src: 'assets/bg3.jpg', fade: 2000 },
            { src: 'assets/bg12.jpg', fade: 2000 },
            { src: 'assets/bg9.jpg', fade: 2000 },
           
            { src: 'assets/bg7.jpg', fade: 2000 }
        ]
    })('overlay');

});