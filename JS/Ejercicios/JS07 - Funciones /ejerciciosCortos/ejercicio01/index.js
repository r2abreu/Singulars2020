(function() {
	// Ejercicio 01

	let num1 = document.querySelector('#number1').value;
	let num2 = document.querySelector('#number2').value;
	let submit = document.querySelectorAll('[type="submit"]');
	submit[0].addEventListener('click', function() {
		alert(minimo(parseInt(num1), parseInt(num2)));
	});
})();

// Ejercicio 01: Minimo

const minimo = (a, b) => {
	return a > b ? b : a;
};
