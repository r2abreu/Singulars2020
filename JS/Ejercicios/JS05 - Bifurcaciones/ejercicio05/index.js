globalThis.addEventListener('DOMContentLoaded', function() {
	let checkboxes = document.querySelectorAll('[type="checkbox"]');
	let radius = document.querySelector('#radius');
	checkboxes.forEach((checkbox) => {
		checkbox.addEventListener('change', function(event) {
			cirCalcs(event, radius);
		});
	});
});

const cirCalcs = ({ target }, radius) => {
	const PI = Math.PI;
	const figure = {};
	figure.perimeter = Math.round(2 * PI * radius.value);
	figure.area = Math.round(PI * radius.value ** 2);
	figure.diameter = Math.round(2 * radius.value);
	showValue(figure, target);
};

const showValue = (figure, target) => {
	let [ perimeter, area, diameter ] = document.querySelectorAll('output');
	if (target.checked) {
		switch (target.value) {
			case 'perimeter':
				perimeter.textContent = figure.perimeter;
				break;
			case 'area':
				area.textContent = figure.area;
				break;
			case 'diameter':
				diameter.textContent = figure.diameter;
				break;
			default:
				console.log('error');
		}
	} else {
		switch (target.value) {
			case 'perimeter':
				perimeter.textContent = '';
				break;
			case 'area':
				area.textContent = '';
				break;
			case 'diameter':
				diameter.textContent = '';
				break;
			default:
				console.log('error');
		}
	}
};
