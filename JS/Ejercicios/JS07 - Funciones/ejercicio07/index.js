(function() {
	let submit = document.querySelector('[type="submit"]');
	submit.addEventListener('click', function() {
		let number = parseInt(document.querySelector('[type="number"]').value);
		damePrimos(number);
		console.log('trigger');
	});
})();

const esPrimo = (numero) => {
	let isPrime = true;
	if (numero === 1) {
		return 'El número 1 no es primo ni compuesto.';
	} else {
		for (let i = 2; i < numero; i++) {
			if (numero % i === 0) {
				isPrime = false;
				break;
			}
		}
		return isPrime;
	}
};
const damePrimos = (numero) => {
	for (let i = 2; i < numero; i++) {
		if (esPrimo(i)) {
			console.log(i);
		}
	}
};
