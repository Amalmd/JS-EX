//? 1.1- Basic loop
// You are given this array:
const words = ['one', 'two', 'three', 'four', 'five'];
// Loop over this array with the forEach method and console log each
// element and its index.
words.forEach(el,i) => {
    return console.log(el + i);
}


//? 1.2- ToNumber
// Create a function ToNumber that takes one argument an array.
// Return from the function a new array changing the strings of numbers to
// actual numbers. Use the forEach method to accomplish this.
function ToNumber(arr){
    arr.forEach(el => {
        switch(el){
            case 'one': 1
            break
            case 'two': 2
            break
            case 'three': 3
            break
            case 'four': 4
            break
            case 'five': 5
            break
            default: 'invalid'
        }
    })
}
console.log(ToNumber[words]);


//? 1.3-Fruits
// You are given this array of fruits:

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// Loop over this array with the forEach method and console log this
// sentence : “I am eating a <fruit name>”. But if the fruit is an apple. You
// need to console log “I am eating an Apple.
// Notice we changed the “a” to “an”.
const sen = fruits.forEach(el => {
    if el.charAt(0)==='a'){
        return console.log('I am eating an &{el}');
    }
        return console.log('I am eating a &{el}');
    
})


//? 1.4- Mutate the array
// You are given this array of numbers:
const numbers = [1, 2, 3, 4, 5];
// Iterate over this array with the forEach method. With the help of the third
// argument of the forEach method (which is the array you are looping over)
// mutate the array that every number double value.
