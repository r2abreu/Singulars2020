// Create game class

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
};

// Stats object

const stats = {
	tokens: 10,
	plays: 0,
	win: 0,
	loss: 0,
	record: 10
};

// Create a new game

const newGame = new game(stats);

// Display stats

function display() {
	let outputs = document.querySelectorAll('output');
	outputs[0].textContent = newGame.tokens;
	outputs[1].textContent = newGame.plays;
	outputs[2].textContent = newGame.win;
	outputs[3].textContent = newGame.loss;
	outputs[4].textContent = newGame.record;
}

// Add listeners for the form

(() => {
	display();
	let form = document.querySelector('form');
	form.addEventListener('submit', (event) => {
		event.preventDefault();

		// Check if user has tokens to play, if not, throw error

		newGame.tokens <= 0 ? throwError('No tienes mas monedas, vuelve a empezar') : handlePlay(newGame);
	});
})();

// Handle play

function handlePlay(game) {
	let images = document.querySelectorAll('img');
	let dice1 = game.randomDice();
	let dice2 = game.randomDice();
	let radios = document.querySelectorAll('[type="radio"]');

	images[0].src = `./assets/${dice1}.svg`;
	images[1].src = `./assets/${dice2}.svg`;

	const tier = [ ...radios ].find((radio) => radio.checked);

	let playResult = dice1 + dice2;
	let bet = parseInt(document.querySelector('[type="number"]').value);

	game.plays++;

	if (tier.value === 'below') {
		playResult < 7 ? gameWon(game, bet) : gameLost(game, bet);
	} else {
		playResult > 7 ? gameWon(game, bet) : gameLost(game, bet);
	}

	display();
}

// Handle loss

function gameLost(game, bet) {
	game.loss++;
	game.tokens -= bet;
	game.tokens <= 0 ? alert('Te has quedado sin monedas, vuelve a empezar') : null;
}

// Handle win

function gameWon(game, bet) {
	game.win++;
	game.tokens += bet;
	game.record = game.tokens > game.record ? game.tokens : game.record;
	console.log(bet);
}

function throwError(str) {
	alert(`${str}`);
}
