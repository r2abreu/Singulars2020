

let game = class {
    constructor(stats) {
        this.tokens = stats.tokens;
        this.plays = stats.plays;
        this.win = stats.win;
        this.loss = stats.loss;
        this.record = stats.record;
    }

    randomDice() {
        return Math.floor(Math.random() * 6) + 1;
    }
}

const stats = {
    tokens: 10,
    plays: 0, 
    win: 0, 
    loss:0,
    record: 0,
}

const newGame = new game(stats);


(() => {
    let button = document.querySelector('button');
    button.addEventListener('click', () => {
        handlePlay(newGame);
    });
})();




function handlePlay(game) {
    let dice1 = game.randomDice();
    let dice2 = game.randomDice();
    let playResult = dice1 + dice2;
    let bet = parseInt(document.querySelector('[type="number"]').value);

    playResult > 7 ? gameWon() : gameLost();

    console.log(game, playResult)
}