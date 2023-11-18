let LivingCreature = require('./livingCreature')
module.exports =class Predator extends LivingCreature{
    constructor(x,y){
      super(x,y)
        this.energy = 10
       


    }
    getNewCoordinates() {
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

chooseCell(char1,char2,char3,) {
    this.getNewCoordinates();
   let found = [];
    for (var i in this.directions) {
        var x = this.directions[i][0];
        var y = this.directions[i][1];
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == char1) {
                found.push(this.directions[i]);
            }
            
            if (matrix[y][x] == char2) {
                found.push(this.directions[i]);
            }
            if (matrix[y][x] == char3) {
                found.push(this.directions[i]);
            } 
           
            
        }

    }
    return found;
}

move() {
    this.energy--
    let emptyCells = this.chooseCell(0)
    let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
    if (newCell) {
        let newX = newCell[0]
        let newY = newCell[1]
        matrix[this.y][this.x] = 0
        matrix[newY][newX] = 3
        this.x = newX
        this.y = newY
    }

    if (this.energy <= 0) {
        this.die()
    }
}
mul() {
    let emptyCell = this.chooseCell(0)
    let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

    if (newCell ) {
        let newX = newCell[0]
        let newY = newCell[1]

        matrix[newY][newX] = 3

        let pred = new Predator(newX, newY)

       predatorArr.push(pred)


    }
}
eat() {
    let foods = this.chooseCell(1,2,4,5)
    let food =foods[Math.floor(Math.random() * foods.length)]
    if (food) {
        this.energy++;

        matrix[this.y][this.x] = 0
        let newX = food[0]
        let newY = food[1]
        matrix[newY][newX] = 3
        this.x = newX
        this.y = newY
        for (let i in grassArr) {
            if (newX == grassArr[i].x && newY == grassArr[i].y) {
                grassArr.splice(i, 1);
                break;
            }
        }
        for (let i in grassEaterArr) {
            if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
        for (let i in CatArr) {
            if (newX == CatArr[i].x && newY == CatArr[i].y) {
               CatArr.splice(i, 1);
                break;
            }
        }
        for (let i in mouseArr) {
            if (newX == mouseArr[i].x && newY == mouseArr[i].y) {
               mouseArr.splice(i, 1);
                break;
            }
        }
        if (this.energy >= 15) {
            this.mul()
        }
    }
    else {
        this.move()
    }
}
die() {
    matrix[this.y][this.x] = 0;
    for (var i in predatorArr) {
        if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
            predatorArr.splice(i, 1);
            break;
        }
    }
}

}