## Project Choice: 

Cat and Mouse game

## Project Description:

My app is called Cat and Mouse. The object of the game is for the user (mouse) to touch all 9 squares before getting caught by the computer (cat). The cat and mouse can move to any box. You must outsmart the cat in order to win.

## Rules:

1. The mouse and cat start on opposite corners of a 3 x 3 board.
2. From there, the user can choose to move to any square. The computer will simultaneously choose a direction to move in. 
3. From the next position, the user must choose a position to move in. 
4. In order to win, the user must touch all 9 squares. 
5. If the cat and mouse are on the same position, then the cat wins and the user loses. 


## Wire Frames:

![Alt text](<Screenshot 2024-10-28 at 4.19.08 PM.png>)

![Alt text](<Screenshot 2024-10-28 at 4.19.15 PM.png>)


## User Stories: 

MVP Goals

- As a player, I want my game to recognize that all 9 squares have been touched so the player can know they won.
- As a player, I want my game to recognize when the cat and mouse are on the same position so the player can know they lost.
- As a player, I would like to see the tally of how many wins or losses I have.
- As a player, I would like to reset the board after I have won or lost. 
- As a player, I would like to know when I click a position on the board, the mouse is on shown on that position

Stretch Goals

- As a player, I would like to see a picture of cat or mouse displayed on the page.
- As a player, I would like to level up each time I win. Each level will include a bigger board and add another cat.
- As a player, I would like to hear victory noise if I win or a loser noise if I lose.
- As a player, I would like to add a multiplayer feature which one player can choose if they would like to be the cat or the mouse.

## Pseudocode:


Variables:

- Establish board with mouse and cat in their starting position 
- Establish mouseTracker as empty array
- Establish winner as empty.
- Establish loser as empty
- Establish Mouse as ‘mouse’
- Establish Cat as ‘cat’


Cached elements:

- Set squareEl equal to html square class.
- Set messageEl equal to html  id.
- Set resetBtn equal to html  id.
- Set mouseTally equal to html id
- Set catTally equal to html id

Functions:

- Create init function which loads the game:
    - Set board equal to an array with 9 empty strings.
    - Set winner equal to false.
    - Set loser equal to false
    - render

- Create updateBoard function which updates the board:
    - For each (box, index) 
	    - Establish square equal to squareEl [index]
        - If box is equal to ‘cat’ then square’s innertext is equal to ‘cat’
        - Else if box is equal to ‘mouse’ then square’s innertext is equal to ‘mouse’
        - Else square’s innertext is equal to an empty string

- Create updateMessage function which updates the message when game is over:
    - If winner is false and loser is false then display message ‘Pick a square’
    - If winner is false and loser is true then display message ‘You Lose’
    - If winner is true and loser is false then display message ‘You Win’

- Create updateTally function which updates the tally when game is complete:
    - If winner is false and loser is true then add 1 to the cat tally
    - If winner is true and loser is true then add 1 to the mouse tally

- Establish render function calling the following functions:
    - updateBoard
    - updateMessage
    - updateTally

- Create a mousePlacePiece function which allows user to position their move 
    - mousePosition = square[index]
    - Call updateMouseTracker

- Create a catPlacePiece function which a computer generates a move for the cat
    - catPosition = math random a number which will output an position on the board

- Establish a winningCombination constant which holds the key to the winning board.
    - [0,1,2,3,4,5,6,7,8]

- Create updateMouseTracker function which updates the mouseTracker
    - If loser equals false & winner equals false
    - Add the clicked square index to the mouseTracker array

- Create checkForWinner function which checks for winner.
    - if winningCombination is equal to mouseTracker 
    - Winner equals true
    - Add one to mouse tally
    - Else if cat’s index is equal to mouse index, loser is equal to true.
    - Add one to cat tracker.
    

- Create a handle click function which includes the following functions:
    - mousePlacepiece
    - catPlacePiece
    - checkForWinner
    - updateMouseTracker
    - render

				

Event Listeners:

- Access square element from HTML and for each square clicked, add event listener to the square element. 

- Access reset element from html and click event passing through the init function

## Timeline: 

| Day        |   | Task                                                            | 
|------------|---|-----------------------------------------------------------------|
| Monday     |   | Create and present proposal. Get started on HTML                                                                               |
| Tuesday    |   | Create basic game board and style. Start implementing JavaScript variables and event listeners. Establish a key for naming.                                   |          
| Wednesday  |   | Work through functions and ensure they work within the game.                               |          
| Thursday   |   | Continue to work on JavaScript and check for bugs in the code.                                 |          
| Friday     |   | Style the project.                                                   |          
| Monday     |   | Finalize MVP                                                    |          
| Tuesday    |   | Work on stretch goals                                          |          
| Wednesday  |   | Work on icebox items if applicable                              |
| Thursday   |   | Presentation Day!                                               


