const inputs = document.querySelectorAll('input');
let output = document.querySelector('output');
let [month1, year1, month2, year2, submit] = inputs;


submit.addEventListener('click', function(event) {
    date1 = (year1.value * 12) + parseInt(month1.value);
    date2 = (year2.value * 12) + parseInt(month2.value);

    yearsAndMonthDifference = Math.abs((date1 - date2) / 12)
    // Stripe decimals (months) from years 
    yearsDifference = Math.floor( yearsAndMonthDifference);
    // Take fraction of months and multiply by 12 to obtain the amount of months
    monthsDifference = Math.ceil(( yearsAndMonthDifference - Math.floor( yearsAndMonthDifference)) * 12)
    // Output
    output.textContent = `${yearsDifference} años y ${monthsDifference} meses`;
})
