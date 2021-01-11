(() => {
	let button = document.querySelector('button');
	button.addEventListener('click', handleClick);
})();

function handleClick() {
	let vector = document.querySelector('span').textContent.split(',');
	let outputs = document.querySelectorAll('output');
	let inputs = document.querySelectorAll('input');

	outputs[0].textContent = indiceDe(vector, inputs[0].value);
	outputs[1].textContent = ultimoIndiceDe(vector, inputs[1].value);
	outputs[2].textContent = JSON.stringify(concatenar(vector, inputs[2].value.split(',')));
}

function indiceDe(arr, element) {
	for (prop in arr) {
		if (arr[prop] === element) {
			return prop;
		}
	}
	return -1;
}

function ultimoIndiceDe(arr, element) {
	let occurences = [];
	for (prop in arr) {
		if (arr[prop] === element) {
			occurences.push(prop);
		}
	}

	return occurences.length === 0 ? -1 : handleMax(occurences);
}

function concatenar(arr1, arr2) {
	// Not mutating original array
	let newArr = [ ...arr1 ];
	for (ele of arr2) {
		newArr.push(ele);
	}

	return newArr;
}

function handleMax(arr) {
	let max = 0;
	for (let i = 0; i < arr.length; i++) {
		if (parseInt(arr[i]) > max) {
			max = arr[i];
		}
	}
	return max;
}
