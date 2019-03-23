//  User Input
var M = 2;
var X = 0;
var Y = 0;

let Canvas_Size = 800;
var N = Math.pow(2, M);
var w = Canvas_Size / N;
var grid = Array(N).fill().map(() => Array(N).fill(0));
grid[Y][X] = -1;
symbols = [];
for (let i = 1; i <= N * N; i++) {
  symbols.push(i);
}
console.log(N);


function tiling(n, x, y, a, b, i) {
  //show();

  // Base Case -> place 3 OTHER Tiles
  if (n == 2) {
    // Top Left Quarter
    if (x - a < n / 2 && y - b < n / 2) {
      grid[b + n / 2 - 1][a + n / 2] = symbols[i]
      grid[b + n / 2][a + n / 2] = symbols[i]
      grid[b + n / 2][a + n / 2 - 1] = symbols[i]
    }
    // Top Right Quarter
    if (x - a >= n / 2 && y - b < n / 2) {
      grid[b + n / 2 - 1][a + n / 2 - 1] = symbols[i]
      grid[b + n / 2][a + n / 2] = symbols[i]
      grid[b + n / 2][a + n / 2 - 1] = symbols[i]
    }
    // Bottom Left Quarter
    if (x - a < n / 2 && y - b >= n / 2) {
      grid[b + n / 2 - 1][a + n / 2 - 1] = symbols[i]
      grid[b + n / 2 - 1][a + n / 2] = symbols[i]
      grid[b + n / 2][a + n / 2] = symbols[i]
    }
    // Bottom Right Quarter
    if (x - a >= n / 2 && y - b >= n / 2) {
      grid[b + n / 2 - 1][a + n / 2 - 1] = symbols[i]
      grid[b + n / 2 - 1][a + n / 2] = symbols[i]
      grid[b + n / 2][a + n / 2 - 1] = symbols[i]
    }
    i += 1;
    return i;
  }

  // if ( n>2 )
  //Place Middle Tile
  // Top Left Quarter
  if (x - a < n / 2 && y - b < n / 2) {
    grid[b + n / 2 - 1][a + n / 2] = symbols[i]
    grid[b + n / 2][a + n / 2] = symbols[i]
    grid[b + n / 2][a + n / 2 - 1] = symbols[i]
  }
  // Top Right Quarter
  if (x - a >= n / 2 && y - b < n / 2) {
    grid[b + n / 2 - 1][a + n / 2 - 1] = symbols[i]
    grid[b + n / 2][a + n / 2] = symbols[i]
    grid[b + n / 2][a + n / 2 - 1] = symbols[i]
  }
  // Bottom Left Quarter
  if (x - a < n / 2 && y - b >= n / 2) {
    grid[b + n / 2 - 1][a + n / 2 - 1] = symbols[i]
    grid[b + n / 2 - 1][a + n / 2] = symbols[i]
    grid[b + n / 2][a + n / 2] = symbols[i]
  }
  // Bottom Right Quarter
  if (x - a >= n / 2 && y - b >= n / 2) {
    grid[b + n / 2 - 1][a + n / 2 - 1] = symbols[i]
    grid[b + n / 2 - 1][a + n / 2] = symbols[i]
    grid[b + n / 2][a + n / 2 - 1] = symbols[i]
  }
  i += 1;

  // Recursion
  // Top Left Quarter
  if (x - a < n / 2 && y - b < n / 2) {
    i = tiling(n / 2, x, y, a, b, i)
    i = tiling(n / 2, a + n / 2, b + n / 2 - 1, a + n / 2, b, i)
    i = tiling(n / 2, a + n / 2, b + n / 2, a + n / 2, b + n / 2, i)
    i = tiling(n / 2, a + n / 2 - 1, b + n / 2, a, b + n / 2, i)
  }
  // Top Right Quarter
  if (x - a >= n / 2 && y - b < n / 2) {
    i = tiling(n / 2, a + n / 2 - 1, b + n / 2 - 1, a, b, i)
    i = tiling(n / 2, x, y, a + n / 2, b, i)
    i = tiling(n / 2, a + n / 2, b + n / 2, a + n / 2, b + n / 2, i)
    i = tiling(n / 2, a + n / 2 - 1, b + n / 2, a, b + n / 2, i)
  }
  // Bottom Right Quarter
  if (x - a >= n / 2 && y - b >= n / 2) {
    i = tiling(n / 2, a + n / 2 - 1, b + n / 2 - 1, a, b, i)
    i = tiling(n / 2, a + n / 2, b + n / 2 - 1, a + n / 2, b, i)
    i = tiling(n / 2, x, y, a + n / 2, b + n / 2, i)
    i = tiling(n / 2, a + n / 2 - 1, b + n / 2, a, b + n / 2, i)
  }
  // Bottom Left Quarter
  if (x - a < n / 2 && y - b >= n / 2) {
    i = tiling(n / 2, a + n / 2 - 1, b + n / 2 - 1, a, b, i)
    i = tiling(n / 2, a + n / 2, b + n / 2 - 1, a + n / 2, b, i)
    i = tiling(n / 2, a + n / 2, b + n / 2, a + n / 2, b + n / 2, i)
    i = tiling(n / 2, x, y, a, b + n / 2, i)
  }

  return i
}

function show() {
  var msg = "";
  for (var i = 0; i < N; i++) {
    for (var j = 0; j < N; j++) {
      console.log(i.toString()+" "+j.toString());
      
      msg += grid[i][j].toString().padStart(3)
    }
    msg += "\n";
  }
  console.log(msg);
}

function DrawTiling() {
  console.log(M);
  console.log(N);
  console.log(X);
  console.log(Y);
  
  background(255)

  tiling(N, X, Y, 0, 0, 0)

  //show();

  randomSeed()
  s = random(10000, 50000)

  // Drawing Tiles
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {

      randomSeed(grid[i][j] * s)
      r = random(0, 65)
      randomSeed(grid[i][j] * (s+596))
      v = random(75, 95)

      colorMode(HSB, 100)

      fill(r, 85, v)
      if (i == Y && j == X) {
        fill(0)
      }
      stroke(100)
      strokeWeight(2)

      rect(i * (w), j * w, w, w);
    }
  }
}

function setup() {

  // Settings
  Canvas_Size = Math.min(windowWidth-100,windowHeight-100)
  w = Canvas_Size / N;
  createCanvas(Canvas_Size, Canvas_Size);
  background(250);
  strokeWeight(2)
  noFill();

  // Call Drawing Function
  DrawTiling();

}

function windowResized() {
  // Settings
  Canvas_Size = Math.min(windowWidth-100,windowHeight-100)
  w = Canvas_Size / N;
  createCanvas(Canvas_Size, Canvas_Size);
  background(250);
  strokeWeight(2)
  noFill();

  // Call Drawing Function
  DrawTiling();
}

// Selecting First Tile (Black/Removed Tile)
function mousePressed() {
  Y = Math.floor(mouseX / Canvas_Size * N);
  X = Math.floor(mouseY / Canvas_Size * N);
  console.log("First : " + X.toString() + ", " + Y.toString())
  // Call Drawing Function
  DrawTiling();
}

// Setting Grid Size by keyboard input
function keyPressed() {
  if (keyCode >= 49 && keyCode <= 54) {
    console.log("M = " + (keyCode - 48).toString());
    M = (keyCode - 48)
    N = Math.pow(2, M);
    w = Canvas_Size / N;
    grid = Array(N).fill().map(() => Array(N).fill(0));
    symbols = [];
    for (let i = 1; i <= N * N; i++) {
      symbols.push(i);
    }
    // Call Drawing Function
    DrawTiling();
  }
  else if (keyCode>=54 && keyCode<=57){
    alert("Out of Boundary")
  }
}
