(function() {
	// Ejercicio 01

	let image = document.querySelector('img');
	let buttons = document.querySelectorAll('[type="submit"');
	buttons[0].addEventListener('click', function() {
		doblar(image);
	});

	// Ejercicio 02
})();

const doblar = (image) => {
	image.height *= 2;
	image.width *= 2;
};
