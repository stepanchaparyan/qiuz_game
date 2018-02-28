let loadFunctionMain = () => {
  checkTitleOnLoad();
}

let checkTitleOnLoad = () => {
  if (info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].asia1 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].europe1 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].africa1 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].americas1 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].oceania1 == "disabled" &&
      info.data[currentUser.data[currentUser.data.length-1].currentUserNumber].world1 == "disabled") {
    document.getElementById("capital2").removeAttribute("disabled");

  }
}

(function ($) {

    // Init Wow
    wow = new WOW( {
        animateClass: 'animated',
        offset:       100
    });
    wow.init();

    // Navigation scrolls
    $('.navbar-nav li a').bind('click', function(event) {
        $('.navbar-nav li').removeClass('active');
        $(this).closest('li').addClass('active');
        var $anchor = $(this);
        var nav = $($anchor.attr('href'));
        if (nav.length) {
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');

        event.preventDefault();
        }
    });

    // About section scroll
    $(".overlay-detail a").on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){
            window.location.hash = hash;
        });
    });

    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar-default").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });


})(jQuery);
