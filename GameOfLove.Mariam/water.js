class Water {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 7;
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

    chooseCell(char1,char2) {
        let found = [];

        for (let i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i])
                }
            }
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char2) {
                    found.push(this.directions[i])
                }
            }
        }
        return found
    }
    move() {
        this.energy--

        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 7
            this.x = newX
            this.y = newY
        }

        if (this.energy <= 0) {
            this.die()
        }
    }

    eat() {
        let foods = this.chooseCell(8, 4)
        let food = random(foods)
        if (food) {

            this.energy++;
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[newY][newX] = 7

            for (var i in fireArr) {
                if (newX == fireArr[i].x && newY == fireArr[i].y) {
                    console.log("water fire---->>>>> 000000")

                    fireArr.splice(i, 1);
                    break;
                }
            }
            for (var i in CatArr) {
                if (newX == CatArr[i].x && newY == CatArr[i].y) {
                    console.log("water eat---->>>>> 9999")

                    CatArr.splice(i, 1);
                    break;
                }
            }


            this.x = newX
            this.y = newY

            if (this.energy >= 10) {
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

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 7

            let water = new Water(newX, newY)

            waterArr.push(water)


        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in waterArr) {
            if (this.x == waterArr[i].x && this.y == waterArr[i].y) {
                waterArr.splice(i, 1);
                break;
            }
        }
    }

}