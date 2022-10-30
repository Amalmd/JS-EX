
/* Q-1 */
const numbers = [1, -5, 666, 2, 400, 11];

numbers.sort(function(x,y){
    return x-y;
});

console.log(numbers);

/* Q-2 */

const numbers1 = [1, -5, 666, 2, 400, 11];

numbers1.sort(function(x,y){
    return y-x;
});

console.log(numbers1);