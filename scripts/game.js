let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}

// reset the game score to zero, clear playerMoves array, clear currentGame array
function newGame() {
    game.score = 0;
}

module.exports = {game, newGame};

