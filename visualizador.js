var canción;
var volumen;
var botón;
var botón1;
var botón2;
var botón3;
var botón4;
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
function switchCanción1() {
    if (canción1.isPlaying()) {
      canción1.pause();
      botón1.html("resumir");
    } else {
      canción1.play();
      botón1.html("pausar");
    }
}
function switchCanción2() {
    if (canción2.isPlaying()) {
      canción2.pause();
      botón2.html("resumir");
    } else {
      canción2.play();
      botón2.html("pausar");
    }
}
function switchCanción3() {
    if (canción3.isPlaying()) {
      canción3.pause();
      botón3.html("resumir");
    } else {
      canción3.play();
      botón3.html("pausar");
    }
}
function switchCanción4() {
    if (canción4.isPlaying()) {
      canción4.pause();
      botón4.html("resumir");
    } else {
      canción4.play();
      botón4.html("pausar");
    }
}

function preload() {
  canción = loadSound('canciones/this-dot-kp.mp3');
  canción1 = loadSound('canciones/dupstep.mp3');
  canción2 = loadSound('canciones/epic.mp3');
  canción3 = loadSound('canciones/sunny.mp3');
  canción4 = loadSound('canciones/betterdays.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight-30);

  botón = createButton('Canción1');
  botón.mousePressed(switchCanción);

  botón1 = createButton("Canción2");
  botón1.mousePressed(switchCanción1);

  botón2 = createButton("Canción3");
  botón2.mousePressed(switchCanción2);

  botón3 = createButton("Canción4");
  botón3.mousePressed(switchCanción3);

  botón4 = createButton("Canción5");
  botón4.mousePressed(switchCanción4);

  imagen = loadImage('canciones/imagenes/smileface.png');

  volumen = new p5.Amplitude();
}

function draw() {
  background(50);
  image(imagen, windowWidth/2 - 100 , windowHeight/2 + 10);
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
  //image(imagen, windowWidth/2 - 100 , windowHeight/2 + 40);
  
  //stroke(255, 0, 0);
  //stroke(volhistory.length, 10, volhistory.length, height);
  //ellipse(100, 100, 200, vol * 200);
}