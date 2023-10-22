function checkPalindrome() {
    var inputNumber = document.getElementById('inputNumber').value;
    var reversedNumber = inputNumber.split('').reverse().join('');

    if (inputNumber === reversedNumber) {
        document.getElementById('output').textContent = 'Palindrome: Yes';
    } else {
        document.getElementById('output').textContent = 'Palindrome: No';
    }
}