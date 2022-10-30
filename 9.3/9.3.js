

const food=  ["Noodle", "Pasta", "Ice-Cream", "Meat", "Cucumber", "Olives"];
const food1=  ["Fries", "Ice-Cream", "Pizza", "Olives", "Hamburgers"];
 
 
function arrayMatch(arr1, arr2) {
  var arr = [];  // Array to contain match elements
  for(let i=0 ; i<food.length ; ++i) {
    for(let j=0 ; j<food1.length ; ++j) {
      if(food[i] == food1[j]) {    // If element is in both the arrays
        arr.push(food[i]);        // Push to arr array
      }
    }
  }
   
  return arr;  // Return the arr elements
}
 
console.log(arrayMatch(food, food1)); // [1, 10, 11, 12, 15, 100]