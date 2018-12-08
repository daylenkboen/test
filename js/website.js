$(document).ready(function() {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $('.page2animate .animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('fadeInUp');
        $(this).addClass('opacityfull');
      }
    });
  });
});

$(document).ready(function() {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $('.resumanim .animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('fadeInUp');
        $(this).addClass('opacityfull');
      }
    });
  });
});


$(document).ready(function() {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $('.animateproj .animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('fadeInUp');
        $(this).addClass('opacityfull');
      }
    });
  });
});


$(window).scroll(function(){
      $(".first").css("opacity", 1 - $(window).scrollTop() / 1000);
});

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) {(delta = event.wheelDelta / 120);}
    else if (event.detail) {(delta = -event.detail / 3);}

    handle(delta);
    if (event.preventDefault) {(event.preventDefault());}
    event.returnValue = false;
}

function handle(delta) {
    var time = 80;
    var distance = 1000;

    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
}

if (window.addEventListener) {window.addEventListener('DOMMouseScroll', wheel, false);}
  window.onmousewheel = document.onmousewheel = wheel;
