// IIFE process, obtains elements and register event listener
(function() {
	var image = document.querySelector('img');
	var title = document.querySelector('output');
	title.textContent = 'Luna Nueva';
	image.addEventListener('click', function() {
		nextItem(image, title);
	});
})();
// Switch statement to change img properties based on the alt property value
var nextItem = function(image, title) {
	switch (image.alt) {
		case 'Luna Nueva':
			image.src = './assets/crescent-moon.webp';
			image.alt = 'Luna Cresciente';
			title.textContent = image.alt;
			break;
		case 'Luna Cresciente':
			image.src = './assets/first-quarter.webp';
			image.alt = 'Cuarto Cresciente';
			title.textContent = image.alt;
			break;
		case 'Cuarto Cresciente':
			image.src = './assets/waxing-gibbous.png';
			image.alt = 'Creciente Gibosa';
			title.textContent = image.alt;
			break;
		case 'Creciente Gibosa':
			image.src = './assets/full-moon.png';
			image.alt = 'Luna Llena';
			title.textContent = image.alt;
			break;
		case 'Luna Llena':
			image.src = './assets/wanning-gibbous.png';
			image.alt = 'Menguante Gibosa';
			title.textContent = image.alt;
			break;
		case 'Menguante Gibosa':
			image.src = './assets/third-quarter.png';
			image.alt = 'Cuarto Menguante';
			title.textContent = image.alt;
			break;
		case 'Cuarto Menguante':
			image.src = './assets/wanning-crescent.png';
			image.alt = 'Menguante';
			title.textContent = image.alt;
			break;
		case 'Menguante':
			image.src = './assets/new-moon.png';
			image.alt = 'Luna Nueva';
			title.textContent = image.alt;
			break;
	}
};
// END
