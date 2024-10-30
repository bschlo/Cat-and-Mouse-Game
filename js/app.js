let board = ""
let mouseTracker = []
let winner = ""
let loser = ""
let mouse = 'mouse'
let cat = 'cat'
let mousePosition = ''
let catPosition =''


const squareEls = document.querySelectorAll(".sqr")
const messageEl = document.querySelector("#message")
const resetBtn = document.querySelector("#reset")
const mouseTally = document.querySelector("#mouse-tally")
const catTally = document.querySelector("#cat-tally")



const init = () => {
    board = ['','','','','','','','','']
    winner = false
    loser = false
    mouse = board[0]
    cat = board[8]
    render ()
}

const render = () => {
    updateBoard()
    updateMessage()
    updateTally()
}

const updateBoard = () => {
    board.forEach((box, index) => {
      const square = squareEls[index];
  
      if (box === "cat") {
        square.innerText = "cat";
      } else if (box === "mouse") {
        square.innerText = "mouse";
      } else {
        square.innerText = "";
      }
    });
  };

const updateMessage = () => {
    if (winner === false && loser === true) {
        messageEl.innerText = `The cat gotcha`
    } else if (winner === true) {
        messageEl.innerText = `You win`
    } else if (winner === false && loser === false) {
       messageEl.innerText = `Play your turn`
    }
}

const updateTally = () => {
    if (winner === true) {
        mouseTally.innerText + 1
    }
    else if (loser === true) {
        catTally.innerText += 1
    }
}

init ()

const winningCombo = [0,1,2,3,4,5,6,7,8]

const handleClick = (event) => {
    const squareIndex = event.target.id
    const mousePlacedPiece = mousePlacePiece(squareIndex)
    
    updateMouseTracker(mousePlacedPiece)
    catPlacePiece(squareIndex)
    checkIfWinner()
    render()
}

const mousePlacePiece = (index) => {
    mousePosition = squareEls[index]
    mousePosition.innerText = 'mouse'
    return mousePosition
}

const updateMouseTracker = (currentPosition) => {
    mouseTracker.push(parseInt(currentPosition.id))
}

const catPlacePiece = (index) => [
    catPosition = Math.floor(Math.random()* 9)
]

const checkIfWinner = () => {
    
    if (mouseTracker.every(num => winningCombo.includes(num) && mouseTracker.length === 9)) {
        winner = true
        loser = false
    } else if (catPosition === mousePosition) {
        winner = false
        loser = true
    }
}

squareEls.forEach((square) => [
    square.addEventListener ('click', handleClick)
])