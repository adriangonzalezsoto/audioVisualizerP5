var canción;
var volumen;
var botón;

var volhistory = [];

function switchCanción() {
  if (canción.isPlaying()) {
    canción.pause();
    botón.html("resumir");
  } else {
    canción.play();
    botón.html("pausar");
  }
}

function preload() {
  canción = loadSound('canciones/this-dot-kp.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight-50);
  botón = createButton('pausar');
  botón.mousePressed(switchCanción);
  canción.play();
  volumen = new p5.Amplitude();
}

function draw() {
  background(50);
  var vol = volumen.getLevel();
  volhistory.push(vol);
  stroke(0);
  noFill();
  push();

  beginShape();
  for (var i = 0; i < volhistory.length; i++) {
    var y = map(volhistory[i], 0, 1, height/2, 0);
    vertex(i, y);
  }
  endShape();
  pop();
  if (volhistory.length > width - 1) {
    volhistory.splice(0, 1);
  }

  //stroke(255, 0, 0);
  //stroke(volhistory.length, 10, volhistory.length, height);
  //ellipse(100, 100, 200, vol * 200);
}