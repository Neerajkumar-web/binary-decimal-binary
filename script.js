function convertToBinary() {
    const inputNumber = document.getElementById('inputNumber').value;

    if (inputNumber === '') {
        alert('Please enter a number.');
        return;
    }

    const decimalNumber = parseInt(inputNumber, 10);

    if (isNaN(decimalNumber)) {
        alert('Invalid input. Please enter a valid number.');
        return;
    }

    const binaryResult = decimalNumber.toString(2);
    displayResult(binaryResult);
}

function convertToDecimal() {
    const inputNumber = document.getElementById('inputNumber').value;

    if (inputNumber === '') {
        alert('Please enter a binary number.');
        return;
    }

    const binaryNumber = inputNumber;

    if (!/^[01]+$/.test(binaryNumber)) {
        alert('Invalid input. Please enter a valid binary number.');
        return;
    }

    const decimalResult = parseInt(binaryNumber, 2);
    displayResult(decimalResult);
}

function displayResult(result) {
    document.getElementById('result').innerText = `Result: ${result}`;
}
