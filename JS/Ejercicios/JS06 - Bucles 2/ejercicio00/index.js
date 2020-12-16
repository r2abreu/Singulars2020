globalThis.addEventListener('DOMContentLoaded', function() {
	let submit = document.querySelector('[type="submit"]');
	submit.addEventListener('click', function() {
		printTable();
	});
});

const printTable = () => {
	for (let i = 1; i <= 9; i++) {
		for (let j = 0; j <= 10; j++) {
			console.log(`${i} x ${j} = ${i * j}`);
		}
	}
};
