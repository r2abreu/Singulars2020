globalThis.addEventListener('DOMContentLoaded', function() {
	let submit = document.querySelector('[type="submit"]');
	submit.addEventListener('click', function() {
		printTable();
	});
});

const printTable = () => {
	let columns = parseInt(document.querySelector('#columns').value);
	let rows = parseInt(document.querySelector('#rows').value);
	let tbody = document.querySelector('tbody');

	let content = '';
	for (let i = 1; i <= rows; i++) {
		content += `<tr>`;
		for (let j = 1; j <= columns; j++) {
			content += `<td>fila ${i}, columna ${j}</td>`;
		}
		content += '</tr>';
	}
	tbody.innerHTML = content;
};
