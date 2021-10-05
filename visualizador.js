
var canción1;
var volumen;
var botón;
var registroVolumen = [];


function switchCanción() {
    
  if (canción1.IsPlaying()){
        canción1.pause();
        botón.html('play');
    } else{
        canción1.play();
        botón.html('pause');
    }
}

function preload(input) {
  canción1 = loadSound('canciones/this-dot-kp.mp3');
  
}

function setup() {
  createCanvas(500, 500);
  botón = createButton('pause');
  botón.mousePressed(switchCanción());
  canción1.play();
  volumen = new p5.Amplitude();
}

function draw() {
  background(59);
  var vol = volumen.getLevel();
  registroVolumen.push(vol);
  stroke(0);
  noFill();
  push();
  
  beginShape();
  for (var i = 0; i < registroVolumen.length; i++) {
    var y = map(registroVolumen[i], 0, 1, height/2, 0);
    vertex(i, y);
  }
  
  endShape();
  
  pop();
  if (registroVolumen.length > width - 1) {
    registroVolumen.splice(0, 1);
  }

  //stroke(200, 150, 70);
  //stroke(registroVolumen.length, 1, registroVolumen.length, height/2);
 
}
