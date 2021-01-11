// IIFE

(() => {
    let buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', handleClick)
    })
})()

function handleClick() {
    let vector = document.querySelector('#sum').value.split(',')
    let output = document.querySelector('output');
    switch(this.textContent) {
        case 'Suma': 
            printResult(this.textContent,handleSum(vector), output);
            break
        case 'Maximo':
            printResult(this.textContent, handleMax(vector), output);
            break
        case 'Promedio':
            printResult(this.textContent, handleAverage(vector), output);
            break
        case 'Escalar':
            printResult(this.textContent, handleEscalar(vector), output);
            break
        case 'Escalar2':
            printResult(this.textContent, handleEscalar2(vector), output);
            break

        }
}

function handleSum(arr) {
    let sum = 0;
    for (ele of arr) {
        sum += parseInt(ele);
    }
    return sum
}

function handleMax(arr) {
    let max = 0;
    for(let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) > max) {
            max = arr[i];
        }     
    }
    return max;
}


function handleEscalar(arr) {
    let float = prompt('Ingresa el numero que deseas usar para escalar');
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= float;
    }

    return arr;
}

function handleAverage(arr) {
    let result = handleSum(arr) / arr.length;
    return result.toFixed(2);
}



function handleEscalar2(arr) {
    let float = prompt('Ingresa el numero que deseas usar para escalar');
    let newArr = [];

    for(ele of arr) {
        newArr.push(ele * float);
    }

    return newArr;
}
function printResult(str, result, output) {
    output.textContent = `${str}: ${result}`
 }

 