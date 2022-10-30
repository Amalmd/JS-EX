/* Question 1:
In your own words what will this point to and why?
(Note this is the global scope) */
console.log(this);

//!Answer:
//? This will point to the global object and it will be set to the window

/* Question 2:
a. In your own words what will this point to and why?
b. How can you fix this code? */
const myObj = {
name: "Timmy",
greet: () => {
console.log(`Hello ${this.name}`);
},
};
myObj.greet();

//!Answer - a
//? This will also to the global object and it will be set to the window, because it's defined inside an arrow function and arrow functions don't get their own version of this
//! Answer -b
//? fixing the code by replacing the arrow function with a regular one that will have "this" set to myObject.
const myObject = {
    name: "Timmy",
    greet () {
    console.log(`Hello ${this.name}`);
    },
    };
    myObject.greet();



/* Question 3:
In your own words what will this point to and why? */
const myFuncDec = function () {
console.log(this);
};

//!Answer
//? this will point to the global object and it's still set to window, because we didn't put it inside an object.


/* Question 4:
In your own words what will this point to and why? */
const myFuncArrow = () => {
console.log(this);
};
myFuncArrow();

//! Answer
//? this will point to the global object and it's still set to window, because again we didn't put it inside an object.

/* Question 5:
a. In your own words, what will this point to and why?
b. How can you fix this code? */
document.querySelector(".element").addEventListener(() => {
console.log(this);
});

//!Answer - a 
//? this will refer to the global window, because it's used in an arrow function.
//!Answer - b
//? to fix this code we need to replace the arrow function with a regular one
document.querySelector(".element").addEventListener('click' , function () {
    console.log(this);
    });
