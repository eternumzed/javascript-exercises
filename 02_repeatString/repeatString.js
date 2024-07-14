const repeatString = function (string, num) {
    if (num < 0) return "ERROR";
    let word = "";
    for (let i = 1; i <= num; i++) word += string;
    return word;
};

const number = Math.floor(Math.random() * 1000)

repeatString("hey", number);

// Do not edit below this line
module.exports = repeatString;
