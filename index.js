const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function (multiplier) {
  return function (value) {
    return multiplier * value;
  };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};
//     it('returns either the first two drivers or the last two drivers', function () {
