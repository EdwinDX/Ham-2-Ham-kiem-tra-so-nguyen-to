function inputNumber() {
    let a = +document.getElementById('input_Num').value;
    document.getElementById('input_Num').value = '';
    return a;
}
function isPrime(value) {
    if (value < 2) {
        return false;
    }
    else if (value === 2) {
        return true;
    }
    else {
        for (let i = 2;i < value;i++) {
            if (value%i===0) {
                return false;
            }
        }
        return true;
    }
}
function checkIsPrime() {

    if (isPrime(inputNumber())) {
        document.getElementById('show').innerHTML = 'Số nhập vào là số nguyên tố';
    }
    else if (!isPrime(inputNumber())){
        document.getElementById('show').innerHTML = 'Số nhập vào không phải là số nguyên tố';
    }
}