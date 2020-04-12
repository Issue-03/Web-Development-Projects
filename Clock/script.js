var canvas = document.getElementById("clock");
var obj = canvas.getContext("2d");
var radius = canvas.height / 2;
obj.translate(radius,radius);
radius = radius * 0.90;
setInterval(drawClock, 0);

function drawClock(){
  drawFace(obj,radius);
  drawNumbers(obj,radius);
  drawTime(obj,radius);
}

function drawFace(obj,radius){
  var grad;
  obj.beginPath();
  obj.arc(0,0,radius,0,2 * Math.PI);
  obj.fillStyle = "white";
  obj.fill();
  grad = obj.createRadialGradient(0,0,radius*0.95,0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  obj.strokeStyle = grad;
  obj.lineWidth = radius * 0.1;
  obj.stroke();
  obj.beginPath()
  obj.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  obj.fillStyle = '#333';
  obj.fill();
}

function drawNumbers(obj,radius){
  var angle
  var num
  obj.font = radius*0.15 + "px arial";
  obj.textBaseline = "middle";
  obj.textAlign = "center";
  for(num = 1;num < 13;num++){
    angle = num * Math.PI / 6;
    obj.rotate(angle);
    obj.translate(0, -radius*0.85);
    obj.rotate(-angle);
    obj.fillText(num.toString(),0,0);
    obj.rotate(angle);
    obj.translate(0, radius*0.85);
    obj.rotate(-angle);
  }
}

function drawTime(obj,radius){
  var curr = new Date();
  var hour = curr.getHours();
  var minute = curr.getMinutes();
  var second = curr.getSeconds();
  hour = hour%12;
  hour = (hour * Math.PI / 6) + (minute*Math.PI/(6*60)) + (second*Math.PI/(360*60));
  drawHand(obj,hour,radius*0.5,radius*0.07);
  minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
  drawHand(obj, minute, radius*0.8, radius*0.07);
  second=(second*Math.PI/30);
  drawHand(obj, second, radius*0.9, radius*0.02);
}

function drawHand(obj,pos,length,width) {
  obj.beginPath();
  obj.lineWidth = width;
  obj.lineCap = "round";
  obj.moveTo(0,0);
  obj.rotate(pos);
  obj.lineTo(0,-length);
  obj.stroke();
  obj.rotate(-pos);
}
