/*https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/javascript

Challange: Your task is to sum the differences between consecutive pairs in the array in descending order.
1. Sort 
2. ForLoop 
*/


/*
function sumOfDifferences(arr) {
    let result = 0;
    const sorted = arr.sort((a, b) => {
        return b - a
    })
  console.log('sorted', sorted)
  
  for( let i = 0; i < sorted.length -1 ; i++) {
  result += sorted[i] - sorted[i+1]
  }
  return result 
}

console.log(sumOfDifferences([10, 2, 1]))
*/


/* solution from codewars */

function sumOfDifferences(arr) {
  return arr.length > 1 ? 
  Math.max(...arr) - Math.min(...arr) : 0;  
  }
  
  console.log(sumOfDifferences([10, 2, 1]))