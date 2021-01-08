(function() {
	let button = document.querySelector('button');
	button.addEventListener('click', handleClick);
})();

function handleClick() {
	let exampleArray = [ 1, 2, 3, 4, 'Muharabi', [ 'Babilonia', 'Roma' ] ];
	console.log(exampleArray);

	let outputs = document.querySelectorAll('output');

	outputs[0].textContent = JSON.stringify(exampleArray.slice(1, 3));
	// Sort modifica el array oririnal
	outputs[1].textContent = JSON.stringify(exampleArray.sort());
	// Splice will return the deleted items, and the original array will be modified
	outputs[2].textContent = JSON.stringify([ ...exampleArray ].splice(0, 4, 'Alejandro', [ 'Macedonia', 'Egipto' ]));
	outputs[3].textContent = JSON.stringify(exampleArray.toString());
	// Unshift adds an element and returns the length of the array
	outputs[4].textContent = JSON.stringify(exampleArray.unshift(0));
	outputs[5].textContent = JSON.stringify(exampleArray.valueOf());
	outputs[6].textContent = JSON.stringify(exampleArray.concat('Xerxes', [ [ 'Persia' ] ]));
	console.log(exampleArray);
	outputs[7].textContent = JSON.stringify(exampleArray.indexOf('Xerxes'));
	outputs[8].textContent = JSON.stringify(exampleArray.join('separator'));
	outputs[9].textContent = JSON.stringify(exampleArray.lastIndexOf(2));
	// Pop returns the lenght of the array
	outputs[10].textContent = JSON.stringify(exampleArray.pop());
	// Push returns the lenght of the new array
	outputs[11].textContent = JSON.stringify(exampleArray.push('Califato'));
	outputs[12].textContent = JSON.stringify(exampleArray.reverse());
	// Returns the shifted element
	outputs[13].textContent = JSON.stringify(exampleArray.shift());
}
