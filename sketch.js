var database;
var player,game,form
var playerCount;
var gameState=0;

function setup() {
  createCanvas(displayWidth,400);

  database= firebase.database();
  
  game= new Game();
  game.getState();

  game.start();
}

function draw() {
  if(gameState===1){  
    background(0);  
  }

  
}