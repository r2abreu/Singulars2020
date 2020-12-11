globalThis.addEventListener('DOMContentLoaded', function() {
	let submitButton = document.querySelector('[type="submit"]');
	let inputs = document.querySelectorAll('input:not([type="submit"]), select');
	inputs.forEach((input) => {
		input.addEventListener('keyup', function(event) {
			let output = document.querySelector('output');
			let test = obtainAndParseValues(inputs);
			validateValues(test) ? showScore(test, output) : promptError(output);
		});
	});
});

const validateValues = (test) => {
	for (let property in test) {
		if (!test[property]) {
			return false;
		}
	}
	return true;
};

const obtainAndParseValues = (inputs) => {
	let test = {};
	[ test.amountOfQuestions, test.questionValueDiscount, test.goodAnswersAmount, test.badAnswersAmount ] = inputs;
	for (let property in test) {
		test[property] = parseFloat(test[property].value);
	}
	return test;
};

const showScore = (test, output) => {
	const calculatedTest = calculateScore(test);
	let grade;
	if (test.totalScore >= 0 && test.totalScore < 4) {
		console.log('reprobado');
	}
	if (test.totalScore >= 5 && test.totalScore < 9) {
		console.log('Aprobado');
	}
	if (test.totalScore >= 9) {
		console.log('Excelente');
	}

	output.innerHTML = `
        <div>
            <p>Aciertos:</p><span>${test.goodAnswersAmount}</span>
            <p>Errores:</p><span>${test.badAnswersAmount}</span>
            <p>No contestadas:</p><span>${test.noAnswered}</span>
            <p>Nota sin descontar:</p><span>${test.noDiscountScore}</span>
            <p>Final sobre 10:</p><span>${test.totalScore}</span>
        </div>
    `;
};

const calculateScore = (test) => {
	let valueOfQuestion = 10 / test.amountOfQuestions;
	let scoreDiscount = test.badAnswersAmount * valueOfQuestion * test.questionValueDiscount;
	test.noAnswered = test.goodAnswersAmount + test.badAnswersAmount;
	test.noDiscountScore = test.goodAnswersAmount * valueOfQuestion;
	test.totalScore = test.noDiscountScore - scoreDiscount;
	return test;
};

const promptError = (elem) => {
	elem.innerHTML = 'Por favor, introduce correctamente todos los datos';
};
