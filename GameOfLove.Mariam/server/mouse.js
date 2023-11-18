let LivingCreature = require("./livingcreature")
module.exports =class Mouse extends LivingCreature{
    constructor(x,y){
       super(x,y)
        this.multiply = 0
        

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
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

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