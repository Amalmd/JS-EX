/* max */
let vals = [5, 4, 1, 2, 9];
function max(acc, val){
    if(val>acc){
        acc=val;
    }
    return acc;
}
let biggest = vals.reduce(max);
console.log(biggest);

/* the sum of even numbers */
const arr = [5, 4, 1, 2, 9];
const sumOfEvenNumbers = (arr) => {
    return arr.reduce((acc,cur) =>{
        if(cur%2===0){
            return acc + cur;
        }
        return acc;
    }, 0)
};

const res = sumOfEvenNumbers(arr);
console.log(res);

/* average */
const avg = (arr) => {
    return arr.reduce((acc, cur) => {
        return acc + cur / arr.length;
    }, 0);
};

const res1 = avg(arr);
console.log(res1);


