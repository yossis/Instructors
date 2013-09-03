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
  /* Navigation */
  // Do our DOM lookups beforehand
    var nav_container = $("#header");
    var nav = $("#header .container");

    var top_spacing = 0;
    var waypoint_offset = -60;

    nav_container.waypoint({
      handler: function(event, direction) {

        if (direction == 'down') {

            nav_container.css({'height': nav.outerHeight()});
            nav.stop().addClass("navbar-fixed-top").css("top", -nav.outerHeight()).animate({"top": top_spacing});
            
        } else {

            nav_container.css({'height': 'auto'});
            nav.stop().removeClass("navbar-fixed-top").css("top", nav.outerHeight() + waypoint_offset).animate({"top": ""});

        }

      },
      offset: function() {
          return -nav.outerHeight() - waypoint_offset;
      }
    });
    /**
     * Scroll Page
     */
    function scrollPage(page)
    {
        $('#navigation a[data-nav="scroll"]').removeClass('active');

        $('#navigation a[href="#/' + page + '"]').addClass('active');

        scroll = false;

        $('html, body').animate({ scrollTop: $('#' + page).offset().top }, 800, function(){ scroll = true; });
    }

    /**
     * Hash helper
     */
    function parseHash(newHash, oldHash)
    {
        crossroads.parse(newHash);
    }

    /**
     * Position of the intro text
     */
    function introPos()
    {
        $('#intro').css({'margin-top':( ($('.box:first').height() /2) - $('#header').height() - ($('#intro').height() /2) )});
    }

    /**
     * Set Hash silently
     */
    function setHashSilently(hash){
        hasher.changed.active = false;
        hasher.setHash(hash);
        hasher.changed.active = true;
    }

    /**
     * Panel offset
     */
    $('.panel').css({'margin-top':$('#header').height()});

    /**
     * Crossroad
     */
    // crossroads.addRoute('{page}', function(page)
    // {
    //         scrollPage(page);
    // });
    
    /**
     * Hasher
     */
    hasher.initialized.add(parseHash);
    hasher.changed.add(parseHash);
    hasher.init();
    
    introPos();

    $('#intro').fadeIn();

    /**
     * Window scroll
     */
    $(window).scroll(function()
    {
        var self = this;
        
        if(scroll)
        {
            $('.box').each(function()
            {
              if(($(self).scrollTop() + $('#header').height()) >= $(this).position().top && ($(self).scrollTop() + $('#header').height()) < ($(this).position().top + $(this).height()))
              {
                      $("#navigation a[href='#/"+$(this).attr('id') + "']").addClass('active');
                      setHashSilently($(this).attr('id'));
              }
              else
              {
                      $("#navigation a[href='#/"+$(this).attr('id') + "']").removeClass('active');
              }
            });
        }

        if ($(this).scrollTop() > 100)
        {
            $('#back-top').fadeIn();
        }
        else
        {
            $('#back-top').fadeOut();
        }
    });

    /**
     * Window resize
     */
    $(window).resize(function()
    {
        introPos();
    });

    /**
     * Scroll to top links
     */    
    $('#back-top').click(function(event)     {
        $('#navigation a[data-nav="scroll"]').removeClass('active');

        var firstItem = $('#navigation a[data-nav="scroll"]:first');
        
        firstItem.addClass('active');

        hasher.setHash(firstItem.attr('href').replace('#/', ''));

        $('html, body').animate({ scrollTop: 0 }, 800);
        
        return false;
    });

    $('#logo').click(function(event)  {
        $('#navigation a[data-nav="scroll"]').removeClass('active');

        var firstItem = $('#navigation a[data-nav="scroll"]:first');

        firstItem.addClass('active');

        hasher.setHash(firstItem.attr('href').replace('#/', ''));

        $('html, body').animate({ scrollTop: 0 }, 800);
        
        return false;
    });

    /**
     * Vegas background image slider
     */
    $.vegas('slideshow',
    {
        delay: 10000,
        backgrounds: [
            { src: 'assets/bg10.jpg', fade: 2000 },
            { src: 'assets/bg11.jpg', fade: 2000 },
            { src: 'assets/bg12.jpg', fade: 2000 },
           
            { src: 'assets/bg2.jpg', fade: 2000 }
        ]
    })('overlay');

    /**
     * Lightbox
     */

    $('#lightbox').on('click', function(event)
    {
        $('#lightbox').hide();
    });

    $('.lightbox_trigger').click(function(event)
    {
        event.preventDefault();
        
        $('#bigimg').attr({'src':$(this).attr("href")});
        $('#lightbox').show();
    });

    /**
     * Flexslider
     */
    $('.flexslider').flexslider();

});