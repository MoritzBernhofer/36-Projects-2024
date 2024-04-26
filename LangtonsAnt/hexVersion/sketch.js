
function setup() {
    rows = Math.floor(windowWidth / cellSize);
    cols = Math.floor(windowHeight / cellSize);

    let canvas = createCanvas(rows * cellSize, cols * cellSize);

    canvas.parent("container")


}

function draw() {
    background(20, 52, 130);
}