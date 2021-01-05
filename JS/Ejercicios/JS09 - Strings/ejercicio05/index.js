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
	let transformedName = `${stringDelimiter(name, ' ')}`;
	let transformedLastname1 = lastname1.toUpperCase();
	let transformedLastname2 = lastname2.toUpperCase();

	printResult(transformedName, transformedLastname1, transformedLastname2);
}

function stringDelimiter(str, delimiter) {
	let newStr = '';

	for (let i = 0; i < str.length; i++) {
		if (str[i - 1] === ' ' || str[i] === str[0]) {
			newStr += str[i].toUpperCase();
		} else if (str[i] === delimiter) {
			newStr += ' ';
		} else {
			newStr += str[i];
		}
	}

	return newStr;
}
