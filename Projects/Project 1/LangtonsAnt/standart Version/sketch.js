let grid = [],
    cellSize = 1,
    rows, cols,
    ant;

function createGrid() {
    for (let y = 0; y < cols; y++) {
        for (let x = 0; x < rows; x++) {
            grid.push(new Cell(x, y));
        }
    }
}

function showGrid() {
    grid.forEach(cell => cell.show(cellSize, ant.direction));
}

function displayGridAndAnt() {
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
    //frameRate(0.5);
}

function draw() {
    //background(20, 52, 130);
    background(255);

    for (let i = 0; i < 50; i++) {
        ant.update(grid, rows);
    }

    displayGridAndAnt();
}