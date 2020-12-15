globalThis.addEventListener('DOMContentLoaded', event => {
    const inputs = document.querySelectorAll('input');
    const submit = document.querySelector('[type="submit"]');
    submit.addEventListener('click', function(event) {
        validateInputs(inputs) ? calculateEquation(inputs) : promptError()
    })
})

const validateInputs = (inputs) => {
    let [a,b,c] = inputs;
    if (!a.value) {
        return false
    }

    return true
}

const calculateEquation = (inputs) => {
   let a = inputs[0].value;
   let b = inputs[1].value;
   let c = inputs[2].value;

   let x1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
   console.log(-Math.abs(b) ,b**2 - 4 * a * c)
   let x2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);

   console.log({x1, x2})
}

const promptError = () => {
    console.log('Error')
}