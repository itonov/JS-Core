function isPalindrome(stringToCheck) {
    return stringToCheck === stringToCheck.split("").reverse().join("");
}

console.log(isPalindrome("haha"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("unitinu"));
