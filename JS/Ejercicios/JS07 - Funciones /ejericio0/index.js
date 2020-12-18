// Procedimiento

(function inputGathering() {
	let divs = document.querySelectorAll('div');
	let submit = document.querySelector('[type="submit"]');
	let colorInput = document.querySelector('[type="color"]');
	let color;
	colorInput.addEventListener('change', function(event) {
		color = event.target.value;
	});

	divs.forEach((div) => {
		div.addEventListener('click', function(event) {
			let color = document.querySelector('#color').value;
			paint(event.target, color);
		});
	});

	submit.addEventListener('click', function(event) {
		paint(document.body, color);
	});
})();

const paint = (elem, color) => {
	console.log(document.body.style.backgroundColor, color);
	elem.style.backgroundColor = color;
};
