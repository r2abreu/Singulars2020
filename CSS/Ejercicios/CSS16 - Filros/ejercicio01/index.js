const image = document.querySelector('figure > img');
const elements = document.querySelectorAll('input');
const spans = document.querySelectorAll('span');
const color = document.querySelector('[type="color"]');

elements[0].unit = 'px';
elements[1].unit = '%';
elements[2].unit = '%';
elements[3].unit = '%';
elements[4].unit = 'deg';
elements[5].unit = '%';
elements[6].unit = '%';
elements[7].unit = '%';
elements[8].unit = '%';

elements.forEach((elem) => {
	elem.addEventListener('input', ({ target }) => {
		if (target.id === 'dropX' || target.id === 'dropY' || target.id === 'dropBlur' || target.id === 'dropColor') {
			dropShadow(target);
		} else {
			image.style.filter = `${target.id}(${target.value}${elem.unit})`;
			document.querySelector(
				`span[class*=${target.id}]`
			).textContent = `${target.id}(${target.value}${elem.unit})`;
		}
	});
});

const dropShadow = (target) => {
	let x = document.getElementById('dropX').value;
	let y = document.getElementById('dropY').value;
	let b = document.getElementById('dropBlur').value;
	let c = color.value;
	color.addEventListener('change', ({ target }) => {
		image.style.filter = `drop-shadow(${x}px ${y}px ${b}px ${target.value})`;
		spans.forEach((span) => {
			document.querySelector('h1').style.color = `${color.value}`;
			span.style.color = `${color.value}`;
		});
	});
	if (target.id === 'dropX') {
		x = target.value;
	} else if (target.id === 'dropY') {
		y = target.value;
	} else if (target.id === 'dropBlur') {
		b = target.value;
	} else {
	}

	document.getElementById('dropShadowLabel').textContent = `drop-shadow(${x}px ${y}px ${b}px ${c})`;
	image.style.filter = `drop-shadow(${x}px ${y}px ${b}px ${c})`;
};
