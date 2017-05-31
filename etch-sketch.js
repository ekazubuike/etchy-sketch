$(document).ready(function(){
  $(".box").mouseenter(function(){
    $(this).addClass("highlight");
  });
  $("button").click(function(){
    $(".box").removeClass("highlight");
    var num = prompt("How big do you want your canvas?");
    var container = $(".container").innerHTML;
    if (num > 0) {
      $(".container").empty();
      for (var i = 0; i < num; i++) {
        container += "<p>Hi!</p><br>";
      }
    } else {
      alert("Try again with a value greater than 0!");
    }
  });
});
