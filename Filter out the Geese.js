/*
https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
Write a function, gooseFilter / goose-filter / goose_filter /GooseFilter, 
that takes an array of strings as an argument and returns a filtered array containing the 
same elements but with the 'geese' removed.
The geese are any strings in the following array, which is pre-populated in your solution:
geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
*/


function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(function (bird) {
      return !geese.includes(bird)
  })
};