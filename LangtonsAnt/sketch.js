let grid = [],
    cellSize = 24,
    rows, cols;

function createGrid() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            
        }
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    rows = Math.round(windowHeight / cellSize);
    cols = Math.round(windowWidth / cellSize);
    
    createGrid();
}

function draw() {
    background(255, 255, 0);
    
}