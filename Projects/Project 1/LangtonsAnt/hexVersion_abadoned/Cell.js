function Cell(x, y) {
    this.x = x;
    this.y = y;
    this.color = 255;

    this.show = (cellWidth, cellHeight) => {
        let posX;
        let posY;

        // if(this.color === 255)
        //     return;

        if (y % 2 === 0) {
            posX = (this.x * (5 / 6 * (cellWidth * 2))) + cellWidth;
        } else {
            posX = (this.x * (5 / 6 * (cellWidth * 2))) + cellWidth - cellWidth * 5 / 6;
        }

        posY = (this.y * cellWidth * 3 / 4 * 2) + (cellHeight * 3 / 4);


        stroke(0);
        strokeWeight(1);
        fill(this.color);

        drawHexagon(posX, posY, cellWidth);
    }
}

function drawHexagon(cX, cY, r) {
    beginShape()

    for (let a = TWO_PI / 12; a < TWO_PI + TWO_PI / 12; a += TWO_PI / 6) {
        vertex(cX + r * cos(a), cY + r * sin(a))
    }

    endShape(CLOSE)
}
