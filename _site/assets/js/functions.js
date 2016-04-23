// Menu pop out for site nave

$(document).ready(function(){
  $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });
});

//---------------------------------------------

// portfolio new window popup

$(document).ready(function(){
   $('.js-newWindow').click(function (event) {
       event.preventDefault();
       var $this = $(this);
       var url = $this.attr("href");
       var windowName = "popUp";
       var windowSize = $this.data("popup");
       var windowWidth = 800;
       var windowHeight = 800;
       var windowLeft = parseInt((screen.availWidth/2) - (windowWidth/2));
       var windowTop = parseInt((screen.availHeight/2) - (windowHeight/2));
       var windowSize = "width=" + windowWidth + ",height=" + windowHeight + ",left=" + windowLeft + ",top=" + windowTop + "screenX=" + windowLeft + ",screenY=" + windowTop;
       window.open(url, windowName, windowSize);
   });
});

//---------------------------------------------