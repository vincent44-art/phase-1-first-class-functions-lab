// Code your solution in this file!
// Function to return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Function to return the last two drivers
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Array containing the two driver functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Higher-order function that returns a fare multiplier function
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // Fare doubler function using createFareMultiplier
  const fareDoubler = createFareMultiplier(2);
  
  // Fare tripler function using createFareMultiplier
  const fareTripler = createFareMultiplier(3);
  
  // Function to select different drivers
  const selectDifferentDrivers = function(drivers, driverFunction) {
    return driverFunction(drivers);
  };