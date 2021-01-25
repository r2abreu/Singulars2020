(() => {
	generateGrid();
	let buttons = document.querySelectorAll('button');
	buttons.forEach((button) => {
		button.addEventListener('click', handleClick);
	});
})();

function handleClick(event) {
	changePictures(event.target.innerHTML.toLowerCase());
}

function generateGrid() {
	let section = document.querySelector('section');

	for (let i = 9; i > 0; i--) {
		let image = document.createElement('img');
		image.src = `./assets/okavango/${i}.jpg`;
		section.appendChild(image);
	}
}

function changePictures(term) {
	let images = document.images;

	for (let i = images.length, j = 1; i > 0; i--, j++) {
		console.log(i);
		images[i - 1].src = `./assets/${term}/${j}.jpg`;
		images[i - 1].classList.add('transitioned');

		// Remueve clase luego de que termine la animacion

		images[i - 1].addEventListener('animationend', () => {
			images[i - 1].classList.remove('transitioned');
		});
		console.log(images[i - 1].style);
	}
}
