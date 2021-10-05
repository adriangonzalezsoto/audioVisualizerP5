var canción;
var botón;
var botón1;
var botón2;
var botón3;
var botón4;
var volhistory = [];
var fft;
var landscape;
var knights;
var fondo;
var dancing;
var happy;
var dupstep;
var calm;

function switchCanción() {
  fondo = dancing;
  if (canción.isPlaying()) {
    canción.pause();
    botón.html("resumir");
    noLoop();
  } else {
    canción.play();
    botón.html("pausar");
    loop();
  }
}
function switchCanción1() {
  fondo = dupstep;
    if (canción1.isPlaying()) {
      canción1.pause();
      botón1.html("resumir");
      noLoop();
    } else {
      canción1.play();
      botón1.html("pausar");
      loop();
    }
}
function switchCanción2() {
    fondo = knights;
    if (canción2.isPlaying()) {
      canción2.pause();
      botón2.html("resumir");
      noLoop();
    } else {
      canción2.play();
      botón2.html("pausar");
      loop();
    }
}
function switchCanción3() {
  fondo = happy;
    if (canción3.isPlaying()) {
      canción3.pause();
      botón3.html("resumir");
      noLoop();
    } else {
      canción3.play();
      botón3.html("pausar");
      loop();
    }
}
function switchCanción4() {
  fondo = calm;
    if (canción4.isPlaying()) {
      canción4.pause();
      botón4.html("resumir");
      noLoop();
    } else {
      canción4.play();
      botón4.html("pausar");
      loop();
    }
}

function preload() {
  canción = loadSound('canciones/this-dot-kp.mp3');
  canción1 = loadSound('canciones/dupstep.mp3');
  canción2 = loadSound('canciones/epic.mp3');
  canción3 = loadSound('canciones/sunny.mp3');
  canción4 = loadSound('canciones/betterdays.mp3');
  landscape = loadImage('fondo/landscape.jpg');
  knights = loadImage('fondo/knights.jpg');
  happy = loadImage('fondo/happy.jpg');
  dupstep = loadImage('fondo/dupstep.jpg');
  dancing = loadImage('fondo/dancing.jpg');
  calm = loadImage('fondo/calm.jpg');
}

function setup() {

  createCanvas(windowWidth, windowHeight-30);
  fft = new p5.FFT();  

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

  fft = new p5.FFT();  
  fondo = landscape;
}

function draw() {
  background(fondo);
  
  stroke(0,255,255);
  var wave = fft.waveform()
  noFill();

  beginShape();
  for (var i = 0; i < width ; i++){
    var index = floor(map(i, 110, width, 110, wave.length))

    var x = i
    var y = wave[index] * 200 + height/2
    vertex(x, y)
  }
  endShape();
  
}