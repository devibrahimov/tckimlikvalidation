function validateTCNumber(tcNumber) {
    if (tcNumber.length !== 11 || isNaN(tcNumber)) {
        return "TC Number is Incorrect";
    }

    if (tcNumber[0] === "0") {
        return "TC Number is Incorrect";
    }

    let digits = tcNumber.split('').map(Number);
    let oddSum = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
    let evenSum = digits[1] + digits[3] + digits[5] + digits[7];

    let checkDigit10 = ((oddSum * 7) - evenSum) % 10;
    if (checkDigit10 !== digits[9]) {
        return "TC Number is Incorrect";
    }

    let totalSum = digits.slice(0, 10).reduce((a, b) => a + b, 0);
    let checkDigit11 = totalSum % 10;
    if (checkDigit11 !== digits[10]) {
        return "TC Number is Incorrect";
    }

    return "TC Number is Correct";
}
