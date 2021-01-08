// IIFE

(function() {
	let button = document.querySelector('button');
	button.addEventListener('click', handleClick);
})();

function handleClick() {
	let output = document.querySelector('output');
	generateArray();
}

function generateArray() {
	let newArr = [];
	for (let i = 1; i <= 1000; i++) newArr.push(7 * i);
	return JSON.stringify(newArr);
}
