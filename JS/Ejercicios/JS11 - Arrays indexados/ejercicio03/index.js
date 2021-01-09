// IIFE

(function() {
	let form = document.querySelector('form');
	form.addEventListener('submit', handleSubmit);
})();

function handleSubmit(event) {
	event.preventDefault();
	generateDni(gatherData());
}

function gatherData() {
	let inputs = document.querySelectorAll('input:not([type="submit"]):not([id="dni"])');
	let user = {};

	for (ele of inputs) {
		user[ele.id] = ele.value;
	}

	user.fullDni = determineFullDni();

	return user;
}

function generateDni(user) {
	let container = document.createElement('div');
	let recipient = document.querySelector('main > div');
	container.classList.add('dni');

	let reader = new FileReader();
	let image = document.querySelector('[type="file"]').files[0];

	for (property in user) {
		if (property === 'image') {
			container.innerHTML += `<figure><img></img></figure>`;
		} else {
			container.innerHTML += `<output>${user[property]}</output>`;
		}
	}

	reader.addEventListener('load', function() {
		recipient.querySelector('img').src = reader.result;
	});

	if (image) {
		reader.readAsDataURL(image);
	}

	recipient.classList.add('generated');
	recipient.appendChild(container);
}

function determineFullDni() {
	let num = parseInt(document.querySelector('#dni').value);
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
	let fullDni = `${num}-${letters[module]}`;
	return fullDni;
}
