
var canción;
var volumen;
var botón;

var volhistory = [];

function switchCanción() {
  if (canción.isPlaying()) {
    canción.pause();
  } else {
    canción.play();
  }
}

function preload() {
  canción = loadSound('this-dot-kp.mp3');
}

function setup() {
  createCanvas(200, 200);
  botón = createButton('pausar');
  botón.mousePressed(switchCanción);
  canción.play();
  volumen = new p5.Amplitude();
}

function draw() {
  background(0);
  var vol = volumen.getLevel();
  volhistory.push(vol);
  stroke(255);
  noFill();
  push();
  //var currentY = map(vol, 0, 1, height, 0);
  //translate(0, height / 2 - currentY);
  beginShape();
  for (var i = 0; i < volhistory.length; i++) {
    var y = map(volhistory[i], 0, 1, height, 0);
    vertex(i, y);
  }
  endShape();
  pop();
  if (volhistory.length > width - 50) {
    volhistory.splice(0, 1);
  }

  stroke(255, 0, 0);
  stroke(volhistory.length, 10, volhistory.length, height);
  //ellipse(100, 100, 200, vol * 200);
}
