let restartButton = document.createElement('button');
let socore = 0;
let toWin = 0;

document.getElementById("play").addEventListener("click", function game(){
    const scoreDispay = document.getElementById("score");
    const width = 28; //28*28 = 784 squares
    const grid = document.querySelector('.grid');
    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 4, 4, 1, 3, 1, 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 4, 4, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1,
        1, 3, 1, 4, 4, 1, 0, 0, 0, 0, 0, 0, 1, 4, 4, 4, 4, 4, 1, 0, 0, 0, 1, 4, 1, 0, 1, 4,
        1, 0, 1, 4, 4, 1, 0, 1, 1, 0, 1, 0, 1, 4, 4, 4, 4, 4, 1, 0, 1, 0, 1, 4, 1, 0, 1, 4,
        1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1,
        
    ]
})