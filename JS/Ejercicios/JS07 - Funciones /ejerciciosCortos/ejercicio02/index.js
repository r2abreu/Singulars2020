(function() {
	// Ejercicio 01

	let num1 = document.querySelector('#number1').value;
	let num2 = document.querySelector('#number2').value;
	let submit = document.querySelectorAll('[type="submit"]');
	submit[0].addEventListener('click', function() {
		alert(minimo(parseInt(num1), parseInt(num2)));
	});
	// Ejercicio 02

	// Triangulo
	submit[1].addEventListener('click', function() {
		let base = document.querySelector('#base').value;
		let height = document.querySelector('#height').value;
		alert(areaTriangulo(base, height));
	});

	// Rectangulo

	submit[2].addEventListener('click', function() {
		let rectBase = document.querySelector('#rectBase').value;
		let rectHeight = document.querySelector('#rectHeight').value;
		alert(areaRectangulo(rectBase, rectHeight));
	});

	// Circulo

	submit[3].addEventListener('click', function() {
		let radio = document.querySelector('#radio').value;
		alert(areaCirculo(radio).toFixed(2));
	});
})();

// Ejercicio 01: Minimo

const minimo = (a, b) => {
	return a > b ? b : a;
};

// Ejercicio 02: Areas

const areaTriangulo = (b, h) => {
	return b * h / 2;
};

const areaRectangulo = (b, h) => {
	return b * h;
};

const areaCirculo = (r) => {
	return Math.PI * Math.pow(r, 2);
};
