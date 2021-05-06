/*=========================================================================
        Preloader Delay Web
=========================================================================*/
$(window).load(function() {
   $(".icon-scroll-top").hide();
    "use strict";
    $(".preloader-outer").delay(500).fadeOut('fast');
});



$(function(){



    "use strict"; // Use for All Web
    /*=========================================================================
            One Page Nav Transate to Class predict
    =========================================================================*/
    $(".navigation").onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 700,
        scrollThreshold: 0.5,
        easing: 'easeInOutCubic'
    });

    /*=========================================================================
            Portfolio filter Toogle Class Of All Project
    =========================================================================*/
      if($('#works .item-outer').length > 0){
        var filterizd = $('#works .item-outer').filterizr();
      }
      $( '.control ul li' ).on( 'click', function() {
        //click menu All project
            $( this ).parent().find( 'li.active' ).removeClass( 'active' );
            $( this ).addClass( 'active' );
            console.log("hihihihih");
      });

    /*=========================================================================
            Hamburger Menu & Mobile Push menu Click Menu All Project
    =========================================================================*/
    $(".hamburger-menu, .main-nav ul li a").on( 'click', function() {
      //click side bar
        $(".header").toggleClass("pushed");
        $(".main-content").toggleClass("main-pushed");
        $('.bar').toggleClass('animate');
        console.log("hihihihi");
    });

    /*=========================================================================
            Bootstrap Tooltip
    =========================================================================*/
    $(".resume-download").tooltip();

    /*=========================================================================
            Carousels / Resume, Testimonials, Customers /
    =========================================================================*/
      $(".customer-carousel").owlCarousel({
        items: 4
      });

      $(".resume-carousel, .testimonial-carousel").owlCarousel({
        singleItem:true
      });

    /*=========================================================================
            Backstretch Background Slider
    =========================================================================*/
    $("#welcome").backstretch([
        "http://placehold.it/1200x768",
        "http://placehold.it/1200x768",
        // "assets/images/your_pic.jpg" 
    ], {duration: 5000, fade: 400});

    /*=========================================================================
            Welcome & Header Height
    =========================================================================*/
    $("#welcome").css({'height':($(window).height())+'px'});
    $(".header").css({'height':($(window).height())+'px'});

    /*=========================================================================
            Magnific Popup Functions click view detail
    =========================================================================*/
    $('.work-image').magnificPopup({

      type: 'image'
      
    });

    $('.work-video').magnificPopup({
      type: 'iframe',
      iframe: {
          markup: '<div class="mfp-iframe-scaler">'+
                    '<div class="mfp-close"></div>'+
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                  '</div>', 

          patterns: {
            youtube: {
              index: 'youtube.com/',

              id: 'v=',

              src: 'http://www.youtube.com/embed/%id%?autoplay=1'
            },
            vimeo: {
              index: 'vimeo.com/',
              id: '/',
              src: '//player.vimeo.com/video/%id%?autoplay=1'
            },
            gmaps: {
              index: '//maps.google.',
              src: '%id%&output=embed'
            }

          },

          srcAction: 'iframe_src',
        }
    });

 $(window).scroll(function(event) {
    var pos_body = $('html,body').scrollTop();
    if (pos_body>50) {
      $(".icon-scroll-top").show(400);
    }
    else{
      $(".icon-scroll-top").hide(300);
    }

  });

    $(".icon-scroll-top").click(function(e) {
   $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

});