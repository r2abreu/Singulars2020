// IIFE

(function() {
	let button = document.querySelector('button');
	button.addEventListener('click', handleClick);
})();

function handleClick() {
	let name = document.querySelector('#name').value;
	let lastname1 = document.querySelector('#lastname1').value;
	let lastname2 = document.querySelector('#lastname2').value;

	transformStrings(name, lastname1, lastname2);
}

function printResult(name, lastname1, lastname2) {
	let output = document.querySelector('output');
	output.textContent = `${lastname1} ${lastname2}, ${name}`;
}

function transformStrings(name, lastname1, lastname2) {
	let firstChar = name[0].toUpperCase();
	let restOfSentence = name.slice(1).toLowerCase();

	let transformedName = `${firstChar}${restOfSentence}`;
	let transformedLastname1 = lastname1.toUpperCase();
	let transformedLastname2 = lastname2.toUpperCase();

	printResult(transformedName, transformedLastname1, transformedLastname2);
}
