// Processing Java mode. Hold the mouse button and move to draw.
void setup() {
  size(640, 480);
  background(255);
  stroke(255, 0, 0);
  strokeWeight(4);
}

void draw() {
  if (mousePressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
