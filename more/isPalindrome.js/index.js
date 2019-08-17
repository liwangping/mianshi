var isPalindrome = function(s) {
    return s === s.split("").reverse().join("");
}

console.log(isPalindrome("aba"))