// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

  function returnFirstTwoDrivers() {
    return drivers.slice(0,2);
    
}
console.log(returnFirstTwoDrivers());

function returnLastTwoDrivers() {
    return drivers.slice(2,4);
    
}
console.log(returnLastTwoDrivers());

const selectingDrivers = [returnFirstTwoDrivers(),returnLastTwoDrivers()];
 console.log(selectingDrivers);