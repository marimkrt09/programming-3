class Fire{
    constructor(x,y){
        this.x = x
        this.y = y
        this.energy = 30
        this.directions = []

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
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 8
            this.x = newX
            this.y = newY
        }

        if (this.energy <= 0) {
            this.die()
        }
    }
    eat() {
        let foods = this.chooseCell(7)
        let food = random(foods)
        if (food) {
            this.energy++;

            let newX = food[0]
            let newY = food[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 8
           
            for (var i in waterArr) {
                if (newX == waterArr[i].x && newY == waterArr[i].y) {
                   
                   waterArr.splice(i, 1);
                    break;
                }
            }

            this.x = newX
            this.y = newY
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
        let newCell = random(emptyCell)

        if (newCell ) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 8

            let fire = new Fire(newX, newY)

           fireArr.push(fire)


        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in fireArr) {
            if (this.x == fireArr[i].x && this.y == fireArr[i].y) {
               fireArr.splice(i, 1);
                break;
            }
        }
    }
}