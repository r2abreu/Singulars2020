let matrix = [];
let elementMatrix = [];

(() => {
	initialMatrix(matrix);
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
	let container = document.querySelector('.container');
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
	console.log(elementMatrix);
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
		if (ele[0] >= 0 && ele[1] >= 0 && (ele[0] <= 4 && ele[1] <= 4)) {
			elementMatrix[ele[0]][ele[1]].classList.toggle('light');
		}
	}

	elementMatrix[pickedRow][pickedCell].classList.toggle('light');
}
