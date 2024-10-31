let board = []
let mouseTracker = []
let winner = false
let loser = false
let mouse = '🐁'
let cat = '🐈'
let cheese = '🧀'
let mousePosition = ''
let catPosition =''
let mouseScore = 0
let catScore = 0


let gameOver = false


const squareEls = document.querySelectorAll(".sqr")
const messageEl = document.querySelector("#message")
const resetBtn = document.querySelector("#reset")
const mouseTally = document.querySelector("#mouse-tally")
const catTally = document.querySelector("#cat-tally")



const init = () => {
    board = [cheese, cheese,cheese,cheese,cheese,cheese,cheese,cheese,cheese]
    winner = false
    loser = false
    mouseTracker =[]
    render ()
}

const render = () => {
    updateBoard()
    updateMessage()
}

const updateBoard = () => {
    board.forEach((box, index) => {
      const square = squareEls[index];
  
      if (box === cat) {
        square.innerText = cat;
      } else if (box === mouse) {
        square.innerText = mouse;
      } else if (box === cheese) {
        square.innerText = cheese;
      } else {
        square.innerText = ''
      }
    });
  };

const updateMessage = () => {
    if (winner === false && loser === true && gameOver === true) {
        messageEl.innerText = `THE CAT GOT YOU - YOU'RE DEAD. Click the reset button to start a new game.`
    } else if (winner === true && gameOver === true) {
        messageEl.innerText = `CONGRATS YOU GOT ALL THE CHEESE`
        winner = false
    } else if (winner === false && loser === false) {
       messageEl.innerText = `Collect All The Cheese To Win`
    }
}

init ()

const winningCombo = [0,1,2,3,4,5,6,7,8]

const handleClick = (event) => {
    if (gameOver === true) {
        return
    }
    board.innerText = ''
    const squareIndex = parseInt(event.target.id)
    mousePlacePiece(squareIndex)
    updateMouseTracker(squareIndex)
    catPlacePiece()
    checkIfWinner()
    render()
}

const catPlacePiece = () => {
    const previousCatPosition = board.indexOf (cat)
    if (previousCatPosition !== -1) {
        board[previousCatPosition] = ''
    }
    newCatPosition = Math.floor(Math.random() * 9)
    catPosition = newCatPosition
    board[catPosition] = cat
    
}

const mousePlacePiece = (index) => {
    const previousMousePosition = board.indexOf(mouse);
    if (previousMousePosition !== -1) {
        board[previousMousePosition] = '';
    }
    board[index] = mouse;
    mousePosition = index;
}

const updateMouseTracker = (currentPosition) => {
    if (!mouseTracker.includes(currentPosition)) { 
        mouseTracker.push(parseInt(currentPosition))
    }
}

const checkIfWinner = () => {

if (!winner) {
    if (mouseTracker.every(num => winningCombo.includes(num) && mouseTracker.length === 9)) {
        winner = true
        loser = false
        mouseScore += 1
        mouseTally.innerText = `Mouse Tally: ${mouseScore}`
        gameOver = true

    } else if (catPosition === mousePosition) {
        winner = false
        loser = true
        catScore += 1
        catTally.innerText = `Cat Tally: ${catScore}`
        gameOver = true
    } 
}
}

squareEls.forEach((square) => {
  square.addEventListener("click", handleClick);
});

const reset = () => {
    resetBtn.addEventListener('click', () => {

    gameOver = false
    loser = false
    winner = false
    mouseTracker = []
    init()
})
}

reset()