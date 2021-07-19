// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2);
}
const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function selectDifferentDrivers(drivers, func) {
        return func(drivers);
}

function createFareMultiplier(arg) {
    return (arg) => arg ** 2;
}

const fareDoubler = (arg) => arg * 2;

const fareTripler = (arg) => arg * 3;

// fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.