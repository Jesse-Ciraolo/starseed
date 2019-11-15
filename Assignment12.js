var x = 400;
var y = 70;
var x2 = 370;
var y2 = 580;
var a2 = 60;
var b2 = 620;
var diameter = 70;
var mousex = 0;
var mousey = 0;

var x4 = 78;
var y4 = 110;
var diameter4 = 60;
var speed4;

var x3 = 200;
var y3 = 430;
var a3 = 65;
var b3 = 53;
var speed3;

function setup() 
{
  createCanvas(800, 600);
  speed3 = Math.floor(Math.random() * 10) + 1;
  speed4 = Math.floor(Math.random() * 10) + 1;
}

function draw() 
{
  background(200,200,200);
  drawPlayer();
  drawExit();
  drawObstacles();
  playerMovement();
  obstacle1Movement();
  obstacle2Movement();
  drawClicker();

}

function drawPlayer()
{
    fill(Math.floor(Math.random()*300),Math.floor(Math.random()*300),Math.floor(Math.random()*300));
    circle(x, y, diameter);
}

function drawExit()
{
    fill(0, 200, 0);
    rect(x2,y2,a2,b2);
}

function drawObstacles()
{
    fill(Math.floor(Math.random()*200),Math.floor(Math.random()*200),Math.floor(Math.random()*200));
    ellipse(x3,y3,a3,b3);
    square(x4,y4,diameter4);
    ellipse(x3,y4,a3,b3);
}

function mouseClicked() 
{  
  mousex = mouseX;
  mousey = mouseY;

}

function playerMovement()
{
    if (keyIsDown(65))
    {
      x -= 10;
    }
    else if (keyIsDown(68))
    {
      x += 10;
    }
  
    if (x <= 0) 
    {
      x = 50;
    }
  
    if(x >= 795)
    {
      x = 745;
    }
  
    if (keyIsDown(83)) 
    {
      y += 10;
    } 
    else if (keyIsDown(87)) 
    {
      y -= 10;
    }
  
    if (y >= 580 && x == 400)
    {
      y = 600;
      winText();
    }
  
    if (y >= 620) 
    {
      y = 550;
    }
    
    if (y <= 0) 
    {
      y = 50;
    }
}

function obstacle1Movement()
{
    if (x3 >= width - (a3/2) || x3 <= a3/2 )
    {
      speed3 *= -1;
    }
    x3+=speed3;
    y3--;

    if (y3 <= 0)
    {
      y3 = 600;
    }
}

function obstacle2Movement()
{
    if (y4 >= height - (diameter4/2) || y4 <= diameter4/2 )
    {
      speed4 *= -1;
    }
    y4+=speed4;
  
    if (x4 >= width - (diameter4/2) || x4 <= diameter4/2 )
    {
      speed4 *= -1;
    }
    x4+=speed4;
}

function drawClicker()
{
    fill(200, 0, 0);
    circle(mousex, mousey, 30,);
}

function winText()
{
    fill(Math.floor(Math.random()*200),Math.floor(Math.random()*100),Math.floor(Math.random()*0));
    textSize(120);
        text('You Win!', 200, 200);
}
