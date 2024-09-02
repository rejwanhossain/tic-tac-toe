let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newGameBtn")
let msgContainer = document.querySelector(".msgContainer")
let msg = document.querySelector("#msg")

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const drowGame = () => {
    msg.innerText = `Game was drow, Try again.`
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide")
}

let count = 1;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns) {
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2val != "" && pos3Val != "") {
                if(pos1Val === pos2val && pos2val === pos3Val) {
                    showWinner(pos1Val);
                } else if(pos1Val !== pos2val && pos2val !== pos3Val) {
                    drowGame();
                }
            }
    }
};



newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)


