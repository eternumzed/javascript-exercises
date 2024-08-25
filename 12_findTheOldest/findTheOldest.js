const findTheOldest = function (people) {
    const currentYear = new Date().getFullYear()

    return people.reduce((oldest, people) => {
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth
        const peopleAge = (people.yearOfDeath || currentYear) - people.yearOfBirth
        if (peopleAge > oldestAge) {
            return people
        } else return oldest

    })

};

const people = [
    {
        name: "Carly", // 28
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962, // 49
        yearOfDeath: 2011,
    },
    {
        name: "Jane", // 29
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

console.log(findTheOldest(people))



// Do not edit below this line
module.exports = findTheOldest;
