
function ornament(x,y){

  // stroke(204, 153, 255, 255); //same as background
  strokeWeight(1.5);
  fill(153, 51, 255, 255);
  quad(x+20,y+5,x+70,y+15,x+60,y+65,x+10,y+45);
  fill(102, 194, 255, 255);
  quad(x+5,y+65,x+15,y+15,x+60,y+5,x+40,y+45);
  fill(255, 128, 191, 255);
  arc(x+40,y+42,35,35,0,3.8,CHORD);
  fill(255, 255, 102, 255);
  ellipse(x+40,y+20,10);

}

function setup() {
  createCanvas(780,780);
  background(204, 153, 255, 255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

  for(var row=0; row<8; row++) {
    for (var col=0; col<8; col++) {
      ornament(row*80, col*80);
    }
  }

}
