(function() {
	let submit = document.querySelector('[type="submit"]');
	submit.addEventListener('click', function() {
		let number = parseInt(document.querySelector('[type="number"]').value);
		alert(damePrimos(number));
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
	let result = '';
	for (let i = 2; i < numero; i++) {
		if (esPrimo(i)) {
			result += `${i},`;
		}
	}
	let showResult = result.slice(0, result.length - 1);
	return showResult;
};
