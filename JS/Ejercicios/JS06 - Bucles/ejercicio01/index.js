selectInputs();

function factorial(n) {
	let result = n;

	if (n === 0) {
		return 1;
	}

	while (n > 1) {
		n--;
		result *= n;
	}

	/*
        Iteraciones: 
        n = 4.  result = 5 * 4 = 20;
		n = 3.  result = 20 * 3 = 60;
		n = 2.  result = 60 * 2 = 120;
    */

	return result;

	/* 
        Con recursion: 

        if (n === 0) {
            return 1;
        } else {
            return factorial(n-1) * n
        }

    */
}

function selectInputs() {
	let submit = document.querySelector('[type="submit"]');
	submit.addEventListener('click', function() {
		let number = parseInt(document.querySelector('#number').value);
		showResult(number);
	});
}

function showResult(number) {
	let output = document.querySelector('output');
	output.textContent = factorial(number).toLocaleString();
}
