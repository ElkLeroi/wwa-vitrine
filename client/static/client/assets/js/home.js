function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidAlphabetInput(input) {
    const alphabetRegex = /^[a-zA-Z]{2,}$/;
    return alphabetRegex.test(input);
}

function isValidNumericInput(input) {
    const numericRegex = /^\d{8,}$/;
    return numericRegex.test(input);
}

