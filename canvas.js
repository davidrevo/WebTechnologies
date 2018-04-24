/* Drawing functions */
function drawRectangle() {
  var canvas = document.getElementById('canvas');
  if(canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'green';
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}

function drawPath() {
  var canvas = document.getElementById('canvas');
  if(canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(175, 50);
    ctx.lineTo(200, 75);
    ctx.lineTo(200, 25);
    ctx.fill();
  }
}

function drawSmileFace() {
  var canvas = document.getElementById('canvas');
  if(canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(300, 75, 50, 0, Math.PI*2, true); // Outer circle
    ctx.moveTo(335, 75);
    ctx.arc(300, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(290, 65);
    ctx.arc(285, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(320, 65);
    ctx.arc(315, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
  }
}

function lineToDraw() {
  var canvas = document.getElementById('canvas');
  if(canvas.getContext) {
    var ctx = canvas.getContext('2d');
  }

  // Filled triangle
  ctx.beginPath();
  ctx.moveTo(20, 150);
  ctx.lineTo(100, 150);
  ctx.lineTo(20, 230);
  ctx.fill();

  // Stoked triangle
  ctx.beginPath();
  ctx.moveTo(120, 250);
  ctx.lineTo(120, 180);
  ctx.lineTo(40, 250);
  ctx.closePath();
  ctx.stroke();
}

/* Implementations */
drawRectangle();
drawPath();
drawSmileFace();
lineToDraw();
