let socket = io()
let side = 20;



function setup() {
       
        frameRate(5);

        createCanvas(40 * side, 40 * side);
 
}

function display(matrix) {
        
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                fill("green")
                               
                
                        } else if (matrix[y][x] == 2) {
                                fill("yellow")
               
                        } else if(matrix[y][x] == 3){
                                fill("blue")
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
                                fill("grey")
                        

                        }
                        rect(x * side, y * side, side, side)
                }
        }

      
}


setInterval(
        function () {
        socket.on('send matrix', display)
        },1000
    )