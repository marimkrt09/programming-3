function matrixGenerator(matrixSize, grassCount,grassEaterCount,predatorCount,CatCount,mouseCount,water,fireCount) {
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

                if(matrix[y][x] == 0){
                        matrix[y][x] = 1 

                }
               
        }

       
       
        for (let i = 0; i < grassEaterCount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);
                if(matrix[y][x] == 0){
                        matrix[y][x] = 2
                }
                
        }

        for(let i = 0;i < predatorCount;i++){
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);
                if(matrix[y][x]==0){
                        matrix[y][x] = 3
                }

        }
        for(let i = 0;i < CatCount;i++){
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);
                if(matrix[y][x]==0){
                        matrix[y][x] = 4
                }

        }

        for(let i = 0;i < mouseCount;i++){
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);
                if(matrix[y][x]==0){
                        matrix[y][x] = 5
                }

        }
        for(let i = 0;i < water;i++){
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);
                if(matrix[y][x]==0){
                        matrix[y][x] = 7
                }

        }
        for(let i = 0;i < fireCount;i++){
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);
                if(matrix[y][x]==0){
                        matrix[y][x] = 8
                }

        }



        for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix.length; j++) {
                       if(i == j){
                        if(matrix[i][j]==0){
                                matrix[i][j] = 6
                        }
                       }
                        
                }
                
        }




        return matrix;
}

let matrix = matrixGenerator(40, 30,20,10,28,15,50,50);
let side = 20;

let grassArray = [];
var grassEaterArr = [];
let predatorArr = []
let CatArr = []
let mouseArr = []
let dogArr = []
let waterArr = []
let fireArr = []

function setup() {
        console.log("Hello world");
        frameRate(5);

        createCanvas(matrix[0].length * side, matrix.length * side);
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[0].length; x++) {
                        if (matrix[y][x] == 1) {
                                let gr = new Grass(x, y)
                                grassArray.push(gr);
                        }
                        
                        else if (matrix[y][x] == 2) {
                                let gre = new GrassEater(x, y)
                                grassEaterArr.push(gre);
                        }else if(matrix[y][x] == 3){
                                let pred = new Predator(x,y)
                                predatorArr.push(pred)

                        }else if (matrix[y][x] == 4){
                                let cat = new Cat(x,y)
                                CatArr.push(cat)

                        }else if (matrix[y][x] == 5){
                                let mouse = new Mouse(x,y)
                                mouseArr.push(mouse)

                        }else if (matrix[y][x] == 6){
                                let dog = new Dog(x,y)
                                dogArr.push(dog)

                        }else if (matrix[y][x] == 7){
                                let wat = new Water(x,y)
                               waterArr.push(wat)

                        }else if (matrix[y][x] == 8){
                                let fire = new Fire(x,y)
                              fireArr.push(fire)

                        }
                }
        }

}

function draw() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                fill("green")
                                rect(x * side, y * side, side, side);
                
                        } else if (matrix[y][x] == 2) {
                                fill('yellow')
                                rect(x * side, y * side, side, side);
               
                        } else if(matrix[y][x] == 3){
                                fill(143, 132, 254 )
                        } else if(matrix[y][x] == 4){
                                fill(151, 48, 26 )

                        }else if(matrix[y][x] == 5){
                                fill(246, 151, 62)

                        }else if(matrix[y][x] == 6){
                                fill(235, 53, 211)

                        }else if(matrix[y][x] == 7){
                                fill("aqua")

                        }else if(matrix[y][x] == 8){
                                fill("red")

                        }

                        else{
                                fill("gray")
                        

                        }
                        rect(x * side, y * side, side, side)
                }
        }

        for (var i in grassArray) {
                grassArray[i].mul();
        }

       
        for (let i in grassEaterArr) {
                grassEaterArr[i].eat();
               

        }

        for(let i in predatorArr){
                predatorArr[i].eat()

        }

        for(let i in CatArr){
                CatArr[i].eat()

        }

        for(let i in mouseArr){
               mouseArr[i].mul()

        }

        for(let i in dogArr){
                dogArr[i].protect()
 
         }
         for(let i in waterArr){
               waterArr[i].eat()
 
         }
         for(let i in fireArr){
               fireArr[i].eat()
  
          }
}

