const palindromes = function (string) {
    let word = string.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let isPalindrome;
    word = word.split("");
    let halfLength = Math.floor((word.length / 2).toFixed(1));
    for (let i = 0; i < halfLength; i++) {
        if (word[i] === word[word.length - (i + 1)]) {
            isPalindrome = true;
        } else isPalindrome = false;
    }
    return isPalindrome;
};

console.log(palindromes("  - Animal loots foliated detail of stool lamina."))

// Do not edit below this line
module.exports = palindromes;
