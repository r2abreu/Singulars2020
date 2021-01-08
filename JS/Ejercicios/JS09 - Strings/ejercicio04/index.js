// IIFE

(function() {
	let buttons = document.querySelectorAll('button');
	buttons.forEach((button) => {
		button.addEventListener('click', handleClick);
	});
})();

function handleClick() {
	let string = document.querySelector('[type="text"]').value;
	let key = parseInt(document.querySelector('[type="number"]').value);

	// Encrypts or decrypts depending on the selected operation

	this.textContent === 'Cifrar' ? encryptString(string, key, 'cypher') : encryptString(string, key, 'decypher');
}

function encryptString(str, key, operation) {
	let encryptedString = '';
	for (let i = 0; i < str.length; i++) {
		if (operation === 'cypher') {
			encryptedString += String.fromCharCode(str.charCodeAt(i) + key);
		} else {
			encryptedString += String.fromCharCode(str.charCodeAt(i) - key);
		}
	}

	printResult(reverseStr(encryptedString));
}

// Prints the result in the output element

function printResult(result) {
	let output = document.querySelector('output');
	output.textContent = result;
}

// Reverse string

function reverseStr(str) {
	let newStr = '';
	for (let i = 1; i <= str.length; i++) {
		newStr += str[str.length - i];
	}
	return newStr;
}
