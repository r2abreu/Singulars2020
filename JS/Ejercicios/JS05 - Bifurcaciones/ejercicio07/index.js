globalThis.addEventListener('DOMContentLoaded', function() {
	var inputs = document.querySelectorAll('input:not([type="submit"]), select');
	inputs.forEach((input) => {
		input.addEventListener('keyup', function(event) {
			var output = document.querySelector('.output');
			var test = obtainAndParseValues(inputs);
			showScore(test, output);
			// validateValues(test) ? showScore(test, output) : promptError(output);
		});
	});
});

const validateValues = (test) => {
	for (var property in test) {
		if (!test[property]) {
			return false;
		}
	}
	return true;
};

const obtainAndParseValues = (inputs) => {
	var test = {};
	[ test.amountOfQuestions, test.questionValueDiscount, test.goodAnswersAmount, test.badAnswersAmount ] = inputs;
	for (var property in test) {
		test[property] = parseFloat(test[property].value);
	}
	return test;
};

const showScore = (test, output) => {
	calculateScore(test);
	var grade;
	if (test.totalScore < 5) {
		grade = 'Reprobado';
	}
	if (test.totalScore >= 5 && test.totalScore < 9) {
		grade = 'Aprobado';
	}
	if (test.totalScore >= 9) {
		grade = 'Excelente';
	}

	output.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Aciertos</th>
                    <th>Errores</th>
                    <th>No contestadas</th>
                    <th>Nota sin descontar</th>
                    <th>Final sobre 10</th>
                </tr>
            </thead>
            <tbody>
                <td>${test.goodAnswersAmount}</td>
                <td>${test.badAnswersAmount}</td>
                <td>${test.noAnswered}</td>
                <td>${test.noDiscountScore}</td>
                <td>${test.totalScore}</td>
            </tbody>
        </table>
        <output>${grade}</output>
    `;
};

const calculateScore = (test) => {
	var valueOfQuestion = 10 / test.amountOfQuestions;
	var scoreDiscount = test.badAnswersAmount * (valueOfQuestion * test.questionValueDiscount);
	test.noAnswered = test.amountOfQuestions - (test.goodAnswersAmount + test.badAnswersAmount);
	test.noDiscountScore = test.goodAnswersAmount * valueOfQuestion;
	test.totalScore = test.noDiscountScore - scoreDiscount;
	return test;
};

const promptError = (elem) => {
	elem.innerHTML = 'Por favor, introduce correctamente todos los datos';
};
