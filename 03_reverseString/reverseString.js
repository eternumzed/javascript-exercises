const reverseString = function(string) {
    let word = "";
    string = string.split("");
    for (let i = string.length - 1; i >= 0; i--) word += string[i];
    return word;
};

console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
