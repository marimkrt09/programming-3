let LivingCreature = require('./LivingCreature')
 module.exports =class Cat extends LivingCreature{
    constructor(x,y){
        super(x,y)
        this.energy = 22
        
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
    
    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
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
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY
        }

        if (this.energy <= 0) {
            this.die()
        }
    }

    eat() {
        let foods = this.chooseCell(5)
        let food = foods[Math.floor(Math.random() * foods.length)]
        if (food) {
            this.energy++;
    
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY
            for (let i in mouseArr) {
                if (newX == mouseArr[i].x && newY == mouseArr[i].y) {
                    mouseArr.splice(i, 1);
                    break;
                }
            }
           
            if (this.energy >= 32) {
                this.mul()
            }
        }
        else {
            this.move()
        }
    }
    mul() {
        let emptyCell = this.chooseCell(0)
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

        if (newCell ) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 4

            let cat = new Cat(newX, newY)

            CatArr.push(cat)


        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in CatArr) {
            if (this.x == CatArr[i].x && this.y == CatArr[i].y) {
                CatArr.splice(i, 1);
                break;
            }
        }
    }
}