let soundEx1;
let soundEx11;
let mercuryState = 0;

let soundEx2;
let soundEx22;
let venusState = 0;

let soundEx3;
let soundEx33;
let earthState = 0;

let soundEx4;
let soundEx44;
let marsState = 0;

let soundEx5;
let soundEx55;
let jupiterState = 0;

let soundEx6;
let soundEx66;
let saturnState = 0;

let soundEx7;
let soundEx77;
let uranusState = 0;

let soundEx8;
let soundEx88;
let neptuneState = 0;

function preload(){
  Sun = loadImage('assets/Sun1.png');
  Space1 = loadImage('assets/Space1.png');
  Space2 = loadImage('assets/Space.png');
  
  Mercury0 = loadImage('assets/Mercury0.png');
  Venus0 = loadImage('assets/Venus0.png');
  Earth0 = loadImage('assets/Earth0.png');
  Mars0 = loadImage('assets/Mars0.png');
  Jupiter0 = loadImage('assets/Jupiter0.png');
  Saturn0 = loadImage('assets/Saturn0.png');
  Uranus0 = loadImage('assets/Uranus0.png');
  Neptune0 = loadImage('assets/Neptune0.png');
  
  Mercury1 = loadImage('assets/Mercury1.png');
  Venus1 = loadImage('assets/Venus1.png');
  Earth1 = loadImage('assets/Earth1.png');
  Mars1 = loadImage('assets/Mars1.png');
  Jupiter1 = loadImage('assets/Jupiter1.png');
  Saturn1 = loadImage('assets/Saturn1.png');
  Uranus1 = loadImage('assets/Uranus1.png');
  Neptune1 = loadImage('assets/Neptune1.png');
  
  Mercury2 = loadImage('assets/Mercury2.png');
  Venus2 = loadImage('assets/Venus2.png');
  Earth2 = loadImage('assets/Earth2.png');
  Mars2 = loadImage('assets/Mars2.png');
  Jupiter2 = loadImage('assets/Jupiter2.png');
  Saturn2 = loadImage('assets/Saturn2.png');
  Uranus2 = loadImage('assets/Uranus2.png');
  Neptune2 = loadImage('assets/Neptune2.png');
  
  soundEx1 = loadSound('assets/MercuryAudio1.MP3');
  soundEx11 = loadSound('assets/MercuryAudio2.MP3');
  soundEx2 = loadSound('assets/VenusAudio1.MP3');
  soundEx22 = loadSound('assets/VenusAudio2.MP3');
  soundEx3 = loadSound('assets/EarthAudio1.MP3');
  soundEx33 = loadSound('assets/EarthAudio2.MP3');
  soundEx4 = loadSound('assets/MarsAudio1.MP3');
  soundEx44 = loadSound('assets/MarsAudio2.MP3');
  soundEx5 = loadSound('assets/JupiterAudio1.MP3');
  soundEx55 = loadSound('assets/JupiterAudio2.MP3');
  soundEx6 = loadSound('assets/SaturnAudio1.MP3');
  soundEx66 = loadSound('assets/SaturnAudio2.MP3');
  soundEx7 = loadSound('assets/UranusAudio1.MP3');
  soundEx77 = loadSound('assets/UranusAudio2.MP3');
  soundEx8 = loadSound('assets/NeptuneAudio1.MP3');
  soundEx88 = loadSound('assets/NeptuneAudio2.MP3');
}

function setup() {
  let canvas = createCanvas(1400, 400);
  canvas.parent("sketch-holder")
  
  soundEx1.loop();
  soundEx11.loop();
  soundEx2.loop();
  soundEx22.loop();
  soundEx3.loop();
  soundEx33.loop();
  soundEx4.loop();
  soundEx44.loop();
  soundEx5.loop();
  soundEx55.loop();
  soundEx6.loop();
  soundEx66.loop();
  soundEx7.loop();
  soundEx77.loop();
  soundEx8.loop();
  soundEx88.loop();
  
  soundEx1.setVolume(0);
  soundEx11.setVolume(0);
  soundEx2.setVolume(0);
  soundEx22.setVolume(0);
  soundEx3.setVolume(0);
  soundEx33.setVolume(0);
  soundEx4.setVolume(0);
  soundEx44.setVolume(0);
  soundEx5.setVolume(0);
  soundEx55.setVolume(0);
  soundEx6.setVolume(0);
  soundEx66.setVolume(0);
  soundEx7.setVolume(0);
  soundEx77.setVolume(0);
  soundEx8.setVolume(0);
  soundEx88.setVolume(0);
}

function draw() {
  background(20);
  //image(Space1,0,0,1400,400);
  image(Space2,0,0,1400,400);
  
  drawSun();
  drawMercury();
  drawVenus();
  drawEarth();
  drawMars();
  drawJupiter();
  drawSaturn();
  drawUranus();
  drawNeptune();
}

function mousePressed(){
  userStartAudio();
  
  //Mercury
  if(mouseX > 150 && mouseX < 165) {
    if(mouseY > 198 && mouseY < 210) {
    mercuryState++;
    if (mercuryState > 2) mercuryState = 0;

    soundEx1.setVolume(0);
    soundEx11.setVolume(0);

    if (mercuryState === 1) {
      soundEx1.setVolume(1);
    }
    if (mercuryState === 2) {
      soundEx11.setVolume(1);
    }
  }
}
  
  //Venus
  if(mouseX > 206 && mouseX < 242) {
    if(mouseY > 190 && mouseY < 216) {
    venusState++;
    if (venusState > 2) venusState = 0;

    soundEx2.setVolume(0);
    soundEx22.setVolume(0);

    if (venusState === 1) {
      soundEx2.setVolume(1);
    }
    if (venusState === 2) {
      soundEx22.setVolume(1);
    }
  }
}
  
  //Earth
  if (mouseX > 283 && mouseX < 323) {
    if (mouseY > 187 && mouseY < 217) {
    earthState++;
    if (earthState > 2) earthState = 0;

    soundEx3.setVolume(0);
    soundEx33.setVolume(0);

    if (earthState === 1) {
      soundEx3.setVolume(1);
    }
    if (earthState === 2) {
      soundEx33.setVolume(1);
    }
  }
}
  
  //Mars
  if(mouseX > 405 && mouseX < 431) {
    if(mouseY > 191 && mouseY < 214) {
    marsState++;
    if (marsState > 2) marsState = 0;

    soundEx4.setVolume(0);
    soundEx44.setVolume(0);

    if (marsState === 1) {
      soundEx4.setVolume(1);
    }
    if (marsState === 2) {
      soundEx44.setVolume(1);
    }
  }
}
  
  //Jupiter
  if(mouseX > 552 && mouseX < 712) {
    if(mouseY > 120 && mouseY < 280) {
    jupiterState++;
    if (jupiterState > 2) jupiterState = 0;

    soundEx5.setVolume(0);
    soundEx55.setVolume(0);

    if (jupiterState === 1) {
      soundEx5.setVolume(1);
    }
    if (jupiterState === 2) {
      soundEx55.setVolume(1);
    }
  }
}
  
  //Saturn
  if(mouseX > 840 && mouseX < 974) {
    if(mouseY > 135 && mouseY < 269) {
    saturnState++;
    if (saturnState > 2) saturnState = 0;

    soundEx6.setVolume(0);
    soundEx66.setVolume(0);

    if (saturnState === 1) {
      soundEx6.setVolume(1);
    }
    if (saturnState === 2) {
      soundEx66.setVolume(1);
    }
  }
}
  
  //Uranus
  if(mouseX > 1131 && mouseX < 1221) {
    if(mouseY > 160 && mouseY < 250) {
    uranusState++;
    if (uranusState > 2) uranusState = 0;

    soundEx7.setVolume(0);
    soundEx77.setVolume(0);

    if (uranusState === 1) {
      soundEx7.setVolume(1);
    }
    if (uranusState === 2) {
      soundEx77.setVolume(1);
    }
  }
}
  
  //Neptune
  if(mouseX > 1280 && mouseX < 1370) {
    if(mouseY > 160 && mouseY < 250) {
    neptuneState++;
    if (neptuneState > 2) neptuneState = 0;

    soundEx8.setVolume(0);
    soundEx88.setVolume(0);

    if (neptuneState === 1) {
      soundEx8.setVolume(1);
    }
    if (neptuneState === 2) {
      soundEx88.setVolume(1);
      }
    }
  }
}

function drawSun(){
  fill(250, 179, 72)
  noStroke()
  image(Sun,-600,-190,700,800)
  //ellipse(-330,200,800)
}

function drawMercury(){
  if(mercuryState === 2) {
    image(Mercury2,48,108, random(200,206), random(200,206))
  } else if (mercuryState === 1) {
    image(Mercury1,49,109, random(200,203), random(200,203))
  } else {
    image(Mercury0,50,110,200,200)
  }
  
  if(mouseX > 150 && mouseX < 165) {
    if(mouseY > 198 && mouseY < 210) {
  if(mercuryState === 2) {
    image(Mercury2,30,89, random(240,246), random(240,246))
  } else if (mercuryState === 1) {
    image(Mercury1,31,90, random(240,243), random(240,243))
  } else {
    image(Mercury0,32,91,240,240)
      }
    }
  }
}

function drawVenus(){
  if(venusState === 2) {
    image(Venus2,118,108,random(200,206), random(200,206));
  } else if (venusState === 1) {
    image(Venus1,119,109,random(200,203), random(200,203));
  } else {
    image(Venus0, 120,110,200,200)
  }
  
  if(mouseX > 206 && mouseX < 242) {
    if(mouseY > 190 && mouseY < 216) {
  if(venusState === 2) {
    image(Venus2,101,90,random(240,246), random(240,246));
  } else if (venusState === 1) {
    image(Venus1,102,91,random(240,243), random(240,243));
  } else {
    image(Venus0, 103,92,240,240)
      }
    }
  }
}

function drawEarth(){
  if (earthState === 2) {
    image(Earth2, 188, 98, random(220,226), random(220,226));
  } else if (earthState === 1) {
    image(Earth1, 189, 99, random(220,223), random(220,223));
  } else {
    image(Earth0, 190, 100, 220, 220);
  }

//gets bigger when hovered over
  if (mouseX > 283 && mouseX < 323) {
    if (mouseY > 187 && mouseY < 217) {
  if (earthState === 2) {
    image(Earth2, 171, 81, random(260,266), random(260,266));
  } else if (earthState === 1) {
    image(Earth1, 172, 82, random(260,263), random(260,263));
  } else {
    image(Earth0, 173, 83, 260, 260);
      }
    }
  }
}

function drawMars(){
  if (marsState === 2) {
    image(Mars2,318,108, random(200,206), random(200,206));
  } else if (marsState === 1) {
    image(Mars1,319,109,random(200,203), random(200,203));
  } else {
    image(Mars0,320,110,200,200);
  }
  
  if(mouseX > 405 && mouseX < 431) {
    if(mouseY > 191 && mouseY < 214) {
  if (marsState === 2) {
    image(Mars2,301,90, random(240,246), random(240,246));
  } else if (marsState === 1) {
    image(Mars1,302,91,random(240,243), random(240,243));
  } else {
    image(Mars0,303,92,240,240);
      }
    }
  }
} 

function drawJupiter(){
  if (jupiterState === 2) {
    image(Jupiter2,488,58,random(300,307), random(300,307));
  } else if (jupiterState === 1) {
    image(Jupiter1,489,59,random(300,303), random(300,303));
  } else {
    image(Jupiter0,490,60,300,300);
  }
  
  if(mouseX > 552 && mouseX < 712) {
    if(mouseY > 120 && mouseY < 280) {
  if (jupiterState === 2) {
    image(Jupiter2,472,47,random(330,337), random(330,337));
  } else if (jupiterState === 1) {
    image(Jupiter1,473,48,random(330,333), random(330,333));
  } else {
    image(Jupiter0,474,49,330,330);
      }
    }
  }
} 

function drawSaturn(){
  if (saturnState === 2) {
    image(Saturn2,758,58,random(300,307), random(300,307));
  } else if (saturnState === 1) {
    image(Saturn1,759,59,random(300,303), random(300,303));
  } else {
    image(Saturn0,760,60,300,300);
  }
  
  if(mouseX > 840 && mouseX < 974) {
    if(mouseY > 135 && mouseY < 269) {
  if (saturnState === 2) {
    image(Saturn2,749,50,random(315,322), random(315,322));
  } else if (saturnState === 1) {
    image(Saturn1,750,51,random(320,318), random(315,323));
  } else {
    image(Saturn0,751,52,315,315);
      }
    }
  }
} 

function drawUranus(){
  if (uranusState === 2) {
    image(Uranus2,1028,58,random(300,307), random(300,307));
  } else if (uranusState === 1) {
    image(Uranus1,1029,59,random(300,303), random(300,303));
  } else {
    image(Uranus0,1030,60,300,300);
  }
  
  if(mouseX > 1131 && mouseX < 1221) {
    if(mouseY > 160 && mouseY < 250) {
  if (uranusState === 2) {
    image(Uranus2,1021,50,random(315,322), random(315,322));
  } else if (uranusState === 1) {
    image(Uranus1,1022,51,random(315,318), random(315,318));
  } else {
    image(Uranus0,1023,52,315,315);
      }
    }
  }
} 

function drawNeptune(){ 
  if (neptuneState === 2) {
    image(Neptune2,1178,58, random(300,307), random(300,307));
  } else if (neptuneState === 1) {
    image(Neptune1,1179,59, random(300,303), random(300,303));
  } else {
    image(Neptune0,1180,60,300,300);
  }
  
  if(mouseX > 1280 && mouseX < 1370) {
    if(mouseY > 160 && mouseY < 250) {
  if (neptuneState === 2) {
    image(Neptune2,1165,46, random(330,337), random(330,337));
  } else if (neptuneState === 1) {
    image(Neptune1,1166,47, random(330,333), random(330,333));
  } else {
    image(Neptune0,1167,48,330,330);
      }
    }
  }
}