let checkBtn = document.querySelector('.checkBtn');

checkBtn.addEventListener('click', () => {
    let inputOne = parseFloat(document.querySelector('#inp1').value);
    let inputTwo = parseFloat(document.querySelector('#inp2').value);
    let operation = document.querySelector('#operation').value;
    let result = document.querySelector('.result');


    if (isNaN(inputOne) && isNaN(inputTwo)) {
        result.classList.add('alert-danger');
        result.innerHTML = "fill up both input fields with valid number";
    }
    else if (isNaN(inputOne)) {
        result.classList.add('alert-danger');
        result.innerHTML = "fill up input one with valid number";
    } else if (isNaN(inputTwo)) {
        result.classList.add('alert-danger');
        result.innerHTML = "fill up input two with valid number";
    }
    else {
        if (operation == 'Select Operation') {
            result.innerHTML = "Please select a valid operation";
        } else if (operation == '+') {
            result.classList.remove('alert-danger');
            result.innerHTML = inputOne + inputTwo;
        } else if (operation == '-') {
            result.classList.remove('alert-danger');
            result.innerHTML = inputOne - inputTwo;
        } else if (operation == '*') {
            result.classList.remove('alert-danger');
            result.innerHTML = inputOne * inputTwo;
        } else if (operation == '/') {
            if (isFinite(inputOne / inputTwo)) {
                result.classList.remove('alert-danger');
                result.innerHTML = inputOne / inputTwo;
            } else {
                result.classList.add('alert-danger');
                result.innerHTML = inputOne + " cannot be devided by 0";
            }
        }
    }

});