globalThis.addEventListener('DOMContentLoaded', function() {
	let submit = document.querySelector('[type="submit"]');
	submit.addEventListener('click', function() {
		printTable();
	});
});

const printTable = () => {
	for (let i = 1; i < 10; i++) {
		let table = document.createElement('table');
		let tbody = document.createElement('tbody');
		let thead = document.createElement('thead');
		thead.innerHTML += `<th colspan="5">Tabla del ${i}</th>`;
		tbody.innerHTML += `<tr>`;
		for (let j = 0; j < 10; j++) {
			tbody.innerHTML += `
			<tr>
				<td>${i}</td><td>x</td><td>${j}</td><td>=</td><td>${i * j}</td>
			</tr>`;
		}
		table.appendChild(thead);
		table.appendChild(tbody);
		table.setAttribute('border', 1);
		let container = document.querySelector('article');
		container.appendChild(table);
	}
};
