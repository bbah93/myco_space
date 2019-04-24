//Set Up Canvas var reference
var myCanvas = document.getElementById("gameCanvas");
var myContext = myCanvas.getContext("2d");

var players = [];

//Players Constructor
function Player(initX, initY, width, height, color, name){
    this.x = initX;
    this.y = initY;
    this.w = width;
    this.h = height;
    this.c = color;
    players.push(this);
    this.name = name;
    this.airborne = true;
}

this.yAccel = 0;
this.gravity = function(){
    if(this.airborne){
        this.yAccel -= 1;
    }
    this.y -= this.yAccel;
    this.airborne = false;
    this.y = myCanvas.height - this.h;
}
//Step 3: Create two Players
var playerOne=new Player(10,10,10,10,"red","Player One");
var playerTwo=new Player(380,10,10,10,"blue","Player Two");

function cycle(){
    myContext.clearRect(0,0,myCanvas.width,myCanvas.height);
    resolveKeys();
    players.forEach(function(player){
      player.gravity();
      myContext.fillStyle=player.c;
      myContext.fillRect(player.x,player.y,player.w,player.h);
    })
}
var loop = setInterval(cycle, 33)

var keys = [];
//Make your characters move whenever a key is pressed
onkeydown = onkeyup = function(e){
 keys[e.keyCode] = e.type == 'keydown';
}

function resolveKeys(){
    if(keys[37]){
        playerTwo.x-=4;
      }
      if(keys[39]){
        playerTwo.x+=4;
      }
      if(keys[65]){
        playerOne.x-=4;
      }
      if(keys[68]){
        playerOne.x+=4;
      }
}