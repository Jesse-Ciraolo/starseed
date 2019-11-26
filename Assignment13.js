/*
    Author: Jesse Ciraolo
    Assignment 13
    Date: Nov 24, 2019
*/

var xPlayer = 400;
var yPlayer = 70;
var diameterPlayer = 70;
var mousex = 0;
var mousey = 0;

var xFinish = 370;
var yFinish = 580;
var aFinish = 60;
var bFinish = 620;

//var x4 = 78;
//var y4 = 110;
//var diameter4 = 60;
//var speed4;

//var x3 = 200;
//var y3 = 430;
//var diameter3 = 60;
//var speed3;

var xCoord = [];
var yCoord = [];
var diameterValues = [];
var speedForX = [];
var speedForY = [];

function setup() 
{
  createCanvas(800, 600);
  var x = 50;
  var y = 50;
  var diameter = 50;
  var speedX =  Math.floor(Math.random() * 10) + 1;
  var speedY =  Math.floor(Math.random() * 10) + 1;
  for(var i = 0; i < 5; i++)
  {
    xCoord[i] = x;
    yCoord[i] = y;
    diameterValues[i] = diameter;
    speedForX[i] = speedX;
    speedForY[i] = speedY;
    x += 10;
    y += 20;
    diameter += 10;
    speedX += 1;
    speedY += 2;
  }
/*
  xCoord[1] = 78;
  xCoord[2] = 250;

  yCoord[1] = 110;
  yCoord[2] = 250;

  diameterValues[1] = 60;
  diameterValues[2] = 100;

  speedForX[1] = Math.floor(Math.random() * 10) + 1;
  speedForX[2] = Math.floor(Math.random() * 10) + 1;

  speedForY[1] = Math.floor(Math.random() * 10) + 1;
  speedForY[2] = Math.floor(Math.random() * 10) + 1;

  //speed3 = Math.floor(Math.random() * 10) + 1;
  //speed4 = Math.floor(Math.random() * 10) + 1;
*/
}

function draw() 
{
  background(200,200,200);
  drawObstacles();
  drawPlayer();
  drawExit();
  playerMovement();
  obstacleMovement();
  drawClicker();

}

function drawObstacles()
{
    fill(Math.floor(Math.random()*200),Math.floor(Math.random()*200),Math.floor(Math.random()*200));
    for(var i = 0; i < xCoord.length; i++)
    {
        circle(xCoord[i],yCoord[i],diameterValues[i]);
    }
    //circle(xCoord[1],yCoord[1],diameterValues[1]);
}

function drawPlayer()
{
    fill(Math.floor(Math.random()*300),Math.floor(Math.random()*300),Math.floor(Math.random()*300));
    circle(xPlayer, yPlayer, diameterPlayer);
}

function drawExit()
{
    fill(0, 200, 0);
    rect(xFinish,yFinish,aFinish,bFinish);
}

function playerMovement()
{
    if (keyIsDown(65))
    {
      xPlayer -= 10;
    }
    else if (keyIsDown(68))
    {
      xPlayer += 10;
    }
  
    if (xPlayer <= 0) 
    {
      xPlayer = 50;
    }
  
    if(xPlayer >= 795)
    {
        xPlayer = 745;
    }
  
    if (keyIsDown(83)) 
    {
      yPlayer += 10;
    } 
    else if (keyIsDown(87)) 
    {
      yPlayer -= 10;
    }
  
    if (yPlayer >= 580 && xPlayer == 400)
    {
      yPlayer = 600;
      winText();
    }
  
    if (yPlayer >= 620) 
    {
      yPlayer = 550;
    }
    
    if (yPlayer <= 0) 
    {
      yPlayer = 50;
    }
}

function obstacleMovement()
{
    for(var i = 0; i < xCoord.length; i++)
    {
        if (xCoord[i] >= width - diameterValues[i]/2 || xCoord[i] <= diameterValues[i]/2)
        {
            xCoord[i] -= 720;
            
    }
        else if ((yCoord[i] >= height-diameterValues[i]/2) || yCoord[i] <= diameterValues[i]/2)
        {
            speedForY[i] *= -1;
        }

    xCoord[i]+= speedForX[i];
    yCoord[i]+= speedForY[i];
    }
}

function mouseClicked() 
{  
  mousex = mouseX;
  mousey = mouseY;

}

function drawClicker()
{
    fill(Math.floor(Math.random()*300),Math.floor(Math.random()*100),Math.floor(Math.random()*100));
    circle(mousex, mousey, 50,);
}

function winText()
{
    fill(Math.floor(Math.random()*200),Math.floor(Math.random()*100),Math.floor(Math.random()*0));
    textSize(120);
        text('You Win!', 200, 200);
}