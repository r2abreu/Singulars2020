let shouldRender = true;

(() => {
	let images = document.querySelectorAll('img');
	for (image of images) image.addEventListener('click', handleClick);
})();

function handleClick({ target }) {
	if (shouldRender) {
		let newFigure = document.createElement('figure');
		let newImg = document.createElement('img');
		newImg.src = target.src;
		newFigure.appendChild(newImg);

		newImg.addEventListener('click', ({ target }) => {
			target.parentElement.remove();
			shouldRender = !shouldRender;
		});

		Object.assign(newFigure.style, figureStyles);

		document.body.appendChild(newFigure);

		shouldRender = !shouldRender;
	}
}

const figureStyles = {
	position: 'fixed',
	top: '200px',
	heigh: '500px',
	width: '500px',
	border: '2px dashed #333'
};
