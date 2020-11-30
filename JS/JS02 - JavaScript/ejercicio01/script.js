// Ejercicio 01
const select = document.querySelector('select');
select.addEventListener('click', function(event) {
	document.body.style.fontSize = this.value;
	console.log(this.value);
});

// Ejercicio 02

const inputBaja = document.querySelector('[value="baja"]');
const form = document.querySelector('form');

inputBaja.addEventListener('click', function(event) {
	if (window.confirm('Seguro?')) {
		form.submit();
	}
});

// Ejercicio 03

const image = document.querySelector('img');
image.addEventListener('mouseenter', function(event) {
	this.src = './on.svg';
});
image.addEventListener('mouseleave', function(event) {
	this.src = './off.svg';
});

const button = document.querySelector('button');
button.addEventListener('click', function(event) {
	this.previousElementSibling.textContent = image.alt;
});

// Ejercicio 04

const span = document.querySelector('span');

const rgbValue = () => {
	return Math.floor(Math.random() * 256);
};

const colorIt = () => {
	span.style.backgroundColor = `rgb(${rgbValue()},${rgbValue()}, ${rgbValue()})`;
};

setInterval(colorIt, 500);

// Ejercicio 05

const name = document.querySelector('#name');
const repeatName = document.querySelector('#repeatName');
const age = document.querySelector('#age');
const secondForm = document.querySelectorAll('form')[1];
const submitInput = secondForm.querySelector('[type="button"]');

submitInput.addEventListener('click', function(event) {
	if (name.value !== repeatName.value) {
		window.alert('Los nombres no coinciden');
	} else {
		secondForm.submit();
	}
});

// Ejercicio 06

const calculateButton = document.getElementById('calculate');
const output = document.querySelector('#result');

const calculateDistance = () => {
	const initial = document.getElementById('initial').value;
	const velocity = document.getElementById('velocity').value;
	const time = document.getElementById('time').value;
	let result = initial + velocity * time;
	output.textContent = result;
};

calculateButton.addEventListener('click', function(event) {
	calculateDistance();
});

// Ejercicio 07

window.alert('Se esta cargando la web');
window.confirm('Seguira haciendo cosas digas lo que digas');
window.prompt('Si tienes alguna queja escribela aqui');
