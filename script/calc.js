let previousNumber = document.querySelector('.previous_number');
let currentNumber = document.querySelector('.current_number');
let equal = document.querySelector('.equal');
let buttonInputs = document.querySelectorAll('.inputs');
let clearALL = document.querySelector('.CE');
let clear = document.querySelector('.C');
let operators = {'+': true, '-': true, 'x': true, '/': true, '%': true};
let previous = '';
let current = '';
let previousValue = '';
let result = '';
buttonInputs.forEach(button => {
    button.addEventListener('click', display);
    equal.addEventListener('click', calculate);
    clearALL.addEventListener('click', clearAll);
    clear.addEventListener('click', Clear);
})
function display(e){
    let textDisplay = e.target.innerText;
    currentNumber.innerHTML += textDisplay;
    current = currentNumber.innerHTML;
    if(operators[textDisplay]){
        previous = current;
        previousNumber.innerHTML = previous;
        currentNumber.innerHTML = '';
    }
}
function clearAll(){
    previous = '';
    current = '';
    previousNumber.innerHTML = previous;
    currentNumber.innerHTML = current;
}
function Clear(){
    if(current > 0){
        current = current.slice(0, -1);
        currentNumber.innerHTML = current;
    }
}
function calculate(){
    let operator = previous[previous.length - 1];
    switch(operator){
        case '+':
            result = parseFloat(previous) + parseFloat(current);
            break;
        case '-':
            result = parseFloat(previous) - parseFloat(current);
            break;
        case 'x':
            result = parseFloat(previous) * parseFloat(current);
            break;
        case '/':
                if(parseFloat(current) == 0 || parseFloat(previousValue) == 0){
                    window.alert('It is not possible to divide by zero');
                    result = '';
                }else{
                    result = parseFloat(previous) / parseFloat(current);
                }  
            break;
        case '%':
            result = (parseFloat(previous) * parseFloat(current)) / 100
            break;    
    }
    let calcComplete = [previous, current];
    let joinValues = calcComplete.join('');
    previousNumber.innerHTML = joinValues;
    currentNumber.innerHTML = result;
    console.log(typeof(result));
}