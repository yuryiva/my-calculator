
let total = document.querySelector('.result');

let buttonSum = document.getElementById('sum');
let buttonSubstract = document.getElementById('substract');
let buttonDivide = document.getElementById('divide');
let buttonMultiply = document.getElementById('multiply');
let buttonEqual = document.getElementById('equalSign');
let buttonClear = document.getElementById('clearButton')
let buttonSqure = document.getElementById('square');
let buttonRoot = document.getElementById('root');


let value1 = Number(document.getElementById('firstValue').value);
let value2 = Number(document.getElementById('firstValue').value);

let result = 0;

let operator = '';

buttonSum.addEventListener('click', function () {
       operator = '+'
        
       })

buttonSubstract.addEventListener('click', function () {
        operator = '-';
        
})

buttonDivide.addEventListener('click', function () {
        operator = '/';
})

buttonMultiply.addEventListener('click', function () {
        operator = '*';
})

buttonSqure.addEventListener('click', function () {
        operator = '**'
})

buttonRoot.addEventListener('click', function() {
        operator = 'root';
})



buttonEqual.addEventListener('click', function() {
        value1 = Number(document.getElementById('firstValue').value);
        value2 = Number(document.getElementById('secondValue').value);

        switch (operator) {
                case '+':
                        result = value1 + value2;
                        break;
                case '-':
                        result = value1 - value2;
                        break;
                case '/':
                        result = value1 / value2;
                        break;
                case '*':
                        result = value1 * value2;
                        break;
                case '**':
                        result = value1 * value1 || value2 * value2;
                        break;
                case 'root':
                        result = Math.sqrt(value1) || Math.sqrt(value2);
                        break;
                default:
                        result = 'Please choose an operator';                       
        }
        total.innerHTML = result;
})

buttonClear.addEventListener('click', function () {
        
        document.getElementById('firstValue').value = '';
        document.getElementById('secondValue').value = '';
        
        total.innerHTML = '';
        operator = '';
        result = '';

})


// buttonSum.addEventListener('click', function () {
// let firstValue = Number(document.getElementById('firstValue').value);
// let secondValue = Number(document.getElementById('secondValue').value);
// const totalSum = firstValue + secondValue;
// result.innerHTML = totalSum;
// })

// buttonSubstract.addEventListener('click', function () {
// let firstValue = Number(document.getElementById('firstValue').value);
// let secondValue = Number(document.getElementById('secondValue').value);
// const totalSubstract = firstValue - secondValue;
// result.innerHTML = totalSubstract;

// })

// buttonDivide.addEventListener('click', function () {
// let firstValue = Number(document.getElementById('firstValue').value);
// let secondValue = Number(document.getElementById('secondValue').value);
// const totalDivide = firstValue / secondValue;
// result.innerHTML = totalDivide;
// })

// buttonMultiply.addEventListener('click', function () {
// let firstValue = Number(document.getElementById('firstValue').value);
// let secondValue = Number(document.getElementById('secondValue').value);
// const totalMultiply = firstValue * secondValue;
//  result.innerHTML = totalMultiply;
// })



