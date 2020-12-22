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

	// Ejercicio 03

	// Descuento

	submit[4].addEventListener('click', function() {
		let price = parseInt(document.querySelector('#price').value);
		let discount = parseInt(document.querySelector('#discount').value);
		alert(descuento(price, discount));
	});

	// Ejercicio04

	submit[5].addEventListener('click', function() {
		let cateto1 = parseInt(document.querySelector('#cateto1').value);
		let cateto2 = parseInt(document.querySelector('#cateto2').value);
		alert(hipotenusa(cateto1, cateto2).toFixed(2));
	});

	// Ejercicio05

	submit[6].addEventListener('click', function() {
		let number = parseInt(document.querySelector('#number').value);
		alert(esPrimo(number));
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

// Ejercicio 03: Descuento

const descuento = (precio, descuento) => {
	if (precio < 0) return NaN;

	if (descuento < 0 || descuento > 100) return NaN;

	return precio - precio * descuento / 100;
};

// Ejercicio 04: Hipotenusa

const hipotenusa = (cat1, cat2) => {
	return Math.sqrt(cat1 ** 2 + cat2 ** 2);
};

// Ejercicio 05: Primos

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
		return isPrime ? 'Primo.' : 'No primo.';
	}
};
