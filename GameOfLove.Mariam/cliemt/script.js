let socket = io()
let side = 20;



function setup() {
       
        frameRate(5);

        createCanvas(40 * side, 40 * side);
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

function display() {
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

      
}
for (var i in grassArray) {
        grassArray[i].mul();
}


setInterval(
        function () {
        socket.on('send matrix', display)
        },1000
    )