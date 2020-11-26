const modal = document.querySelector('.modal');
const modalFigure = document.querySelector('.modal figure');
const images = document.getElementsByTagName('img');

[ ...images ].forEach((image) => {
	image.addEventListener('click', (event) => {
		modal.style.display = 'block';
		modalFigure.firstElementChild.src = event.target.src;
		console.log(modal.firstElementChild);
	});
});

modal.addEventListener('click', (event) => {
	modal.style.display = 'none';
});
