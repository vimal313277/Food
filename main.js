// ====== scroll navbar background & color change Start =====

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 150) {
      $(".mainnvbr").css("background", "#000000bd",);
    }

    else {
      $(".mainnvbr").css("background", "#ff000000");

    }
  })
});

// ====== scroll navbar background & color change End =====


$(document).ready(function () {
  $(".bi-search").click(function () {
    $(".itpmnmn").toggle(1000)
  })
})


// ==== back to top button start =====

$(function () {

  //Scroll event
  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 200) $('.go-top').fadeIn('slow');
    if (scrolled < 200) $('.go-top').fadeOut('slow');
  });

  //Click event
  $('.go-top').click(function () {
    $("html, body").animate({ scrollTop: "0" }, 500);
  });

});


// ==== back to top button End =====

// ===== load-line start ===== 

window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// ===== load-line End ===== 

