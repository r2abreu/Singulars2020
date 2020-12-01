const PI = 3.1416;
const parragraphs = document.querySelectorAll('p');
const radius = document.getElementById('radius');

const calculate = () => {
	parragraphs[0].firstElementChild.textContent = Math.round(2 * PI * radius.value);
	parragraphs[1].firstElementChild.textContent = Math.round(PI * radius.value ** 2);
	parragraphs[2].firstElementChild.textContent = Math.round(2 * radius.value);
};

radius.addEventListener('keyup', function(event) {
	console.log(event.target.value);
	calculate();
});
