var currentEndAngle = 0
var currentStartAngle = 0;
var currentColor = 'black';
var lineRadius = 75;
var lineWidth = 15;

window.requestAnimationFrame(draw);


function draw() { 

    var can = document.getElementById('canvas'); // GET LE CANVAS
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius;
    var width;

    var startAngle = currentStartAngle * Math.PI;
    var endAngle = (currentEndAngle) * Math.PI;
    
    currentStartAngle = currentEndAngle - 0.01;
    currentEndAngle = currentEndAngle + 0.01;
    
    if (Math.floor(currentStartAngle / 2) % 2) {
      currentColor = "white";
      radius = lineRadius - 1;
      width = lineWidth + 3;
    } else {
      currentColor = "black";
      radius = lineRadius;
      width = lineWidth;
    }
            
    var counterClockwise = false;

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = width;
    // line color
    context.strokeStyle = currentColor;
    context.stroke();
    window.requestAnimationFrame(draw);

}
