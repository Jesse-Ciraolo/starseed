/*
  Author: Jesse Ciraolo
  Assignment 10
  Date: November 4, 2019
*/

var x = 130;
var y = 95;
var diameter = 80;
var speed;

var x2 = 78;
var y2 = 110;
var diameter2 = 100;
var speed2;

var x3 = 200;
var y3 = 130;
var a3 = 65;
var b3 = 53;
var speed3;

var x4 = 60;
var y4 = 130;
var a4 = 65;
var b4 = 53;
var speed4;

var x5 = 105;
var y5 = 50;
var a5 = 15;
var b5 = 10;
var speed5;

var x6 = 140;
var y6 = 50;
var a6 = 15;
var b6 = 10;
var speed6;

var x7 = 110;
var y7 = 90;
var a7 = 150;
var b7 = 90;
var speed7;

var x8 = 80;
var y8 = 280;
var a8 = 130;
var b8 = 280;
var c8 = 105;
var d8 = 210;
var speed8;

var x9 = 130;
var y9 = 280;
var a9 = 180;
var b9 = 280;
var c9 = 155;
var d9 = 210;
var speed9;

var x10 = 120;
var y10 = 70;
var a10 = 135;
var b10 = 70;
var c10 = 128;
var d10 = 85;
var speed10;

var x11 = 200;
var y11 = 200;
var speed11;

var s1 = 18;

function setup() {
    createCanvas(300, 400);
    speed = Math.floor(Math.random() * 10) + 1;
    speed2 = Math.floor(Math.random() * 10) + 1;
    speed3 = Math.floor(Math.random() * 10) + 1;
    speed4 = Math.floor(Math.random() * 10) + 1;
    speed5 = Math.floor(Math.random() * 10) + 1;
    speed6 = Math.floor(Math.random() * 10) + 1;
    speed7 = Math.floor(Math.random() * 10) + 1;
    speed8 = Math.floor(Math.random() * 10) + 1;
    speed9 = Math.floor(Math.random() * 10) + 1;
    speed10 = Math.floor(Math.random() * 10) + 1;
    speed11 = Math.floor(Math.random() * 10) + 1;
  }
  
function draw() {
  background(333);
  fill(23,140,128);
  circle(x,y,diameter);
  square(x2,y2,diameter2);
  ellipse(x3,y3,a3,b3);
  ellipse(x4,y4,a4,b4);
  rect(x5,y5,a5,b5);
  rect(x6,y6,a6,b6);
  line(x7,y7,a7,b7);
  triangle(x8, y8, a8, b8, c8, d8);
  triangle(x9, y9, a9, b9, c9, d9);
  triangle(x10, y10, a10, b10, c10, d10);
  point(x11,y11);
  textSize(32);
    text('Jesse Ciraolo', 100, 380);
  textSize(s1); //Couldn't get text to shrink after growing 5 times, nevermind in a loop
     text('Selft Portrait', 80, 20);
  
  if(y >= height - (diameter/2) || y <= diameter/2 )
  {
    speed *= -1; // switch direction (same as speed=speed*-1)
  }
  
  y+=speed; //moves down by adding 1 (y=y+1 and y+=1)

  if(y2 >= height - (diameter2/2) || y2 <= diameter2/2 )
  {
    speed2 *= -1; // switch direction (same as speed=speed*-1)
  }
  y2+=speed2;

  if (x3 >= width - (a3/2) || x3 <= a3/2 )
  {
    speed3 *= -1;
  }
  x3+=speed3;
  
  if (x4 >= width - (a4/2) || x4 <= a4/2 )
  {
    speed4 *= -1;
  }
  x4+=speed4;

  if (y5 >= height - (a5/2) || y5 <= a5/2 )
  {
    speed5 *= -1;
  }
  y5+=speed5;

  if (y6 >= height - (a6/2) || y6 <= a6/2 )
  {
    speed6 *= -1;
  }
  y6+=speed6;

  if (x6 >= width - (b6/2) || x6 <= b6/2 )
  {
    speed6 *= -1;
  }
  x6+=speed6;

  if (y7 >= height - (b7/2) || y7 <= b7/2 )
  {
    speed7 *= -1;
  }
  y7+=speed7;
  b7+=speed7;

  if (x8 >= width - (a8/2) || x8 <= a8/2 )
  {
    speed8 *= -1;
  }
  x8+=speed8;
  a8+=speed8;
  c8+=speed8;

  if (x9 >= width - (a9/2) || x9 <= a9/2 )
  {
    speed9 *= -1;
  }
  x9+=speed9;
  a9+=speed9;
  c9+=speed9;

  if (y10 >= height - (b10/2) || y10 <= b10/2 )
  {
    speed10 *= -1;
  }
  y10+=speed10;
  b10+=speed10;
  d10+=speed10;

  if (y11 >= height )
  {
    speed11 *= -1;
  }
  y11+=speed11;


  
  }