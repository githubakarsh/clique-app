
export const regexPatterns = {
    email : '',
    password: '',
    phoneNumber: /^[0-9]*$/,
}

export const regexChecker = (pattern, value) => {
    const isValidValue = regexPatterns[pattern].test(value);
    return isValidValue;
}