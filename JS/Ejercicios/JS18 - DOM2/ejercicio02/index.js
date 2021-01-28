(() => {
	let button = document.querySelector('button');
	button.addEventListener('click', handleClick);
})();

function handleClick() {
	let figure = document.createElement('figure');
	let image = document.createElement('img');
	let figcaption = document.createElement('figcaption');

	figure.classList.add('foto');
	image.src = 'https://i.imgur.com/NmP7SA4.jpg';
	figcaption.innerText = 'Bienvenido a mi Página Web';

	[ image, figcaption ].forEach((element) => {
		figure.appendChild(element);
	});

	document.body.appendChild(figure);
}
