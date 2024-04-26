const
    hexagonWidth = Math.round(27/8),
    hexagonHeight = Math.round(32/8),
    grid = [];

function createGrid() {
    for (let y = 0; y < rows * (0.882); y++) {
        let line = [];
        for (let x = 0; x < cols *(0.598); x++) {
            line.push(new Cell(x, y));
        }
        grid.push(line);
    }
}

function displayGrid() {
    grid.forEach(line => line.forEach(cell => cell.show(hexagonWidth, hexagonHeight)));
}

function setup() {
    cols = Math.floor(windowWidth / hexagonWidth);
    rows = Math.floor(windowHeight / hexagonHeight);

    let canvas = createCanvas(cols * hexagonWidth, rows * hexagonHeight);


    canvas.parent("container")

    createGrid();
    scale(0.5);

}

function draw() {
    background(60);

    displayGrid();
}