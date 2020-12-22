(function() {
	let images = document.querySelectorAll('img');
	console.log(images[0].width);

	images.forEach((image) => {
		image.addEventListener('mouseenter', function() {
			let width = this.width;
			this.width = width + width * 30 / 100;
			console.log(this.width);
		});
		image.addEventListener('mouseleave', function() {
			let width = this.width;
			this.width = width - width * 23.1 / 100;
			console.log(this.width);
		});

		image.addEventListener('click', function() {
			let color = document.querySelector('[type="color"]').value;
			colorea(this.parentElement, color);
			console.log(this.style.backgroundColor);
		});
	});
})();

const escalar = (elem, percentage) => {
	elem.style.transform = `scale(${percentage})`;
};

const colorea = (elem, color) => {
	elem.style.backgroundColor = color;
};
