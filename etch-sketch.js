$(document).ready(function(){
  $(".box").mouseenter(function(){
    $(this).addClass("highlight");
  });
  
  $(".erase").click(function(){
    $(".box").removeClass("highlight");
  });
  
  $(".reset").click(function(){
    $(".box").removeClass("highlight");
    var num = prompt("How big do you want your canvas?");
    var container = $(".container");
    var newBox = $('<div class="box"></div>');
    if (num > 0) {
      $(".box").remove();
      for (var i = 0; i < num * num; i++) {
        container.append(newBox.clone());
      }
      $(".box").mouseenter(function(){
        $(this).addClass("highlight");
      });
      var size = (100/num) + "%";
      $(".box").css({"width" : size, "height": size});
    } else {
      alert("Try again with a value greater than 0!");
    }
  });
});
