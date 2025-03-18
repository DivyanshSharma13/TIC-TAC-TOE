let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let messagecontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#win");

let var_1 = "x";
const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {

    if (var_1 == "X") {
      var_1 = "O";
      box.innerText = var_1;
    } else {
      var_1 = "X";
      box.innerText = var_1;
    }
    box.disabled = true;
    resetgame();
    checkWinner();
  });
});

function resetgame () {
    resetbtn.addEventListener("click", () => {
        boxes.forEach((box)=> {
            box.innerText = "";
            box.disabled = false;
            messagecontainer.classList.add("hide");
        })
    })
}

const showWinner = (winner) => {
    msg.innerText = `${winner} wins the game!`;
    msg.style.color = "black"
    messagecontainer.classList.remove("hide");
    boxes.forEach((box) => box.disabled = true);
}

function checkWinner() {
  for (let pattern of winpatterns) {
    let pos1 = boxes[pattern[0]].innerText
    let pos2 = boxes[pattern[1]].innerText
    let pos3 = boxes[pattern[2]].innerText
   
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1 === pos2 && pos2 === pos3){
            showWinner(pos1);
            return;
        }
    }
  }
};

