let matrix = [];
let elementMatrix = [];

(() => {
	initialMatrix(matrix);
	let resetButton = document.querySelector('button');
	resetButton.addEventListener('click', handleReset);
})();

function initialMatrix(matrix) {
	for (let i = 0; i < 5; i++) {
		let row = [];
		matrix.push(row);
		for (let j = 0; j < 5; j++) {
			row.push(Math.floor(Math.random() * 2));
		}
	}

	updateTable(matrix);
}

function updateTable(matrix) {
	let container = document.createElement('div');
	document.querySelector('main').appendChild(container);
	container.classList.add('container');

	for (row of matrix) {
		let elementRowMatrix = [];
		elementMatrix.push(elementRowMatrix);
		for (cell of row) {
			let div = document.createElement('div');
			if (cell) div.classList.add('light');
			div.addEventListener('click', turnOnTheLights);
			container.appendChild(div);
			elementRowMatrix.push(div);
		}
	}
}

function turnOnTheLights() {
	let pickedRow;
	let pickedCell;

	for (row of elementMatrix) {
		if (row.indexOf(this) !== -1) {
			pickedRow = elementMatrix.indexOf(row);
			pickedCell = row.indexOf(this);
		}
	}

	let neighbours = [
		[ pickedRow - 1, pickedCell ],
		[ pickedRow + 1, pickedCell ],
		[ pickedRow, pickedCell - 1 ],
		[ pickedRow, pickedCell + 1 ]
	];

	for (ele of neighbours) {
		// Check that the  the neighbours are valid, meaning that they remain within the boundries of the board
		if (ele[0] >= 0 && ele[1] >= 0 && (ele[0] <= 4 && ele[1] <= 4)) {
			elementMatrix[ele[0]][ele[1]].classList.toggle('light');
		}
	}

	elementMatrix[pickedRow][pickedCell].classList.toggle('light');
	updateScore();
}

function updateScore() {
	let points = document.querySelector('span');
	points.textContent = parseInt(points.textContent) - 10;
}

function handleReset() {
	document.querySelector('span').textContent = '1000';
	document.querySelector('.container').remove();
	matrix.length = 0;
	initialMatrix(matrix);
}
