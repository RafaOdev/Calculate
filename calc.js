let previous_number = document.querySelector('.previous_number');
let current_number = document.querySelector('.current_number');
let buttons_inputs = document.querySelectorAll('.inputs');
let clean_number = document.querySelector('.clean');

let text_display = '';
let current = '';
let previous = '';
let operators = {
    '+': true,
    '-': true,
    'x': true,
    '/': true
};

buttons_inputs.forEach(button => {
    button.addEventListener('click', display);
    clean_number.addEventListener('click', clean_Number);
})

function display(e){
    text_display = e.target.innerText;
    current = current_number.innerHTML += text_display;

    if(operators[text_display]){
        previous = current;
        previous_number.innerHTML = previous.slice(0, -1);
        current_number.innerHTML = '';
    }

    if(text_display == '='){
        calculate();
    }else if(text_display == 'CE'){
        clean_screen();
    }
}

function clean_Number(){
    if(current > 0){
        current = current.slice(0, -1);
        current_number.innerHTML = current;
        console.log(current);
    }
}

function clean_screen(){
    previous_number.innerHTML = '';
    current_number.innerHTML = '';
}

function calculate(){
        let operator = previous[previous.length - 1];
        let result;
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
                    if(parseFloat(current) == 0 || parseFloat(previous) == 0){
                        window.alert('It is not possible to divide by zero');
                        result = '';
                    }else{
                        result = parseFloat(previous) / parseFloat(current);
                    }  
                break;   
        }

        previous_number.innerHTML = '';
        current_number.innerHTML = result;

        console.log(operator);
}