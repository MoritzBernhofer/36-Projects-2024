function Cell(x, y) {
    this.x = x;
    this.y = y;
    this.color = 255;

    this.show = (cellSize) => {
        noStroke();

        if(this.color === 255){
            return;
        }

        fill(this.color);

        let posX = this.x * cellSize,
            posY = this.y * cellSize;

        rect(posX, posY, cellSize, cellSize);
    }
}

