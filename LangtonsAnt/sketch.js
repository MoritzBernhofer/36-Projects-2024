let grid = [],
    cellSize = 1,
    rows, cols,
    ant;

function createGrid() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid.push(new Cell(i, j));
        }
    }
}

function showGrid() {
    grid.forEach(cell => cell.show(cellSize));
}

function show() {
    showGrid();
    ant.show(cellSize);
}

function setup() {
    rows = Math.floor(windowWidth / cellSize);
    cols = Math.floor(windowHeight / cellSize);

    ant = new Ant(Math.round(rows / 2), Math.round(cols / 2));

    let canvas = createCanvas(rows * cellSize, cols * cellSize);

    canvas.parent("container")

    createGrid();
   // frameRate(0.5);
}

function draw() {
    //background(20, 52, 130);
    background(255);

    for (let i = 0; i < 10; i++) {
        ant.update(grid, cols);

    }
    show();
}