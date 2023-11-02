class Dog{
    constructor(x,y){
        this.x = x
        this.y = y
        this.energy = 20
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
    // getNewCoordinates() {
    //     this.directions = [
    //         [this.x - 1, this.y - 1],
    //         [this.x, this.y - 1],
    //         [this.x + 1, this.y - 1],
    //         [this.x - 1, this.y],
    //         [this.x + 1, this.y],
    //         [this.x - 1, this.y + 1],
    //         [this.x, this.y + 1],
    //         [this.x + 1, this.y + 1]
    //     ];
    // }

    chooseCell(character) {
        // this.getNewCoordinates();
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
            matrix[newY][newX] = 6
            this.x = newX
            this.y = newY
        }

        if (this.energy <= 0) {
            this.die()
        }
    }
    // eat() {
    //     let foods = this.chooseCell(4)
    //     let food = random(foods)
    //     if (food) {
    //         this.energy++;
    //         console.log(this.energy);
    
    //         matrix[this.y][this.x] = 0
    //         let newX = food[0]
    //         let newY = food[1]
    //         matrix[newY][newX] = 6
    //         this.x = newX
    //         this.y = newY
    //         for (let i in dogArr) {
    //             if (newX == dogArr[i].x && newY == dogArr[i].y) {
    //                 dogArr.splice(i, 1);
    //                 break;
    //             }
    //         }
           
    //         if (this.energy >= 13) {
    //             this.mul()
    //         }
    //     }
    //     else {
    //         this.move()
    //     }
    // }
    protect(){
        let mouses = this.chooseCell(5)
        let mouse = random(mouses)

        if(mouse){
            
            let newX = mouse[0]
            let newY = mouse[1]
            matrix[newY ][newX] = 6
            this.x = newX
            this.y = newY
 


        }

    }
    mul() {
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)

        if (newCell ) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 6

            let dog1 = new Dog(newX, newY)

            dogArr.push(dog1)


        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in dogArr) {
            if (this.x == dogArr[i].x && this.y == dogArr[i].y) {
                dogArr.splice(i, 1);
                break;
            }
        }
    }
}