canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "brown";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 1;
ctx.rect(200, 200, 400, 200);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.arc(240, 240, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.arc(335, 240, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 2;
ctx.arc(290, 285, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.arc(430, 240, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 2;
ctx.arc(385, 285, 40, 0, 2 * Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mousex = e.clientX - canvas.offsetLeft;
    mousey = e.clientY - canvas.offsetTop;

 circle(mousex, mousey);
}
function circle(mousex, mousey){
    ctx.beginPath();
ctx.strokeStyle = "cyan";
ctx.lineWidth = 2;
ctx.arc(mousex,mousey,40,0, 2 * Math.PI);
ctx.stroke();
}