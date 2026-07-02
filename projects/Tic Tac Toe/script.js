let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('#reset');
let newButton = document.querySelector('#newBtn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let turnO = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add('hide');
};


const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.textContent = '';
    });
}


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('Box clicked:');
        if(turnO){
            box.textContent = 'O';
            turnO = false;
        }
        else{
            box.textContent = 'X';
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


const showWinner = (winner) => {
    msg.innerText = `Player ${winner} is the winner!`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}


const checkWinner = () => {
    for (let combination of winningCombinations) {
        // console.log(combination[0], combination[1], combination[2]);
        // console.log(
        //     boxes[combination[0]].innerText,
        //     boxes[combination[1]].innerText,
        //     boxes[combination[2]].innerText
        // );

        let pos1Val = boxes[combination[0]].innerText;
        let pos2Val = boxes[combination[1]].innerText;
        let pos3Val = boxes[combination[2]].innerText;


        if (pos1Val !== '' && pos2Val !== '' && pos3Val !== '') {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {   
                // alert(`Player ${pos1Val} wins!`);
                console.log(`Player ${pos1Val} wins!`);
                showWinner(pos1Val);
            }

        }

    }

};


resetButton.addEventListener('click', resetGame);
newButton.addEventListener('click', resetGame);