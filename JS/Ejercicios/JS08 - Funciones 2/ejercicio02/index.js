var totalMatches = 0;
var totalWins = 0;
var totalLost = 0;
var totalDraw = 0;
var output = document.querySelector('output');

(function() {
	const figures = document.querySelectorAll('.picks figure');
	const button = document.querySelector('button');

	button.addEventListener('click', resetScore);

	figures.forEach((figure) => {
		figure.addEventListener('click', onFigureClick);
	});
})();

function onFigureClick() {
	let usersChoice = this.firstElementChild.title;
	let cpuChoice = getCpuChoice();
	let result = play(usersChoice, cpuChoice);
	handlePlay(result, usersChoice, cpuChoice);
}

function play(usersChoice, cpuChoice) {
	//Compare both choices and determine the result
	if (usersChoice === 'Piedra') {
		if (cpuChoice === 'Piedra') {
			return 'draw';
		} else if (cpuChoice === 'Tijera') {
			return 'won';
		} else {
			return 'lose';
		}
	} else if (usersChoice === 'Papel') {
		if (cpuChoice === 'Papel') {
			return 'draw';
		} else if (cpuChoice === 'Piedra') {
			return 'won';
		} else {
			return 'lose';
		}
	} else if (cpuChoice === 'Tijera') {
		return 'draw';
	} else if (cpuChoice === 'Papel') {
		return 'won';
	} else {
		return 'lose';
	}
}

// Determine CPU's choice
function getCpuChoice() {
	// Generate random number from 0-2
	let random = Math.floor(Math.random() * 3);
	switch (random) {
		case 0:
			return 'Papel';
		case 1:
			return 'Piedra';
		case 2:
			return 'Tijera';
		default:
			console.log('An error has occurred');
	}
}

// Handle the result of the play

function handlePlay(result, userChoice, cpuChoice) {
	// Update the display
	let userPickImage = document.querySelector('.display figure:first-of-type img');
	let cpuPickImage = document.querySelector('.display figure:last-of-type img');
	updateDisplay(userChoice, userPickImage);
	updateDisplay(cpuChoice, cpuPickImage);

	// Display the result

	displayResult(result);

	// Update score

	updateScore(result);
}

// Updates User and CPU picks image
function updateDisplay(choice, image) {
	if (choice === 'Papel') {
		image.src = './assets/paper.png';
	} else if (choice === 'Piedra') {
		image.src = './assets/rock.png';
	} else {
		image.src = './assets/scissors.png';
	}
}

// Show result message

function displayResult(result) {
	if (result === 'won') {
		output.textContent = 'Has ganado!';
		output.classList.remove('loser');
		output.classList.add('winner');
	} else if (result === 'lose') {
		output.textContent = 'Has perdido!';
		output.classList.remove('winner');
		output.classList.add('loser');
	} else {
		output.textContent = 'Has empatado!';
		output.classList.remove('winner', 'loser');
	}
}

// Update scoreboard with global variables

function updateScore(result) {
	if (result === 'won') {
		++totalWins;
	} else if (result === 'lose') {
		++totalLost;
	} else {
		++totalDraw;
	}

	++totalMatches;

	updateBoard(totalMatches, totalWins, totalLost, totalDraw);
}

function updateBoard(totalMatches, totalWins, totalLost, totalDraw) {
	let matches = document.querySelector('.scoreboard p:first-of-type span');
	let wins = document.querySelector('.scoreboard p:nth-of-type(2) span ');
	let lost = document.querySelector('.scoreboard p:nth-of-type(3) span');
	let draw = document.querySelector('.scoreboard p:last-of-type span');
	matches.textContent = totalMatches;
	wins.textContent = totalWins;
	lost.textContent = totalLost;
	draw.textContent = totalDraw;
}

function resetScore() {
	totalMatches = 0;
	totalWins = 0;
	totalLost = 0;
	totalDraw = 0;
	output.textContent = 'Juega de nuevo!';
	output.classList.remove('winner', 'loser');
	updateBoard(totalMatches, totalWins, totalLost, totalDraw);
}
