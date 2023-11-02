class Mouse {
    constructor(x,y){
        this.x = x
        this.y = y
        this.multiply = 0
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    chooseCell(character) {
        let found = [];
        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;

    }
    mul(){
        this.multiply++;
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell);

        if(newCell && this.multiply >= 5){
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 5;
            let newGrass = new Mouse(newX, newY);
            mouseArr.push(newGrass);
            this.multiply = 0;
        }
    }
}