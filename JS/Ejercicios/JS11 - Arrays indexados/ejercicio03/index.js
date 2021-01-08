// IIFE

(function() {
	let form = document.querySelector('form');
	form.addEventListener('submit', handleSubmit);
})();

function handleSubmit(event) {
	event.preventDefault();
	let input = parseInt(document.querySelector('[type="text"]').value);
	console.log(determineSuffix(input));
}

function determineSuffix(num) {
	let letters = [
		'T',
		'R',
		'W',
		'A',
		'G',
		'M',
		'Y',
		'F',
		'P',
		'D',
		'X',
		'B',
		'N',
		'J',
		'Z',
		'S',
		'Q',
		'V',
		'H',
		'L',
		'C',
		'K',
		'E'
	];
	let module = num % 23;
	let dni = `${num}-${letters[module]}`;

	return dni;
}
