globalThis.addEventListener('DOMContentLoaded', function() {
	let submit = document.querySelectorAll('[type="submit"]');

	// Ejercicio corto #1

	submit[0].addEventListener('click', function() {
		console.log('%c Ejercicio Corto #1A', 'font-size: 2rem; color: #fff');
		for (let i = 0; i <= 10; i++) {
			console.log(i);
		}
	});

	submit[1].addEventListener('click', function() {
		console.log('%c Ejercicio Corto #1B', 'font-size: 2rem; color: #fff');
		for (let i = 0; i <= 100; i += 2) {
			console.log(i);
		}
	});

	submit[2].addEventListener('click', function() {
		console.log('%c Ejercicio Corto #1C', 'font-size: 2rem; color: #fff');
		for (let i = 100; i >= 5; i -= 5) {
			console.log(i);
		}
	});

	// Ejercicio corto #2

	submit[3].addEventListener('click', function() {
		let numberN = parseInt(document.querySelector('#numberN').value);
		let numberM = parseInt(document.querySelector('#numberM').value);
		let max = Math.max(numberN, numberM);
		let min = Math.min(numberN, numberM);
		console.log('%c Ejercicio Corto #2', 'font-size: 2rem; color: #fff');
		while (min <= max) {
			console.log(min++);
		}
	});

	// Ejercicio corto #3

	submit[4].addEventListener('click', function() {
		let counter = 0;
		for (let i = 0; i <= 100; i++) {
			counter += i;
		}
		console.log('%c Ejercicio Corto #3', 'font-size: 2rem; color: #fff');
		console.log(counter);
	});
});
