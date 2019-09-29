

$("html").mousemove(function(e){
    let mouseX = e.pageX;
    let mouseY = e.pageY;
    //$("#about").css("background-color","hsl("+(100+mouseX/10)+",80%,75%)");
    $("#about").css("background", "linear-gradient(45deg, hsl(" + (200 + mouseX / 10) + ",100%,75%), hsl(" + (275 + mouseX / 10) + ",100%,75%))")
    $(".description").css("color","hsl("+(mouseY/5)+",100%,50%)");

})
$("html").click(function(e){
    $("#about").css("background-color","white");
 
    $(".description").css("color","black");

})
