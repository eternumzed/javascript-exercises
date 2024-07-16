const palindromes = function (string) {
    const allowedCharacters = `abcdefghijklmnopqrstuvwxyz1234567890`;

    const cleanedVersion = string
        .toLowerCase()
        .split('')
        .filter((character) => allowedCharacters.includes(character))
        .join('');

    const reversedVersion = cleanedVersion
        .split('')
        .reverse()
        .join('');

    return cleanedVersion === reversedVersion;


};

console.log(palindromes("  - Animal lodots foliated detail of stool lamina."))

// Do not edit below this line
module.exports = palindromes;
