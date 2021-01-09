(function() {
	let button = document.querySelector('button');
	button.addEventListener('click', clickHandle);
})();

function clickHandle() {
	let input = parseInt(document.querySelector('input').value);
	let fibonacci = generateFibonacci(input);
	printResult(fibonacci);
}

function generateFibonacci(num) {
	let newArr = [ 0, 1 ];
	for (let i = 1; newArr.length !== num; i++) newArr.push(newArr[i] + newArr[i - 1]);
	return newArr;
}

function printResult(result) {
	let output = document.createElement('output');
	document.body.appendChild(output);
	output.textContent = result;
}
