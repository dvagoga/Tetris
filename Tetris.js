"use strict";
// classes
function onePiece(x){
   var ox = x;
   this.getX = function(){
      return ox;
   };
   this.goLeft = function(){
      if (ox > 0){
	     ox--;
	  };
   };
   this.goRight = function(){
      if (ox < (tetField.width*tetField.height)-1){
         ox++;
      };
   };
   this.goUp = function(){
      if (ox > (tetField.height-1)){
         ox = ox - tetField.height;
      };      
   };
   this.goDown = function(){
      if (ox < tetField.width*(tetField.height-1)){
         ox = ox + tetField.height;
      };      
   };
};
// user interface
function fUp(){
   document.getElementById(point.getX()).className = 'kubNul';
   point.goUp();
   var newPoint = document.getElementById(point.getX());
   newPoint.className = 'kube';
};
function fDown(){
   document.getElementById(point.getX()).className = 'kubNul';
   point.goDown();
   var newPoint = document.getElementById(point.getX());
   newPoint.className = 'kube';
};
function fLeft(){
   document.getElementById(point.getX()).className = 'kubNul';
   point.goLeft();
   var newPoint = document.getElementById(point.getX());
   newPoint.className = 'kube';
};
function fRight(){
   document.getElementById(point.getX()).className = 'kubNul';
   point.goRight();
   var newPoint = document.getElementById(point.getX());
   newPoint.className = 'kube';
};
// initialization graphics
function initGameField(width, height){
   var pole = document.getElementById('gameField');
   var gField = document.createElement('div');
   pole.appendChild(gField);
   for (var i=0; i<width; i++){
      for(var j=0; j<height; j++){
         var cell = document.createElement('div');
         cell.className = 'kubNul';
         cell.id = i*height+j;
         gField.appendChild(cell);
      };
      var wall = document.createElement('div');
      wall.className = 'wall';
      gField.appendChild(wall);
   };
   document.getElementById('bUp').onclick = fUp;
   document.getElementById('bDown').onclick = fDown;
   document.getElementById('bLeft').onclick = fLeft;
   document.getElementById('bRight').onclick = fRight;
};

var tetField = {
   width: 32,
   height: 24
};

initGameField(tetField.width, tetField.height);

var point = new onePiece(tetField.height-12);
document.getElementById(point.getX()).className = 'kube';

var cnt = 0;
var win = false;

setTimeout(function step(){
   cnt++;
   fDown();
   if (cnt == tetField.width-1) win = true;
   if (!win)setTimeout(step, 1000)
}, 1000);
