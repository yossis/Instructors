var readyState = function(callback)
{
  var body = document.body;
  
  if(body && body.readyState == 'loaded')
  {
      callback();
  }
  else
  {
      if (window.addEventListener)
      {
          window.addEventListener('load', callback, false);
      }
      else
      {
          window.attachEvent('onload', callback);
      }
  }   
}

readyState(function()
{

  /***************************************************
      MAIN NAVIGATION
  ***************************************************/

  $('#header .nav-collapse a, #intro a, .navigation li').on('click',function(e){
      e.preventDefault();
      
      var anchor = $(this);

      //animate content scroll
      // $('html, body').stop().animate({
      //   scrollTop: $(anchor.attr('href')).offset().top
      // }, 900,'easeInOutExpo');

      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);

      if($(this).closest('.navigation').length > 0 ){
        $(this).addClass('active').siblings().removeClass('active');
      }
  }); 

  $('.btn-navbar').click( function() {
      $('html').toggleClass('expanded');
  });


  var links = $('.navigation').find('li');
  var button = $('.intro button');
    var section = $('section.nav-section');
    var mywindow = $(window);
    var htmlbody = $('html,body');

    // section.scroll(function(e){
    //   if ($(this).scrollTop() == 0) {
    //     var data = $(this).attr('id');
    //     $('.navigation li[href="' + data + '"]"').addClass('active').siblings().removeClass('active');
    //   }
    // })
    // section.waypoint(function (direction) {

    //   var data = $(this).attr('id');
    //   $('.navigation li[href="' + data + '"]"').addClass('active').siblings().removeClass('active');
    // });
      
      
    //     // var datasection = $(this).attr('data-section');

    //     // if (direction === 'down') {
    //     //     $('.navigation li[data-section="' + datasection + '"]').addClass('active').siblings().removeClass('active');
    //     // }
    //     // else {
    //     //   var newsection = parseInt(datasection) - 1;
    //     //     $('.navigation li[data-section="' + newsection + '"]').addClass('active').siblings().removeClass('active');
    //     // }

    // });
    
    // mywindow.scroll(function () {
    //     if (mywindow.scrollTop() == 0) {
    //         $('.navigation li[data-section="1"]').addClass('active');
    //         $('.navigation li[data-section="2"]').removeClass('active');
    //     }
    // });
    
    // function goToByScroll(datasection) {
        
    //     if (datasection == 1) {
    //       htmlbody.animate({
    //           scrollTop: $('.section[data-section="' + datasection + '"]').offset().top
    //       }, 500, 'easeOutQuart');
    //     }
    //     else {
    //       htmlbody.animate({
    //           scrollTop: $('.section[data-section="' + datasection + '"]').offset().top + 70
    //       }, 500, 'easeOutQuart');
    //     }
        
    // }

    // links.click(function (e) {
    //     e.preventDefault();
    //     var datasection = $(this).attr('data-section');
    //     goToByScroll(datasection);
    // });
    
    // button.click(function (e) {
    //     e.preventDefault();
    //     var datasection = $(this).attr('data-section');
    //     goToByScroll(datasection);
    // });
  
    // Snap to scroll (optional)
    
    /*

    section.waypoint(function (direction) {

        var nextpos = $(this).attr('data-section');
        var prevpos = $(this).prev().attr('data-section');

        if (nextpos != 1) {
          if (direction === 'down') {
              htmlbody.animate({
                scrollTop: $('.section[data-section="' + nextpos + '"]').offset().top
            }, 750, 'easeOutQuad');
          }
          else {
              htmlbody.animate({
                scrollTop: $('.section[data-section="' + prevpos + '"]').offset().top
            }, 750, 'easeOutQuad');
          }
        }
        

    }, { offset: '60%' });  
    
    */
  /* Navigation */
  // Do our DOM lookups beforehand
    // var nav_container = $("#header");
    // var nav = $("#header .container");

    // var top_spacing = 0;
    // var waypoint_offset = -60;

    // nav_container.waypoint({
    //   handler: function(event, direction) {

    //     if (direction == 'down') {

    //         nav_container.css({'height': nav.outerHeight()});
    //         nav.stop().addClass("navbar-fixed-top").css("top", -nav.outerHeight()).animate({"top": top_spacing});
            
    //     } else {

    //         nav_container.css({'height': 'auto'});
    //         nav.stop().removeClass("navbar-fixed-top").css("top", nav.outerHeight() + waypoint_offset).animate({"top": ""});

    //     }

    //   },
    //   offset: function() {
    //       return -nav.outerHeight() - waypoint_offset;
    //   }
    // });
    // /**
    //  * Scroll Page
    //  */
    // function scrollPage(page)
    // {
    //     $('#navigation a[data-nav="scroll"]').removeClass('active');

    //     $('#navigation a[href="#/' + page + '"]').addClass('active');

    //     scroll = false;

    //     $('html, body').animate({ scrollTop: $('#' + page).offset().top }, 800, function(){ scroll = true; });
    // }

    // /**
    //  * Hash helper
    //  */
    // function parseHash(newHash, oldHash)
    // {
    //     crossroads.parse(newHash);
    // }

    // /**
    //  * Position of the intro text
    //  */
    function introPos()
    {
        $('#intro').css({'margin-top':( ($('.box:first').height() /2) - ($('#intro').height() /2) )});
    }

    // /**
    //  * Set Hash silently
    //  */
    // function setHashSilently(hash){
    //     hasher.changed.active = false;
    //     hasher.setHash(hash);
    //     hasher.changed.active = true;
    // }

    // /**
    //  * Panel offset
    //  */
    // //$('.panel').css({'margin-top':$('#header').height()});

    // /**
    //  * Crossroad
    //  */
    // // crossroads.addRoute('{page}', function(page)
    // // {
    // //         scrollPage(page);
    // // });
    
    // /**
    //  * Hasher
    //  */
    // hasher.initialized.add(parseHash);
    // hasher.changed.add(parseHash);
    // hasher.init();
    
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
    // /**
    //  * Window scroll
    //  */
    // // $(window).scroll(function()
    // // {
    // //     var self = this;
        
    // //     if(scroll)
    // //     {
    // //         $('.box').each(function()
    // //         {
    // //           if(($(self).scrollTop() + $('#header').height()) >= $(this).position().top && ($(self).scrollTop() + $('#header').height()) < ($(this).position().top + $(this).height()))
    // //           {
    // //                   $("#navigation a[href='#/"+$(this).attr('id') + "']").addClass('active');
    // //                   setHashSilently($(this).attr('id'));
    // //           }
    // //           else
    // //           {
    // //                   $("#navigation a[href='#/"+$(this).attr('id') + "']").removeClass('active');
    // //           }
    // //         });
    // //     }

    // //     if ($(this).scrollTop() > 100)
    // //     {
    // //         $('#back-top').fadeIn();
    // //     }
    // //     else
    // //     {
    // //         $('#back-top').fadeOut();
    // //     }
    // // });

    // /**
    //  * Window resize
    //  */
    // $(window).resize(function()
    // {
    //     introPos();
    // });

    // /**
    //  * Scroll to top links
    //  */    
    // $('#back-top').click(function(event)     {
    //     $('#navigation a[data-nav="scroll"]').removeClass('active');

    //     var firstItem = $('#navigation a[data-nav="scroll"]:first');
        
    //     firstItem.addClass('active');

    //     hasher.setHash(firstItem.attr('href').replace('#/', ''));

    //     $('html, body').animate({ scrollTop: 0 }, 800);
        
    //     return false;
    // });

    // $('#logo').click(function(event)  {
    //     $('#navigation a[data-nav="scroll"]').removeClass('active');

    //     var firstItem = $('#navigation a[data-nav="scroll"]:first');

    //     firstItem.addClass('active');

    //     hasher.setHash(firstItem.attr('href').replace('#/', ''));

    //     $('html, body').animate({ scrollTop: 0 }, 800);
        
    //     return false;
    // });

    // /**
    //  * Vegas background image slider
    //  */
    
    // /**
    //  * Lightbox
    //  */

    // $('#lightbox').on('click', function(event)
    // {
    //     $('#lightbox').hide();
    // });

    // $('.lightbox_trigger').click(function(event)
    // {
    //     event.preventDefault();
        
    //     $('#bigimg').attr({'src':$(this).attr("href")});
    //     $('#lightbox').show();
    // });

    // /**
    //  * Flexslider
    //  */
    // $('.flexslider').flexslider();
$.vegas('slideshow',
    {
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