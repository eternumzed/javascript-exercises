const removeFromArray = function (array, ...element) {
    newArray = Array.from(array);
    for (let i = array.length; i--;) {
        for (let j = 0; j < element.length; j++) {
            if (array[i] === element[j]) {
                console.log("Ang tatanggalin", array[i], " at ", element[j])
                newArray.splice(i, 1);
            }
        }
    }
    return newArray;
};

removeFromArray([1, 2, 3, 3, 4], 3, 2,);

// Do not edit below this line
module.exports = removeFromArray;
