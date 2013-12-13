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
};

var tetField = {
   width: 32,
   height: 24
};

initGameField(tetField.width, tetField.height);

document.getElementById(tetField.width*tetField.height-10).className = 'kube';
