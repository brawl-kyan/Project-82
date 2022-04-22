 
var m_event = "";
 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

 radius="4"; 
 color="Red";
 line_width="2";

canvas.addEventListener("mousedown", my_down);

function my_down(e) {
radius = document.getElementById("radius").value;
color = document.getElementById("color").value;
 width = document.getElementById("line_width").value;
    m_event = "mousedown";
    console.log(m_event);
    
}
canvas.addEventListener("mouseup", my_up);

function my_up(e) {
    m_event = "mouseup";
    console.log(m_event);
}
canvas.addEventListener("mouseleave", my_leave);

function my_leave(e) {
    m_event = "mouseleave";
    console.log(m_event);
}
canvas.addEventListener("mousemove", my_move);

function my_move(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (m_event == "mousedown") {

    
        console.log("Current position of x and y");
        console.log("x =" + current_x + "y =" + current_y);
        
        ctx.beginPath();
        ctx.strokestyle = color;
        ctx.lineWidth = width;
        
        ctx.arc(current_x, current_y,radius,0,2 * Math.PI);
        ctx.stroke();
    }
    
}
function clearArea() {
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}