const fibonacci = function (nth) {
    nth = Number(nth);
    if (nth === 0) return 0;
    if (nth < 0) return 'OOPS';
    let prev = 0;
    let current = 1;
    for (let i = 1; i < nth; i++) {
        const helper = current
        current = prev + current;
        prev = helper;
    }
    return current;

};

console.log(fibonacci("0"))


// Do not edit below this line
module.exports = fibonacci;
