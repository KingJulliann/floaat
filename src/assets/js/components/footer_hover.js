$(".footer").mouseenter(function(){
    $(".footer-contact:hover::after").css("transform", "rotate(45deg)");
  });
  $(".footer").mouseleave(function(){
    $(".footer-contact:hover::after").css("transform", "rotate(0deg)");
  });