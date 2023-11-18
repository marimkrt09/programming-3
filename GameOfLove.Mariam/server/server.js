let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let fs = require("fs");

app.use(express.static("../client"));


app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});
function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, CatCount, mouseCount, water, fireCount) {
    let matrix = [];
    for (let i = 0; i < matrixSize; i++) {
        matrix.push([]);
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0);
        }
    }

    for (let i = 0; i < grassCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1

        }

    }



    for (let i = 0; i < grassEaterCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
            console.log(matrix);
        }

    }

    for (let i = 0; i < predatorCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }

    }
    for (let i = 0; i < CatCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }

    }

    for (let i = 0; i < mouseCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }

    }
    for (let i = 0; i < water; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 7
        }

    }
    for (let i = 0; i < fireCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 8
        }

    }



    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (i == j) {
                if (matrix[i][j] == 0) {
                    matrix[i][j] = 6
                }
            }

        }

    }




    return matrix;
}

matrix = matrixGenerator(40, 30, 20, 10, 28, 15, 50, 50);

io.sockets.emit('send matrix', matrix)
grassArr = [];
grassEaterArr = [];
predatorArr = []
CatArr = []
mouseArr = []
dogArr = []
waterArr = []
fireArr = []

Grass = require("./grass")
GrassEater = require("./grassEater")
Predator = require("./predator")
Dog = require("./dog")
Cat = require("./cat")
Mouse = require("./mouse")
Water = require("./water")
Fire = require("./fire")

function createObject(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y,);
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                let grEater = new GrassEater(x, y,);
                grassEaterArr.push(grEater)

            } else if (matrix[y][x] = 3) {
                let pre = new Predator(x, y, 3)
                predatorArr.push(pre)



            } else if (matrix[y][x] = 4) {
                let cat = new Cat(x, y,)
                CatArr.push(cat)
            } else if (matrix[y][x] = 5) {
                let mous = new Mouse(x, y)
                mouseArr.push(mous)



            } else if (matrix[y][x] = 6) {
                let dog = new Dog(x, y)
                dogArr.push(dog)



            } else if (matrix[y][x] = 7) {
                let wat = new Water(x, y)
                waterArr.push(wat)



            } else if (matrix[y][x] = 8) {
                let fire = new Fire(x, y)
                fireArr.push(fire)



            }
        }
    }

    io.sockets.emit('send matrix', matrix)


}

function game() {

    for (let i in grassArr) {
        grassArr[i].mul()

    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat();


    }

    for (let i in predatorArr) {
        predatorArr[i].eat()

    }

    for (let i in CatArr) {
        catArr[i].eat()

    }

    for (let i in mouseArr) {
        mouseArr[i].mul()

    }

    for (let i in dogArr) {
        dogArr[i].protect()

    }
    for (let i in waterArr) {
        waterArr[i].eat()

    }
    for (let i in fireArr) {
        fireArr[i].eat()

    }

    io.sockets.emit("send matrix", matrix);
}
setInterval(game, 1000)

io.on('connection', function () {
    createObject(matrix)
})
