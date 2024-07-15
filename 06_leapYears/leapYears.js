const leapYears = function (year) {
    let leapYear;
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 && year % 100 === 0)) return true;
    else return false;
};

leapYears(2000);

// Do not edit below this line
module.exports = leapYears;
