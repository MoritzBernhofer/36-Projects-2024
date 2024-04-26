function Ant(x, y) {
    this.x = x;
    this.y = y;
    this.direction = 90;

    this.show = (cellSize) => {
        noStroke();
        fill("red");

        rect(this.x * cellSize, this.y * cellSize, cellSize, cellSize);
    }

    this.update = (grid, rows) => {
        const index = this.x + this.y * rows;

        if(index > grid.length){
            frameRate(0);
            return;
        }

        const color = grid[index].color;

        if (color === 255) {
            grid[index].color = this.direction;
            this.direction -= 90;
        } else {
            grid[index].color = 255;
            this.direction += 90;
        }

        if (this.direction === 360) {
            this.direction = 0;
        } else if (this.direction === -90) {
            this.direction = 270;
        }

        switch (this.direction) {
            case 0:
                this.x += 1;
                break;
            case 90:
                this.y -= 1;
                break;
            case 180:
                this.x -= 1;
                break;
            case 270:
                this.y += 1;
                break;
        }
    }
}