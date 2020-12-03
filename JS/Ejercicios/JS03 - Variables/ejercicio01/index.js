// Ejercicio 01

radius.addEventListener('keyup', function(event) {
	cirCalcs();
});

const cirCalcs = () => {
	const PI = 3.1416;
	let parragraphs = document.querySelectorAll('p');
	let radius = document.getElementById('radius');
	parragraphs[0].firstElementChild.textContent = Math.round(2 * PI * radius.value);
	parragraphs[1].firstElementChild.textContent = Math.round(PI * radius.value ** 2);
	parragraphs[2].firstElementChild.textContent = Math.round(2 * radius.value);
};
